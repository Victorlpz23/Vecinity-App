FROM node:18.14.2-alpine3.17

WORKDIR /opt/vecinity-app

COPY  ./web ./web
COPY  ./api ./api

WORKDIR /opt/vecinity-app/web
RUN npm i
RUN npm run build
RUN mv /opt/vecinity-app/web/build /opt/vecinity-app/api/public

WORKDIR /opt/vecinity-app/api
RUN npm i


CMD ["npm", "start"]


