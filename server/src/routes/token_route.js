const express = require("express")
const { token_controller } = require("../controller")

const router = express.Router()

router.post(
    "/create",
    token_controller.create_token
)

router.get(
    "/decode",
    token_controller.decode_token
)

router.get(
    "/decode/:token",
    token_controller.params_decode_token
)

module.exports = router