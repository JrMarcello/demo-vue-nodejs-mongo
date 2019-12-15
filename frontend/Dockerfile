FROM node:lts-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install -q

COPY . .

EXPOSE 8000

CMD ["npm", "run", "serve"]