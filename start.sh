#!/bin/bash

for commit in 8a9bd42 6348a7a 48230e6 3d95f86 3a843c7 b70bc59
do
  message=$(git log -n 1 --pretty=format:%s $commit)
  echo "message is $message"
  git show $commit > temp.patch
  git apply temp.patch
  rm temp.patch
  git add .
  git commit -m "$message"
  sleep 3
  git commit --amend --no-edit --date "$(date)"
done

