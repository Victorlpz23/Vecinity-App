FROM node:18.14.2-alpine3.17

WORKDIR /opt/vecinity-app

# Copiar los archivos de la carpeta API y sus dependencias
COPY api/package*.json ./
WORKDIR  /opt/vecinity-app/api
RUN npm install --only=production

# Copiar los archivos de la carpeta Web y sus dependencias
COPY web/package*.json ./web/
WORKDIR /opt/vecinity-app/web
RUN npm install --only=production

# Copiar el resto de los archivos de la aplicación
WORKDIR /opt/vecinity-app
COPY . .

# Exponer los puertos de la API y de la Web
EXPOSE 3000
EXPOSE 3001

# Iniciar la aplicación
CMD ["node", "api/app.js", "npm", "start"]

