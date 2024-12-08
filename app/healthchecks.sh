#!/bin/sh

wget --no-verbose --tries=1 --spider http://localhost:8000/hostname || exit 1
wget --no-verbose --tries=1 --spider http://localhost:8000/author || exit 1
wget --no-verbose --tries=1 --spider http://localhost:8000/id || exit 1