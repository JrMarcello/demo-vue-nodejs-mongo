FROM node:lts-alpine

WORKDIR /backend

COPY package*.json ./

RUN apk --no-cache --update --virtual build-dependencies add python make g++
#RUN npm rebuild bcrypt --build-from-source \
RUN npm install --q
RUN apk del build-dependencies

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]