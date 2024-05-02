FROM node:latest

WORKDIR /src
COPY ./ /src
RUN npm install

ENTRYPOINT [ "npm", "run", "start" ]