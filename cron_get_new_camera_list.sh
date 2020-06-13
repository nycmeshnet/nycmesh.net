#/bin/bash
python3 /home/aakash/nycdotcams.py > /home/aakash/nycdotcams-$(date -d '+1 day' +%Y)-$(date -d '+1 day' +%m)-$(date -d '+1 day' +%d).csv
