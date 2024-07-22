const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const salesdata=require("./utility/ecommerce_sales.json");
const rootroute=require("./routes/rootroute");

const PORT = process.env.PORT || 8000 || 6000;

const app = express();

app.use("/", rootroute);

//get request
// app.get("/", (req, res) => {               //  "/" this part is routes  
//     res.send("Hello World");           //  (req, res)-  this whole part is controller
// });

app.get("/abc", (req, res) => {
    res.send("welcome to abc")
});

app.get("/sales", (req, res) => {
    res.send(salesdata)
});


//server create
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.yellow);
});


