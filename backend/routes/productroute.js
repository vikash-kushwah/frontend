const express = require("express");
const productcontroller=require("../controllers/productcontroller");
const router = express.Router();

router.get("/",productcontroller);
module.exports = router;