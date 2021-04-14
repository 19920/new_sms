const express = require("express");
const dotenv = require("dotenv");
const connectDB =require('./config/db.js')

dotenv.config()
connectDB()
const app = express();
app.get("/",(req,res)=>{
    res.send("API is running at 13000")
})
const PORT = process.env.PORT ||13000
app.listen(PORT,()=>  console.log(`App listening on port ${PORT} in ${process.env.NODE_ENV}`))