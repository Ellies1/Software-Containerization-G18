FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

COPY public /usr/src/app/public

COPY views /usr/src/app/views


EXPOSE 3000

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

ENV MONGO_URI=mongodb://admin:password@mongodb:27017/ice-cream?authSource=admin

CMD ["node", "app.js"]
