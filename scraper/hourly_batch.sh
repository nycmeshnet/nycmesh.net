#!/bin/bash
#year=$(date -d '1 hour ago' +%Y)
#month=$(date -d '1 hour ago' +%m)
#day=$(date -d '1 hour ago' +%d)
#hour=$(date -d '1 hour ago' +%H)
#year=$(date +%Y)
#month=$(date +%m)
#day=$(date +%d)
#hour=$(date +%H)
year=$1
month=$2
day=$3
hour=$4

input="nycdotcams-$1-$2-$3.csv"

public_root="/disk1/www/nyc_dot_camera_archive/data"
private_root="/disk1/temp/nyc_dot_camera_archive"
public_dir="$public_root/$year/$month/$day/$hour"
file_date="$year-$month-$day-$hour"

while IFS=',' read -r f1 f2 f3 f4
do
	echo "$(date +%D-%T) Publishing $f1 (ID: $f2) for $file_date..."

	if ! compgen -G "$private_root/$f2-$file_date:*.jpg" > /dev/null; then
		echo "$(date +%D-%T) No input files exist. Skipping..."
		continue	
	fi 

	mkdir -p $public_dir

	if test -f "$public_dir/$f2-$file_date.tar"; then
		echo "$(date +%D-%T) Output file exists, as do source files. Rewriting..."
		rm $public_dir/$f2-$file_date.tar
		#rm $public_dir/$f2-$file_date.mp4
		#rm $public_dir/$f2-$file_date.srt
	fi

	#echo "$(date +%D-%T) Creating subtitles..."
	
	#/home/aakash/create_subtitles.sh $private_root "$f2" $file_date $public_dir "$f1" &

	#echo "$(date +%D-%T) Encoding video..."
	#ffmpeg -loglevel warning -nostdin -f image2 -framerate 1 -threads 6 -pattern_type glob -i "$private_root/$f2-$file_date:*.jpg" -preset ultrafast -tune stillimage "$public_dir/$f2-$file_date.mp4"
	
	#wait
	echo "$(date +%D-%T) Tar-ing files..."
	tar -cf $public_dir/$f2-$file_date.tar --transform "s,${private_root:1}/,," $private_root/$f2-$file_date*.jpg

	echo "$(date +%D-%T) Cleaning up temp files..."
	rm $private_root/$f2-$file_date:* &

	echo "$(date +%D-%T) Adding to key file..."
	echo "$f2,$f4,$f1" >> "$public_dir/key.txt"

	echo "$(date +%D-%T) Done."
done < "$input"

