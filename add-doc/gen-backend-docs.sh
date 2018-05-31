#!/bin/bash

if [ ! -d "add-doc/controllers" ]; then
  mkdir add-doc/controllers
fi

if [ ! -d "add-doc/models" ]; then
  mkdir add-doc/models
fi

if [ ! -d "add-doc/genetics" ]; then
  mkdir add-doc/genetics
fi

## CONTROLLERS
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/admin.server.controller.js > add-doc/controllers/admin.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/course.server.controller.js > add-doc/controllers/course.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/fridge.server.controller.js > add-doc/controllers/fridge.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/genetics.server.controller.js > add-doc/controllers/genetics.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/scenario.server.controller.js > add-doc/controllers/scenario.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/controllers/user.server.controller.js > add-doc/controllers/user.md

##  MODELS
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --module-index-format grouped --files app/models/user.server.model.js | sed -e 's/Array\./Array/g' -e 's/Object\./Object/g' | sed -e 's/<code>&quot;/<code>/g' -e 's/&quot;<\/code>/<\/code>/g' -e 's/\\\&quot;/\&quot;/g'> add-doc/models/user-model.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --module-index-format grouped --files app/models/course.server.model.js | sed -e 's/Array\./Array/g' > add-doc/models/course-model.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --module-index-format grouped --files app/models/fridge.server.model.js | sed -e 's/Array\./Array/g' > add-doc/models/fridge-model.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --module-index-format grouped --files app/models/phage.server.model.js | sed -e 's/Array\./Array/g' > add-doc/models/phage-model.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --module-index-format grouped --files app/models/scenario.server.model.js | sed -e 's/Array\./Array/g' > add-doc/models/scenario-model.md

## GENETICS

node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/genetics/phage.experiment.js | sed -e 's/Array\./Array/g' -e 's/Object\./Object/g' > add-doc/genetics/phage-experiment.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/genetics/phage.logic.js | sed -e 's/Array\./Array/g' -e 's/Object\./Object/g'> add-doc/genetics/phage-logic.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/genetics/phage.scenario.js | sed -e 's/Array\./Array/g' -e 's/Object\./Object/g'> add-doc/genetics/phage-scenario.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/genetics/plate.experiment.js | sed -e 's/Array\./Array/g' -e 's/Object\./Object/g'> add-doc/genetics/plate-experiment.md
node_modules/.bin/jsdoc2md --plugin dmd-compodoc-api-plugin --files app/genetics/plexer.experiment.js | sed -e 's/Array\./Array/g' -e 's/Object\./Object/g'> add-doc/genetics/plexer-experiment.md