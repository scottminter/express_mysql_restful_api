const BProm = require('bluebird')
const _ = require('lodash');
const mysql = require('./../../utils').mysql;

module.exports = function updateUserDAL (newUser) {
    return new BProm((resolve, reject) => {
        mysql.connect()
            .then((conn) => {
                let qry = `call update_user('${newUser.username}', '${newUser.email}', '${newUser.password}', '${newUser.first_name}', '${newUser.last_name}');`;

                conn.query(qry, (err, results, fields) => {
                    conn.end();

                    if (err) {
                        return reject(err);
                    }
                    
                    if (!results[0][0].status) {
                        return reject({
                            code: 401,
                            error: results[0][0].message
                        });
                    }

                    return resolve(results[0][0]);
                });
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
