#
# General
#
alias ll="ls -lv"
alias lla="ls -alv"
alias io="sudo iotop -a"

# updates
alias saud="sudo apt-get update"
alias saug="sudo apt-get upgrade"
alias sadug="sudo apt-get dist-upgrade"
alias sai="sudo apt-get install"

# fix clear
alias clear='echo -ne "\033c"'
alias edit='scratch-text-editor'
alias sgedit='sudo gedit'

#
# Gulp aliases / functions
#
alias gbp="NODE_ENV=production gulp build"
alias gbpp="NODE_ENV=production gulp build && pack"

#
# Git aliases
#

# log, status & diff
alias glg="git log --pretty='format:%Cgreen%h%Creset %an - %s' --graph"
alias gl="git log --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen %cr %an%Creset'"
alias gs="git status"
alias gd="git diff"
# add
alias ga="git add"
alias gaa="git add --all"
# commit
alias gca="git commit -a -m"
# tag & push/pull
alias gt="git tag"
alias gtl="git tag -l"
alias gtd="git tag -d"
alias gpt="git push --tags"
alias gp="git push"
alias gpom="git push origin master"
alias gpod="git push origin dev"
alias gpomt="git push origin master --tags"
alias gpodt="git push origin dev --tags"
alias ggom="git pull origin master"
# remote
alias gra="git remote add"
alias grao="git remote add origin"
alias grr="git remote rm"
alias grv="git remote -v"
# branch
alias gb="git branch"
alias gbd="git branch -D"
alias gba="git branch -a"
# checkout
alias gcob="git checkout -b"
alias gco="git checkout"

#
#GitSub
#
gitsub() {
  curl http://gitsub:8282/$1;
}

# node aliases
alias sudo='sudo env PATH=$PATH:$NVM_BIN'

# eTRAX
alias serve-ppro='cd /mnt/Data/ITDev/projects/eTRAX/etrax-servers/app-server && node server.js -p 3030'
alias watch-ppro='cd /mnt/Data/ITDev/projects/eTRAX/etrax-app/app-project && gulp watch'
alias build-ppro='cd /mnt/Data/ITDev/projects/eTRAX/etrax-app/app-project && gulp build'

# Directories
alias gitsub-dir='cd /mnt/Data/ITDev/gitsub/'
alias ITprojects-dir='cd /mnt/Data/ITDev/projects'
alias github-dir='cd /mnt/Data/ITDev/github/'
alias github-forks-dir='cd /mnt/Data/ITDev/github-forks/'
alias github-gists-dir='cd /mnt/Data/ITDev/github-gists/'
alias thesis='cd /mnt/Data/Engineering/thesis/'
alias mars-rsvp-client='thesis && cd code/mars-rover-rsvp/mars-rover-rsvp-client'
alias mars-rsvp-server='thesis && cd code/mars-rover-rsvp/mars-rover-rsvp-server'
alias mars-rce='thesis && cd code/mars-rover-rce'
alias draw-group-dir='cd /mnt/Data/ITDev/projects/draw-group/'

function runEdisonWifi() {
  if [ $1 ]
  then
    sudo sshfs -o allow_other "curiosity@$1:/home/curiosity" /home/sean/edisonSSH/
  else
    echo "Please input an IP address"
  fi
}

alias mount-edison="sudo sshfs -o allow_other curiosity@192.168.2.15:/home/curiosity /home/sean/edisonSSH/"
alias unmount-edison="sudo fusermount -u /home/sean/edisonSSH/"
alias mount-edison-wifi="runEdisonWifi"
alias start-kurento="sudo service kurento-media-server-6.0 start"
alias stop-kurento="sudo service kurento-media-server-6.0 stop"

# Mocha
alias mtest='./node_modules/.bin/mocha --require resources/bootstrap-es6'
alias mdbg='node --inspect --debug-brk ./node_modules/.bin/_mocha --require resources/bootstrap-es6'

# NPM
alias npm-local='npm config set registry "http://127.0.0.1:5080/"'
alias npm-remote='npm config set registry "https://registry.npmjs.org/"'

# Yarn
alias yga='yarn global add --prefix `npm get prefix`'
alias yui='yarn upgrade-interactive'

# NPM Scripts
alias start='yarn run start'
alias dev='yarn run dev'
alias debug='yarn run debug'
alias debug-tests='yarn run debug:test'
alias test='yarn run test'
