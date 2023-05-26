const express=require("express");
const { StudentModel } = require("../models/student.model");

const FilterRouter=express.Router();


FilterRouter.get("/",async(req,res)=>{
    let {name,page_no,page_size,location}=req.query;
    let data={};
    // Storing all the query parameter which are not name page_no and page_size in data object for filtering;

    for (let keys in req.query){
        if(keys!=="name" && keys!="page_no" && keys!="page_size" && keys!="location"){
            data[keys]=req.query[keys];
        }
    }
    // This is to get all the names similar to typed names;

    let nam=name?{'name': {'$regex': name,$options:'i'}}:null;
    let loc=location?{'location':{'$regex':location,$options:'i'}}:null;

    // This is getting page_no and page_size from the query if not default values will be applied
    page_no=Number(page_no)||1;
    page_size=Number(page_size)||5;
   
    try {
        
        const FilterData=await StudentModel.find({...data,...nam,...loc}).skip((page_no-1)*page_size).limit(page_size);
        res.status(200).send({"students":FilterData});

    } catch (error) {
        console.log(error,"err");
        res.status(400).send({"msg":"Something went wrong with GET Filter request"});
    }

})

module.exports={
    FilterRouter
}