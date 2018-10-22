#! /bin/sh
set -e
rm -rf resources/node-map/
git clone https://github.com/olivernyc/node-map resources/node-map
cd resources/node-map
npm run update-data
npm install
npm run build
rm -rf ../../static/map/static/
cp -r build/static/ ../../static/map/static/
cp build/index.html ../../layouts/partials/node-map.html