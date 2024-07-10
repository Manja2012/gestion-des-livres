#image 
FROM node:16.13.2-alpine

#repertoir
WORKDIR www/

#  Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
 RUN npm install

# Copier le reste de l'application
 COPY . .

 # expose le porte
EXPOSE 5173

# demarrer l'application: node server.js
CMD ["npm","run","dev"]
