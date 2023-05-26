const express=require("express");

const LoadRouter=express.Router();

LoadRouter.get("/",(req,res)=>{
    const {page_no,page_size}=req.query;
    console.log(page_no,page_size,"page_no & page_size");
    
    res.send("hi")
})


module.exports={
    LoadRouter
}