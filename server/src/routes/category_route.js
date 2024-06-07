const express = require("express")
const { category_validation } = require("../validations")
const { category_controller } = require("../controller")

const router = express.Router()

router.post(
    "/create-category",
    category_validation.create_category,
    category_controller.create_category
)

router.get(
    "/list",
    category_controller.get_category
)

router.put(
    "/update-category/:id",
    category_validation.create_category,
    category_controller.update_category
)

module.exports = router