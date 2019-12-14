FROM node:alpine

WORKDIR /frontend

COPY package*.json ./

#RUN apk --no-cache --update --virtual build-dependencies add python make g++
#RUN npm rebuild bcrypt --build-from-source \
#RUN apk del build-dependencies

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "serve"]