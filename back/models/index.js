import { Sequelize } from "sequelize";
import auteurModel from './auteur.model.js'
import livreModel from "./livre.model.js";

// Nouvelle connexion à la DB
const connection = new Sequelize(
    'livres', // Nom de la base de donnée
    'root', // identifiant Mysql
    '', // Mot de passe Mysql
    {
        host: 'localhost', // URL de mySQL
        dialect: 'mysql'
    }
);

try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

auteurModel(connection, Sequelize);
livreModel(connection, Sequelize);


const {
    Auteur,
    Livre
} = connection.models;

// has many permet de préciser qu'un utilisateur peut avoir plusieurs articles
// Cela va permettre de recuperer tous les articles d'un user en faisant User.articles
Auteur.hasMany(Livre);
// belongsTo va permettre de créer le lien entre Article et Auteur
// Dans Article, il va rajouter la colonne AuteurId
Livre.belongsTo(Auteur);


await connection.sync()

console.log('Synchro OK');

export {
    Auteur,
    Livre
}