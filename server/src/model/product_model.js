const mongoose = require("mongoose")

const product_schema = mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true
        },
        product_desc: {
            type: String,
            trim: true
        },
        product_price: {
            type: Number,
            default: 20
        },
        category_id: {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Product = mongoose.model("Product", product_schema)
module.exports = Product