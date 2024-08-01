const salesdata=require("../../utility/ecommerce_sales.json");
const usercontroller=(req,res)=>{
    res.send(salesdata);
};
module.exports=usercontroller;