#! /bin/sh
set -e
rm -rf resources/node-map/
git clone https://github.com/nycmeshnet/network-map resources/node-map
cd resources/node-map
if [[ -n "$STANDALONE_MAP_BUILD" ]]; then
  sed -i '' 's|basename="/map"|basename="/"|' src/App.js
  sed -i '' 's|href="/map/nodes/|href="/nodes/|' src/components/Stats/component.js
  sed -i '' 's|"homepage": "/map"|"homepage": "/"|' package.json
fi
npm run update-data
npm install
npm run build
rm -rf ../../static/map/static/
cp -r build/static/ ../../static/map/static/
rm -rf ../../static/img/map/
cp -r build/img/map ../../static/img/map/
cp build/index.html ../../layouts/partials/node-map.html