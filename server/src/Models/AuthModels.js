// mba asio blabla lo eto hoe ahoana ny maka utilisateur any am bdd
const db = require('../Config/db');

const UserModel = {

    getUserByUserByEmailAndPassword: (email, password) => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Auth WHERE email = ? AND password = ?";
            db.query(query, [email, password], function(err, result) {
                if (err) {
                    reject(err); // Rejeter la promesse en cas d'erreur
                    console.log(err)
                } else {
                    resolve(result[0]); // Résoudre la promesse avec les résultats
                }
            });
        });
    },
    insertUserByUserByEmailAndPassword: (name, email, password) => {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO `Auth` ( `email`, `password`, `Name`, `alias`, `adresse`, `ville`, `pays`, `tva`, `societe`,`isAdmin`) VALUES (?,?,?,'','','','','','',0)";
            db.query(query, [email,password, name], function(err, result) {
                if (err) return reject(err);
                resolve(result[0]);
            });
        });
    }
}

module.exports = UserModel;