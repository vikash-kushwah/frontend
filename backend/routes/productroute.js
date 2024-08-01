const express = require("express");
const productcontroller=require("../controllers/products/getproductcontroller");
const router = express.Router();

router.get("/",productcontroller);
router.get("/id/:id",productcontroller);
router.get("/name/:name",productcontroller);
router.get("/category/:category",productcontroller);
router.get("/subcategory/:subcategory",productcontroller);
router.get("/random",productcontroller);
router.get("/top-rated",productcontroller);
router.get("/low-high",productcontroller);
module.exports = router;