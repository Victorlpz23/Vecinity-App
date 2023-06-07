FROM node:18.14.2-alpine3.17

WORKDIR /opt/vecinity-app

COPY web ./
COPY api ./

WORKDIR /opt/vecinity-app/web
RUN npm i
RUN npm run build
RUN mv /opt/vecinity-app/web/build /opt/vecinity-app/api/public

WORKDIR /opt/vecinity-app/api
RUN npm i
RUN npm start

CMD ["npm", "start"]

# si lo hicieramos a mano:
# 1 - iriamos a la carpeta web y ejecutariamos npm i
# 2 - npm run build en la carpeta web
# 3 - nos llevamos la carpeta build a la carpeta api/public
# 4 - hacemos npm i en el api
# 5 - npm start en el api

