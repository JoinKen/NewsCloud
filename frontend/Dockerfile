FROM node:10.12.0

# Create app directory
WORKDIR /app

COPY . /app

RUN npm install

RUN npm audit fix

CMD npm start

EXPOSE 3000
