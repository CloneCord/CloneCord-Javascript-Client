#!/usr/bin/env bash
rm -r src
rm -r test
rm -r docs
java -jar swagger-codegen-cli-2.4.12.jar generate -i http://localhost:8080/v2/api-docs -l javascript -o . --artifact-version 1.0.0
git add -A
rm git_push.sh