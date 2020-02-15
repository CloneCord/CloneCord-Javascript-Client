#!/usr/bin/env bash
rm -r src
rm -r test
rm -r docs
java -jar openapi-generator-cli-4.2.3.jar generate -i http://localhost:8080/v2/api-docs -g javascript -o . --skip-validate-spec
git add -A
rm git_push.sh
npm install
npm audit fix
npm test
npm pack