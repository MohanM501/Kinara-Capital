const express=require("express");
const { StudentModel } = require("../models/student.model");

const FilterRouter=express.Router();


FilterRouter.get("/",async(req,res)=>{
    
    try {

        const FilterData=await StudentModel.find({...req.query});
        res.send({"Filtered":FilterData});

    } catch (error) {
        console.log(error,"err");
        res.send({"msg":"Something went wrong with GET Filter request"});
    }

})

module.exports={
    FilterRouter
}