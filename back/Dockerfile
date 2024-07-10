#image 
FROM node:lts-alpine3.20


#repertoir
WORKDIR www/

#  Copier le package.json et le package-lock.json
COPY package*.json ./

# Installer les dépendances
 RUN npm install

# Copier le reste de l'application
 COPY . .

 # expose le porte
EXPOSE 8080

# demarrer l'application: node server.js
CMD ["node","server.js"]





