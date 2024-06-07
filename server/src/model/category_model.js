const mongoose = require("mongoose")

const category_schema = mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true
        },
        category_desc: {
            type: String,
            trim: true
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Category = mongoose.model("Category", category_schema)
module.exports = Category