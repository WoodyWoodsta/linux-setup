"use strict";

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertSourceMap = require("convert-source-map");
var pathExists = require("path-exists");
var sourceMap = require("source-map");
var slash = require("slash");
var path = require("path");
var util = require("./util");
var fs = require("fs");
var _ = require("lodash");

module.exports = function (commander, filenames, opts) {
  if (commander.sourceMaps === "inline") {
    opts.sourceMaps = true;
  }

  var results = [];

  var buildResult = function buildResult() {
    var map = new sourceMap.SourceMapGenerator({
      file: path.basename(commander.outFile || "") || "stdout",
      sourceRoot: opts.sourceRoot
    });

    var code = "";
    var offset = 0;

    _.each(results, function (result) {
      var filename = result.filename || "stdout";
      code += result.code + "\n";

      if (result.map) {
        (function () {
          var consumer = new sourceMap.SourceMapConsumer(result.map);

          var sourceFilename = filename;
          if (commander.outFile) {
            sourceFilename = path.relative(path.dirname(commander.outFile), sourceFilename);
          }
          sourceFilename = slash(sourceFilename);

          map._sources.add(sourceFilename);
          map.setSourceContent(sourceFilename, result.actual);

          consumer.eachMapping(function (mapping) {
            map._mappings.add({
              generatedLine: mapping.generatedLine + offset,
              generatedColumn: mapping.generatedColumn,
              originalLine: mapping.source == null ? null : mapping.originalLine,
              originalColumn: mapping.source == null ? null : mapping.originalColumn,
              source: mapping.source == null ? null : sourceFilename
            });
          });

          offset = code.split("\n").length;
        })();
      }
    });

    if (commander.sourceMaps === "inline" || !commander.outFile && commander.sourceMaps) {
      code += "\n" + convertSourceMap.fromObject(map).toComment();
    }

    return {
      map: map,
      code: code
    };
  };

  var output = function output() {
    var result = buildResult();

    if (commander.outFile) {
      if (commander.sourceMaps && commander.sourceMaps !== "inline") {
        var mapLoc = commander.outFile + ".map";
        result.code = util.addSourceMappingUrl(result.code, mapLoc);
        fs.writeFileSync(mapLoc, (0, _stringify2.default)(result.map));
      }

      fs.writeFileSync(commander.outFile, result.code);
    } else {
      process.stdout.write(result.code + "\n");
    }
  };

  var stdin = function stdin() {
    var code = "";

    process.stdin.setEncoding("utf8");

    process.stdin.on("readable", function () {
      var chunk = process.stdin.read();
      if (chunk !== null) code += chunk;
    });

    process.stdin.on("end", function () {
      results.push(util.transform(commander.filename, code));
      output();
    });
  };

  var walk = function walk() {
    var _filenames = [];
    results = [];

    _.each(filenames, function (filename) {
      if (!pathExists.sync(filename)) return;

      var stat = fs.statSync(filename);
      if (stat.isDirectory()) {
        (function () {
          var dirname = filename;

          _.each(util.readdirFilter(filename), function (filename) {
            _filenames.push(path.join(dirname, filename));
          });
        })();
      } else {
        _filenames.push(filename);
      }
    });

    _.each(_filenames, function (filename) {
      if (util.shouldIgnore(filename)) return;

      var data = util.compile(filename);
      if (data.ignored) return;
      results.push(data);
    });

    output();
  };

  var files = function files() {

    if (!commander.skipInitialBuild) {
      walk();
    }

    if (commander.watch) {
      var chokidar = util.requireChokidar();
      chokidar.watch(filenames, {
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: {
          stabilityThreshold: 500,
          pollInterval: 100
        }
      }).on("all", function (type, filename) {
        if (util.shouldIgnore(filename) || !util.canCompile(filename, commander.extensions)) return;

        if (type === "add" || type === "change") {
          util.log(type + " " + filename);
          try {
            walk();
          } catch (err) {
            console.error(err.stack);
          }
        }
      });
    }
  };

  if (filenames.length) {
    files();
  } else {
    stdin();
  }
};
