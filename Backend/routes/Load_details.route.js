const express=require("express");
const { StudentModel } = require("../models/student.model");

const LoadRouter=express.Router();

LoadRouter.get("/:page_no/:page_size",async(req,res)=>{

    // Taking the page no & page_size as params and if typeError occurs means it will take default values of 1 and 5;

    const page_no=Number(req.params.page_no) || 1;
    const page_size=Number(req.params.page_size) || 5;
    try {
        // Skip and limit provided by mongoose is used for the pagination;
        const StudentsPerPage=await StudentModel.find().skip((page_no-1)*(page_size)).limit(page_size)
        // Output is sent with status code of 200 for succesfull.
        res.status(200).send({"students":StudentsPerPage});

    } catch (error) {
        console.log(error,"err");
        res.status(400).send({"msg":"Something went wrong with GET Load request"})
    }
    
})


module.exports={
    LoadRouter
}