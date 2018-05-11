#!/bin/bash

if [ ! -d "add-doc/controllers" ]; then
  mkdir add-doc/controllers
fi

if [ ! -d "add-doc/models" ]; then
  mkdir add-doc/models
fi

#node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/admin.server.controller.js > add-doc/controllers/admin.md
#node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/course.server.controller.js > add-doc/controllers/course.md
#node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/fridge.server.controller.js > add-doc/controllers/fridge.md
#node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/genetics.server.controller.js > add-doc/controllers/genetics.md
#node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/scenario.server.controller.js > add-doc/controllers/scenario.md
#node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/user.server.controller.js > add-doc/controllers/user.md

node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/models/course.server.model.js > add-doc/models/course.md
