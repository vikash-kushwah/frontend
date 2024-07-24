const ProductCollection = require("../models/productSchema");
const mongoose = require("mongoose");
const productcontroller = async (req, res) => {
    const products = await ProductCollection.find();
    res.send(products);
};
module.exports=productcontroller;