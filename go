#!/usr/bin/env bash
set -e -o pipefail

##DOC test: runs all tests
goal_test() {
  npm test -- --watchAll=false
}

##DOC build: build the application
goal_build() {
  npm install && npm run build
}

##DOC run: runs the application
goal_run() {
  npm start
}

if type -t "goal_$1" &>/dev/null; then
  "goal_$1" "${@:2}"
else
  echo "usage: $0 <goal>"
  grep -e "^##DOC" <"$(basename "$0")" | sed "s/^##DOC \(.*\)/  \1/"
  exit 1
fi
