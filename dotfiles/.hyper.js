module.exports = {
  config: {
    // default font size for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: '"Fira Code", "DejaVu Sans Mono", "Lucida Console", monospace',

    // terminal cursor background color (hex)
    cursorColor: 'red',

    // terminal background color (hex)
    backgroundColor: '#0A0A0A',

    // border color (window, tabs)
    borderColor: '#333',

    // custom css to embed in the main window
    css: [''],

    // custom css to embed inside each terminal
    termCSS: `
      x-screen x-row { font-variant-ligatures: contextual; }
    `,

    // Disbale the bell!
    bell: false,

    // Hamburger menu
    showHamburgerMenu: true,

    // Copy on select
    copyOnSelect: true,

    // some color overrides. see http://bit.ly/29k1iU2 for
    // the full list
    colors: [
      '#000000',
      '#ff0000',
      '#33ff00',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#d0d0d0',
      '#808080',
      '#ff0000',
      '#33ff00',
      '#ffff00',
      '#0066ff',
      '#cc00ff',
      '#00ffff',
      '#ffffff'
    ]
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hypersolar`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyperterm-subpixel-antialiased',
    "hyperterm-dibdabs",
    "hyper-tab-icons",
    "hyperterm-material",
    "hyper-blink",
    "hyperlayout",
    "hyper-statusline",
    "hyperlinks"
  ],

  // in development, you can create a directory under
  // `~/.hyperterm_modules/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
