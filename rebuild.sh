#!/usr/bin/env bash
rm -r src
rm -r test
rm -r docs
echo "{\"projectVersion\": \"$1\" }" >config.json
java -jar openapi-generator-cli-4.2.3.jar generate -i http://localhost:8080/v3/api-docs -g javascript -c config.json -o .
rm -r config.json
git add -A
rm git_push.sh
npm install
npm audit fix
npm test
git commit -m "Bump version to $1"
git push
git tag "v$1"
git push --tags
