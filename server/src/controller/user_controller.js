const { user_service } = require("../services")

const create_user = async (req, res) => {
    try {
        // console.log(req.body);
        // const { password, confirm_password } = req.body
        // if (password !== confirm_password) {
        //     throw new Error("Password and confirm password must be same -!-")
        // }
        console.log(req.body);
        const user = await user_service.create_user(req.body)
        if (!user) {
            throw new Error("Something went wrong -!-")
        }
        res.status(200).json({
            success: "true",
            message: "Route got hitted from front end",
            data: user
        })
    } catch (error) {
        res.status(400).json({
            success: "false",
            message: error.message
        })
    }
}

const get_user = async (req, res) => {
    try {
        const user_list = await user_service.get_user()
        if (!user_list) {
            throw new Error("No data found")
        }
        res.status(200).json({
            success: "true",
            message: "IT WORKS",
            data: user_list
        })
    } catch (error) {
        res.status(400).json({
            success: "false",
            message: error.message
        })
    }
}

const delete_user = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);
        const user = await user_service.get_user_by_id(id)
        if (!user) {
            throw new Error("User by this ID does not exist")
        }
        await user_service.delete_user(id)
        res.status(200).json({
            message: "Deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    create_user,
    get_user,
    delete_user
}