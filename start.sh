#!/bin/bash

initial_commit=c1e383bb
git checkout master
git reset --hard $initial_commit
git push -u --force

git branch -D start
git checkout -b start

git cherry-pick 8a9bd42
git cherry-pick 6348a7a
git cherry-pick 48230e6
git cherry-pick 3d95f86
git cherry-pick 3a843c7
git cherry-pick b70bc59

