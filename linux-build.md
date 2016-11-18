# eOS Build

Enable **Canonical Partners** repository in _Software and Updates_

## Update

```shell
sudo apt update
sudo apt full-upgrade
```

**Timeshift**

```shell
sudo apt-add-repository -y ppa:teejee2008/ppa
sudo apt update
sudo apt install timeshift
```
---

## Hardware and Tweaks

**Battery Saving**

```shell
sudo apt-add-repository ppa:linrunner/tlp
sudo apt update
sudo apt install tlp tlp-rdw
sudo tlp start
```

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

-   `Google Drive`
    Install below and configure in `gnome-control-center`
```shell
sudo apt install gnome-control-center gnome-online-accounts
```

---

## Development Tools

**Java**

```shell
sudo apt install openjdk-8-jdk
```

**Atom**

Install deb file from [Atom.io](https://atom.io/)
Install `sync-settings` package and load packages from generated github gist

**Node**

Install `nvm` and install the latest node

```shell
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.2/install.sh | bash
```
Copy `local-npm.service` into `/etc/systemd/system` and run:

```shell
nvm install <latest_version>
nvm alias default <latest_version>

npm i -g local-npm

systemctl daemon-reload
systemctl enable local-npm.service
systemctl start local-npm.service
```

```shell
npm config set registry http://127.0.0.1:5080
```

Install global packages one-time!

```shell
npm i -g babel babel-cli babel-eslint bower browserify bump-cli caniuse-cmd chai chokidar-cli edison-cli electron electron-installer-debian electron-packager eslint eslint-config-airbnb-base eslint-plugin-babel eslint-plugin-html eslint-plugin-import eslint-plugin-react filesystem-bower-resolver glob-cli hpm-cli htmlhint http-server ifconfig local-npm mocha nodemon npm-check-updates ntl svgo uglify-js vulcanize webfont-dl
```
```
npm i -g gulpjs/gulp-cli#4.0
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
Copy in `.bashrc`, `.bash_profile`, `.bash_aliases` and `.dircolors` from [this gist](https://gist.github.com/WoodyWoodsta/f120fb38fcb43b0d3996)

-   Bash Git Prompt

```shell
git clone https://github.com/magicmonty/bash-git-prompt.git ~/.bash-git-prompt
```

---

## Cleanup

```shell
sudo apt autoremove
sudo apt autoclean
```
