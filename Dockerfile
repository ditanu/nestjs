FROM node:12.22.10

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD npm run start:dev