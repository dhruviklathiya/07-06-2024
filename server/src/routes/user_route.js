const express = require("express")
const { user_validation } = require("../validations")
const { user_controller } = require("../controller")

const router = express.Router()

router.post(
    "/create",
    // user_validation.create_user,
    user_controller.create_user
)
router.get(
    "/list",
    user_controller.get_user
)
router.delete(
    "/delete/:id",
    user_controller.delete_user
)

module.exports = router