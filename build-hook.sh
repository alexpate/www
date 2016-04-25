#!/bin/bash -l

git clone
gulp buildOnServerOnly

# git clone $GIT_REPO $TMP_GIT_CLONE
# # jekyll build --config $TMP_GIT_CLONE/_config.yml,$TMP_GIT_CLONE/_config.production.yml --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
# cp $TMP_GIT_CLONE/package.json package.json

# cp $TMP_GIT_CLONE/gulpfile.js gulpfile.js
# gulp buildOnServerOnly  --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
# #mv temp-build /var/www/alexpate.uk
# rm -Rf $TMP_GIT_CLONE
# #rm -Rf temp-build
exit