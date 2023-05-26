const express=require("express");
const cors=require("cors");
const { connection } = require("./configue/db");
const { LoadRouter } = require("./routes/Load_details.route");
const { PostRouter } = require("./routes/post_details.route");
const { FilterRouter } = require("./routes/filter.route");
require('dotenv').config();
const port=process.env.Port||9001;

const app=express();

// Cors allows access for all the sites to access the this server;
app.use(cors({
    origin:"*"
}))

app.use(express.json())// Middleware to parse incoming json data 

app.get("/",(req,res)=>{
    res.send("Welcome to Backend")
})

// Routers

app.use("/load",LoadRouter);
app.use("/filter",FilterRouter)

// This is extraa; to add student details from frontend;
app.use("/post",PostRouter);


// Listening to API
app.listen(port,async()=>{
    try {
        await connection;
        console.log("Connected to DB successfully")
    } catch (error) {
        console.log(error);
        console.log("Failed to Connect");
    }
    console.log(`listening on port ${port}`)
})