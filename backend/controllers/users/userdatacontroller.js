const UserdataCollection = require("../../models/userSchema");
const mongoose = require("mongoose");
const userdatacontroller = async (req, res) => {
    const users = await UserdataCollection.find();
    res.send(users);
};
module.exports=userdatacontroller;