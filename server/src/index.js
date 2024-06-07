const express = require("express")
const cors = require("cors");
const router = require("./routes");
const connectDB = require("./db/dbconnection");
const app = express()


const jwt = require("jsonwebtoken")

const port = 8080
app.use(cors("*"))
app.use(express.json())

app.listen(port, () => {
    console.log("Server is running on port", port);
})
connectDB()
app.use("/v1", router)
// app.use((req,res,next)=>{
//     throw new Error("Route not found")
// })
app.post(
    "/create-jwt",
    (req, res) => {
        try {
            const reqbody = req.body
            const token = jwt.sign(reqbody, "SECRET")
            if (!token) {
                throw new Error("Token did not generate")
            }
            res.status(200).json({
                success: true,
                DATA: token
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                messgae: error.message
            })
        }
    }
)
app.post(
    "/decode-jwt",
    (req, res) => {
        try {
            const token = req.body.tokennnn
            const decoded_data = jwt.verify(token, "SECRET")
            if (!decoded_data) {
                throw new Error("Decode fail")
            }
            res.status(200).json({
                success: true,
                DATA: decoded_data,
                temp_array: [23423, 435, 345, 4, 56, 456567, 5, 67, 65, 6, 7, 6, 54, 534, 64, 56, 4, 56, 456, 4, 6]
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                messgae: error.message
            })
        }
    }
)