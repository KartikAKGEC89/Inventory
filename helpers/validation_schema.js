const Joi = require('@hapi/joi')


const authSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    studentname: Joi.string().required(),
    studentnumber: Joi.string().required(),
    section: Joi.string(),
    Branch: Joi.string(),
    phonenumber: Joi.string().required(),
    password: Joi.string().min(8).required(),
})


module.exports = {
    authSchema,
}