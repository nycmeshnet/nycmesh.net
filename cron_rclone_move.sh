#/bin/bash
tsp nice -n 10 rclone move --delete-empty-src-dirs --verbose --bwlimit 500M /disk1/www/nyc_dot_camera_archive/data/ NYC_DoT_Camera_Archive:NYC_DoT_Camera_Archive
