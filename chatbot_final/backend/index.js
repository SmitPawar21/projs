const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const app = express();
const chatRoute = require("./routers/chatRoute")

dotenv.config();

app.use(cors());

app.use('/', chatRoute)

app.get('/', (req, res)=>{
    res.status(201).json({message: "hi smit"})
})

app.listen(5000, ()=> console.log("server chalu hai"))
