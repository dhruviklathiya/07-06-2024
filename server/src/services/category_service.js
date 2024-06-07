const { Category } = require("../model")

const create_category = async (reqbody) => {
    return Category.create(reqbody)
}
const get_category_name = async (category_name) => {
    return Category.findOne({ category_name })
}
const get_category = async () => {
    return Category.find()
}
const update_category = async (id, reqbody) => {
    return Category.findByIdAndUpdate(id, { $set: reqbody })
}
const category_by_id = async (id) => {
    return Category.findById(id)
}

module.exports = {
    create_category,
    get_category_name,
    get_category,
    update_category,
    category_by_id
}