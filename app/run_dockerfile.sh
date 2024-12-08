#!/bin/bash

#mv .env.example .env         Uncomment if you need
docker build -t nodeapp .
docker run -e HOST_NAME=${HOSTNAME} -dp 8000:8000 nodeapp