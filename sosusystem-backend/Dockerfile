FROM node:14.2.0-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json /app/
COPY package-lock.json /app/
ADD . /app/
