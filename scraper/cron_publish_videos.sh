#/bin/bash
tsp nice -n 10 /home/aakash/hourly_batch.sh $(date -d '1 hour ago' +%Y) $(date -d '1 hour ago' +%m) $(date -d '1 hour ago' +%d) $(date -d '1 hour ago' +%H)
