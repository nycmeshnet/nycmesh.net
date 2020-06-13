#!/bin/bash
private_root="/disk1/temp/nyc_dot_camera_archive"
current_date=$(date +%F-%T)
if wget --timeout=5 --tries=1 -O "$private_root/$2-$current_date.jpg" $1; then
	echo "Successfully pulled image"
else
	echo "Error pulling. Deleting image."
	rm "$private_root/$2-$current_date.jpg"
fi

