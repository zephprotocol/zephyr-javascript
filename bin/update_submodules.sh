#!/usr/bin/env bash

# initialize submodules recursively
git submodule update --init --recursive

# update zephyr-cpp
cd ./external/zephyr-cpp
git checkout master
git pull --ff-only origin master

# update monero-project
cd ./external/zephyr
git checkout master
git pull --ff-only origin master
cd ../../../../