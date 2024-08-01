const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        product_id: {
            type: Number,
            unique: true,
            required: [true, "Product id is required"],
        },
        name: {
            type: String,
            required: [true, "Product name is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        productImg: {
            type: String,
            required: [true, "Product image is required"],
        },
        new_price: {
            type: Number,
            required: [true, "New price is required"],
        },
        old_price: {
            type: Number,
            required: [true, "Old price is required"],
        },
        product_qty: {
            type: Number,
            required: [true, "Quantity is required"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        sub_category: {
            type: String,
            required: [true, "Sub-Category is required"],
        },
        rating: {
            type: Number,
            required: [true, "Rating is required"],
        },
        colors: {
            type: [String],
            required: [true, "Colors are required"],
        },
    }
)
const ProductCollection = mongoose.model("products", productSchema);
module.exports = ProductCollection;
