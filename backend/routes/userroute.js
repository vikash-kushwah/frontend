const express = require("express");
const usercontroller=require("../controllers/users/usercontroller");
const router = express.Router();

router.get("/",usercontroller );
module.exports = router;