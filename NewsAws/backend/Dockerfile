FROM node:10.12.0

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install

RUN npm audit fix

RUN export NODE=production

CMD npm start

EXPOSE 8080
