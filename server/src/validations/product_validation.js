const Joi = require("joi");

const ideal_product = Joi.object({
    product_name: Joi.string().min(4).max(10).trim(),
    product_name: Joi.string().min(10).max(30).trim(),
    product_price: Joi.number().integer().min(1).required(),
    category_id: Joi.string().trim().required()
})


const create_product = (req, res, next) => {
    try {
        const result = ideal_product.validate(req.body)
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

module.exports = create_product

    // const ideal_admin = Joi.object({
    //     fname: Joi.string().trim().min(4).max(10).required(),
    //     lname: Joi.string().trim().invalid(Joi.ref('fname')).required(),
    //     password: Joi.string().trim().min(4).max(10).required(),
    //     confirmpassword: Joi.string().valid(Joi.ref('password')).required(),
    // })

    // const create_admin = (req, res, next) => {
    //     try {
    //         const result = ideal_admin.validate(req.body)
    //         if (result.error) {
    //             throw new Error(result.error.details[0].message)
    //         }
    //         next()
    //     } catch (error) {
    //         res.status(400).json({
    //             success: false,
    //             message: error.message
    //         })
    //     }
    // }