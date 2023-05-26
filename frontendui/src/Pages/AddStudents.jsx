import React,{useState} from 'react';
import { Heading,Input,Button } from '@chakra-ui/react';
import axios from 'axios';
let url=`https://real-tan-hippo.cyclic.app`;

const AddStudents = () => {
    const [data,setData]=useState({});
    const handleChange=(e)=>{
        const {value,name}=e.target;
        setData({...data,[name]:value});
    }
    const handleClick=()=>{
        axios.post(`${url}/post`,data).then((r)=>{
            console.log(r.data,"r.data");
            alert("Added Succesffully")
        }).catch((err)=>{
            console.log(err,"err");
        })
    }

  return (
    <div>
        <Heading size={"sm"}>Add Students</Heading>
        <Input onChange={handleChange} name="name" type="string" placeholder='Enter Name'/>
        <br/>
        <Input onChange={handleChange} name="location" tye="string" placeholder='Enter Location'/>
        <br/>
        <Input onChange={handleChange} name="id"  type="string" placeholder='Enter Id'/>
        <br/>
        <Input onChange={handleChange} name="totalMarks" type="number" placeholder='Enter TotalMarks'/>
        <br/>
        <Input onChange={handleChange} name="classNo" type="number" placeholder='Enter Class No'/>
        <br/>
        <Button onClick={handleClick}>Add Student</Button>
    </div>
  )
}

export default AddStudents