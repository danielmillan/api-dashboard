FROM node:latest
RUN mkdir /src
RUN npm install nodemon -g
WORKDIR /src
COPY server/package.json /src/package.json
RUN npm install
COPY ./server .
EXPOSE 8080
CMD npm start