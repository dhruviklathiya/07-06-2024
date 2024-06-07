const { category_service } = require("../services")

const create_category = async (req, res) => {
    try {
        const reqbody = req.body
        const category_exist = await category_service.get_category_name(reqbody.category_name)
        if (category_exist) {
            throw new Error("Category by this name already exist")
        }
        const new_category = await category_service.create_category(reqbody)
        if (!new_category) {
            throw new Error("Something went wrong")
        }
        res.status(200).json({
            success: true,
            data: new_category
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const get_category = async (req, res) => {
    try {
        const category_list_exist = await category_service.get_category()
        if (!category_list_exist) {
            throw new Error("Category list does not exist")
        }
        res.status(200).json({
            success: true,
            data: category_list_exist
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const update_category = async (req, res) => {
    try {
        const reqbody = req.body
        const category_exist = await category_service.category_by_id(req.params.id)
        console.log(category_exist);
        if (!category_exist) {
            throw new Error("Category by this id does not exist")
        }
        const new_category = await category_service.update_category(req.params.id, reqbody)
        if (!new_category) {
            throw new Error("Something went wrong")
        }
        res.status(200).json({
            success: true,
            data: reqbody
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    create_category,
    get_category,
    update_category
}