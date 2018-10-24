#! /bin/sh
set -e
rm content/stats/*
curl -s https://node-db.netlify.com/stats/1w.md > content/stats/1w.md
curl -s https://node-db.netlify.com/stats/4w.md > content/stats/4w.md
curl -s https://node-db.netlify.com/stats/1y.md > content/stats/1y.md
curl -s https://node-db.netlify.com/stats/all.md > content/stats/_index.md 