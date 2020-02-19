#!/usr/bin/env bash

set -e
if [ -z "$1" ]
  then
    echo "No argument supplied"
    false
fi
rm -rf src
rm -rf test
rm -rf docs
echo "{\"projectVersion\": \"$1\" }" >config.json
java -jar openapi-generator-cli-4.2.3.jar generate -i http://localhost:8080/v3/api-docs -g javascript -c config.json -o .
rm config.json
rm git_push.sh
git add -A
npm install
npm audit fix
npm test
git commit -m "Bump version to $1"
git push
git tag "v$1"
git push --tags
