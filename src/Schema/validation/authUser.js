const Joi = require('joi')

const authUser = Joi.object({
    email: Joi.string().email().required().min(3),
    password: Joi.string().required().min(3),
})

module.exports = authUser