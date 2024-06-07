const express = require("express")
const userRoute = require("./user_route.js")
const categoryRoute = require("./category_route.js")
const tokenRoute = require("./token_route.js")

const router = express.Router()
router.use("/user", userRoute)
router.use("/category", categoryRoute)
router.use("/token", tokenRoute)

module.exports = router