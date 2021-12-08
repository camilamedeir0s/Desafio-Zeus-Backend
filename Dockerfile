FROM node:16.13.0

WORKDIR /app

COPY . .

EXPOSE 8081

RUN npm install yarn
RUN npm i

CMD yarn run dev