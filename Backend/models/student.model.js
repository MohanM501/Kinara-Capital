const mongoose=require("mongoose");


const StudentSchema=mongoose.Schema({
    id:String,
    name:String,
    totalMarks:Number,
    location:String,
    classNo:Number
})

const StudentModel=mongoose.model("student",StudentSchema);

module.exports={
    StudentModel
}