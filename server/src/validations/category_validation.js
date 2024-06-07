const Joi = require("joi");

const ideal_category = Joi.object({
    category_name: Joi.string().min(4).required().trim(),
    category_desc: Joi.string().min(10).required().trim()
})

const create_category = (req, res, next) => {
    try {
        const result = ideal_category.validate(req.body)
        if (result.error) {
            throw new Error(result.error.details[0].message)
        }
        next()
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_category
}