#!/usr/bin/env bash

java -jar swagger-codegen-cli-2.4.12.jar generate -i http://localhost:8080/v2/api-docs -l javascript -o . --artifact-version 1.0.0