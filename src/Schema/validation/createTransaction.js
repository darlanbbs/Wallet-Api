const Joi = require('joi')

const createTransaction = Joi.object({
    value:Joi.number().required(),
    description:Joi.string().required().min(3),
    type:Joi.string().required().valid("input","output"),
    userId:Joi.object(),
    createdAt:Joi.string(),
})

module.exports = createTransaction