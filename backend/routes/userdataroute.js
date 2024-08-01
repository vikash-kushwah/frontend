const express = require("express");
const userdatacontroller=require("../controllers/users/userdatacontroller");
const router = express.Router();

router.get("/",userdatacontroller);
module.exports = router;
