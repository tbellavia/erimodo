FROM node:20

WORKDIR /src
COPY ./ /src
RUN npm install

ENTRYPOINT [ "npm", "run", "start" ]