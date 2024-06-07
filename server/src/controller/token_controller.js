const jwt = require("jsonwebtoken")

const create_token = async (req, res) => {
    try {
        const token = jwt.sign(req.body, "MYSECRET")
        console.log(token);
        res.status(200).json({
            success: true,
            message: "Token generated successfully",
            token: token
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            FROM: "CONREOLLWR"
        })
    }
}

const decode_token = async (req, res) => {
    try {
        let token = req.headers.authorization
        const decode = jwt.verify(token.replace("Bearer ", ""), "MYSECRET")
        res.status(200).json({
            success: true,
            message: "Token verified successfully",
            data: decode
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            FROM: "CONREOLLWR"
        })
    }
}

const params_decode_token = async (req, res) => {
    try {
        let token = req.params.token
        const decode = jwt.verify(token, "MYSECRET")
        res.status(200).json({
            success: true,
            message: "Token verified successfully",
            data: decode
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            FROM: "CONREOLLWR"
        })
    }
}
module.exports = {
    create_token,
    decode_token,
    params_decode_token
}