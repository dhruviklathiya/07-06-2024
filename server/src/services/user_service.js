const { User } = require("../model")

const get_user = async () => {
    return User.find()
}
const create_user = async (reqbody) => {
    return User.create(reqbody)
}

const get_user_by_id = async (id) => {
    return User.findById(id)
}

const delete_user = async (id) => {
    return User.findByIdAndDelete(id)
}

module.exports = {
    get_user,
    create_user,
    get_user_by_id,
    delete_user
}