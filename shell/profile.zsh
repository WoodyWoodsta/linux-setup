# fix terminal dir colors
eval "$(dircolors ~/.dircolors)";

# nvm
export NVM_DIR="/home/sean/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

# TexLive
export PATH=$PATH:/usr/local/texlive/2016/bin/x86_64-linux:/home/sean/.config/yarn/global/node_modules/.bin/

# Bash Dev Helpers
source ~/.bash_dev_helpers
