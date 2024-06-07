const Joi = require("joi");

const ideal_user = Joi.object({
    first_name: Joi.string().required().trim().min(4).max(10),
    last_name: Joi.string().required().trim(),
    email: Joi.string().required().trim(),
    password: Joi.string().required().trim(),
    confirm_password: Joi.string().valid(Joi.ref('password')).required().trim(),
})

const create_user = (req, res, next) => {
    try {
        const result = ideal_user.validate(req.body)
        console.log("🚀 ~ result:", result)
        if (result.error) {
            throw new Error(result.error.details[0].message)
        }
        next();
    } catch (error) {
        res.status(400).json({
            messgae: error.message
        })
    }
}

module.exports = {
    create_user
}