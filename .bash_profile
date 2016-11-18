# ~/.bashrc

if [ -f $HOME/.bashrc ]; then
  . $HOME/.bashrc
fi

# fix terminal dir colors
eval "$(dircolors ~/.dircolors)";

# nvm
export NVM_DIR="/home/sean/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm

# Git Prompt Modifications

GIT_PROMPT_ONLY_IN_REPO=1
GIT_PROMPT_START='${debian_chroot:+($debian_chroot)}\n\[\033[1;31m\]\u\[\033[1;30m\] on \[\033[01;32m\]\h\[\033[1;30m\] in \[\033[01;34m\]\w\[\033[00m\]'

GIT_PROMPT_SHOW_UPSTREAM=1 # uncomment to show upstream tracking branch
#source ~/.bash-git-prompt/gitprompt.sh
