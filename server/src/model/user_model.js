const mongoose = require("mongoose");

const user_schema = mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        }
        // email: {
        //     type: String,
        //     trim: true
        // },
        // password: {
        //     type: String,
        //     trim: true
        // },
        // confirm_password: {
        //     type: String,
        //     trim: true
        // }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model("User", user_schema)

module.exports = User