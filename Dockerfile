FROM node:14 AS base

# Install system dependencies
RUN apt-get update

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

COPY package.json package-lock.json /var/www/

WORKDIR /var/www

RUN npm install

FROM base

# Copy app files and set permissions
COPY . /var/www/

# Vue client (node install)
WORKDIR /var/www

ENV PATH="./node_modules/.bin:${PATH}"

CMD npm run build
