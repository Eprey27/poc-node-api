# Define la imagen base
FROM node:14

# Crea el directorio de la aplicación
WORKDIR /usr/src/app

# Instala las dependencias de la aplicación
# Un asterisco es utilizado para asegurar que tanto package.json como package-lock.json sean copiados
# donde estén disponibles (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle de la aplicación
COPY . .

# Expone el puerto que tu aplicación usa
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "app.js" ]