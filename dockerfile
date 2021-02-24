FROM node:15 AS ui-build
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY . ./my-app/
RUN cd my-app && npm install && npm run build

FROM node:15 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
COPY package*.json ./api/
RUN cd api && npm install
COPY ./routes/ ./routes/
COPY ./modules/ ./modules/
COPY server.js ./api/


EXPOSE 8080
CMD [ "node", "./api/server.js" ]