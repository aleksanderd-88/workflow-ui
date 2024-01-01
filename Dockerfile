FROM node:lts

WORKDIR /usr/src/app/ui

COPY package*.json ./

RUN yarn config set ignore-engines true

RUN yarn install

EXPOSE 5173

CMD ["yarn", "dev"]