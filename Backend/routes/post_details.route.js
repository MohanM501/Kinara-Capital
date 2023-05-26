const express=require("express");
const { StudentModel } = require("../models/student.model");

const PostRouter=express.Router();

PostRouter.post("/",async(req,res)=>{
    const data=req.body;
    try {

        const new_student=new StudentModel(data);
        await new_student.save();
        res.status(201).json({"msg":"Student details added succesfully"})

    } catch (error) {
        console.log(error,"err");
        res.status(401).send({"msg":"Something went wrong with POST request"});
    }
})

module.exports={
    PostRouter
}