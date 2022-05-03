#!/bin/sh

fileName="dataFile.json"
path_form="_forms"
path_exercises="$path_form/exercises"

find_form_number()  {
  echo find -maxdepth 1 -type d | read -r dir; find "$path_form" -type f | wc -l;
}

find_exercises_number() {
  echo find -maxdepth 1 -type d | read -r dir; find "$path_exercises" -type f | wc -l;
}

form_number="$(find_form_number)"
exercises_number="$(find_exercises_number)"
material_number="3"


init_file() {
  echo '{ "forms": '$form_number', "materials": '$material_number', "exercises": '$exercises_number' }' > $fileName
}

if [ -e $fileName ]; then
  echo "File $fileName already exists!"
  printf "Update data..."
  init_file
else
  echo >> $fileName
  printf "Push data..."
  init_file
fi