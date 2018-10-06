#! /bin/sh
set -e
rm -rf node-map-public/
git clone https://github.com/olivernyc/node-map-public
cd node-map-public
npm run update-data
npm install
npm run build
rm -rf ../static/map/static/
cp -r build/static/ ../static/map/static/
cp build/index.html ../layouts/partials/node-map.html