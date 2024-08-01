//22_7_2024  & 23_7_2024
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const rootroute=require("./routes/rootroute");
const userroute=require("./routes/userroute");
const productroute=require("./routes/productroute");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000 || 6000;

const app = express();
connectDB();

//get request
// app.get("/", (req, res) => {               //  "/" this part is routes  
//     res.send("Hello World");           //  (req, res)-  this whole part is controller
// });
app.use("/", rootroute);


// app.get("/abc", (req, res) => {
//     res.send("welcome to abc")
// });


//below part is commented since we use userroute.js and usercontroller.js to make it distributive architecture
// app.get("/sales", (req, res) => {
//     res.send(salesdata)
// });
app.use("/sales",userroute);



app.use("/products",productroute);

//server create
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`.yellow);
});


