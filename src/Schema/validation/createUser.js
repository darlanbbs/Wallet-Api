const Joi = require('joi')

const createUser = Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3),
    createdAt: Joi.string(),
})

module.exports = createUser