// mba asio blabla lo eto hoe ahoana ny maka utilisateur any am bdd
const db = require('../Config/db');

const UserModel = {
    getUserByUserNameAndPin: (username, password) => {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM Auth WHERE userName = ? AND password = ?";
            db.query(query, [username, password], function(err, result) {
                if (err) {
                    reject(err); // Rejeter la promesse en cas d'erreur
                    console.log(err)
                } else {
                    resolve(result[0]); // Résoudre la promesse avec les résultats
                }
            });
        });
    },
    insertUserByUserEmailAndPwd: (name, password, email) => {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO `Auth`( `email`, `password`, `Name`) VALUES (?,?,?)";
            db.query(query, [email,password, name], function(err, result) {
                if (err) return reject(err);
                resolve(result[0]);
            });
        });
    }
}

module.exports = UserModel;