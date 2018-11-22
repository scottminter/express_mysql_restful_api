const BProm = require('bluebird');
const utils = require('./../../utils');

module.exports = function getFoodByNameDAL (name) {
    return new BProm((resolve, reject) => {
        utils.mysqlConnect()
            .then((conn) => {
                let qry = `SELECT * FROM demo_api.foods_view WHERE name = '${name}';`;

                conn.query(qry, (err, results, fields) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve(results[0] || {});
                });
            })
            .catch((err) => {
                return reject(err);
            });
    });
};
