const express=require("express");
const { StudentModel } = require("../models/student.model");

const LoadRouter=express.Router();

LoadRouter.get("/:page_no/:page_size",async(req,res)=>{
    const page_no=Number(req.params.page_no) || 1;
    const page_size=Number(req.params.page_size) || 5;
    try {

        const StudentsPerPage=await StudentModel.find().skip((page_no-1)*(page_size)).limit(page_size)
        res.status(200).send({"students":StudentsPerPage});

    } catch (error) {
        console.log(error,"err");
        res.send({"msg":"Something went wrong with GET Load request"})
    }
    
})


module.exports={
    LoadRouter
}