const Joi = require('joi');

module.exports = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    foods: Joi.array().items({
        id: Joi.number().required(),
        name: Joi.string().required()
    })
});
