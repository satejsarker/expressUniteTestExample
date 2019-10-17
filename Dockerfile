FROM node:10
WORKDIR /
# install the pakage


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000


CMD [ "npm","run","dev" ]