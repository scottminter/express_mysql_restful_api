const BProm = require('bluebird');
const Joi = require('joi');
const DAL = require('./../../dal');
const foodSchema = require('../../schemas/foodSchema');

module.exports = function updateFood (reqBody) {
    let isValid = {};

    return new BProm((resolve, reject) => {
        isValid = Joi.validate(reqBody, foodSchema);
        if (isValid.error) {
            return reject({
                code: 400,
                error: isValid.error.details[0].message
            });   
        }

        DAL.updateFood(isValid.value)
            .then((results) => {
                return resolve(results);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};