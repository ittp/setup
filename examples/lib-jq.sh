#!/bin/bash

echo '{"user": {"id": 1, "name": "Cameron"}}' | jq '{ name: .user.name }' 
# { "name": "Cameron" }


jq -r '[(.dependencies, .devDependencies) | keys] | flatten | length' package.json
