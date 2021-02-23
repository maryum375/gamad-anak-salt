FROM node:15 AS ui-build
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install
COPY my-app/ ./my-app/
RUN cd my-app && npm install && npm run build

FROM node:15 AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
COPY api/package*.json ./api/
RUN cd api && npm install
COPY api/server.js ./api/


EXPOSE 8080
CMD [ "node", "server.js" ]