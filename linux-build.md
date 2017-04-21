# eOS Build

## Update

```shell
sudo apt update
sudo apt full-upgrade
```

## Hardware and Tweaks

**Elementary Tweaks**

```shell
sudo apt install unity-tweak-tool
```

---

## Ubuntu Related Stuff

**Restricted extras**

```shell
sudo apt install ubuntu-restricted-extras
```

**Media Codecs**

```shell
sudo apt install libavcodec-extra
```

---

## General Apps

```shell
sudo apt install vlc
```

**Chrome**

Install chrome on the [dev channel](https://www.google.com/chrome/browser/desktop/index.html?platform=linux&extra=devchannel)

**Utils**

-   `indicator-multiload`

```shell
sudo add-apt-repository ppa:indicator-multiload/stable-daily
sudo apt update
sudo apt install indicator-multiload
```

---

## Development Tools

**Java**

```shell
sudo apt install openjdk-8-jdk
```

**VSCode**

Visit the VSCode site.

**Node**

Install `nvm` and install the latest node

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```
Install `yarn` package manager
```shell
npm i -g yarn
```

Install global packages one-time!

```shell
yarn global add babel babel-cli babel-eslint bower browserify bump-cli caniuse-cmd chai chokidar-cli edison-cli electron electron-installer-debian electron-packager eslint eslint-config-airbnb-base eslint-plugin-babel eslint-plugin-html eslint-plugin-import eslint-plugin-react eslint-plugin-flow-vars eslint-plugin-flowtype filesystem-bower-resolver glob-cli hpm-cli htmlhint http-server ifconfig local-npm mocha nodemon npm-check-updates ntl svgo uglify-js vulcanize webfont-dl rollup nodemon npm-check-updates ntl
```
```
yarn global add -g gulpjs/gulp-cli#4.0 mishoo/UglifyJS2#harmony
```

**ArangoDB**

Download and install from [here](https://www.arangodb.com/download/)

**g++/gcc Toolchain**

```shell
sudo apt install g++
```

**Utils**

-   7zip

```shell
sudo apt install p7zip
```

-   Log viewer

```shell
sudo apt install gnome-system-log
```

-   Bash Config
Copy in the zshell stuff@installed

-   Bash Git Prompt

---

## Cleanup

```shell
sudo apt autoremove
sudo apt autoclean
```
