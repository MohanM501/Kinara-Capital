import React from 'react'
import { useEffect,useState } from 'react';
import axios from "axios";
import {Table,Thead,Tbody,Tr,Th,Td,Input, Button, Heading, Select} from "@chakra-ui/react";
import "./GetStudents.css";
let url=`https://real-tan-hippo.cyclic.app`

const GetStudents = () => {
    const [page,setPage]=useState(1);
    const [pageSize,setPageSize]=useState(2);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    const [filterData,setfilterData]=useState({});
    const [isFilter,setFilter]=useState(false);
    

    const GET_API=()=>{
        setLoading(true);
        axios.get(`${url}/load/${page}/${pageSize}`).then((r)=>{
            console.log(r.data.students,"r.data");
            setData(r.data.students);
            setLoading(false);
        }).catch((err)=>{
            console.log(err,"err");
            setLoading(false);
        })
        
    }

    useEffect(()=>{
        if(isFilter){
            GET_FILTER_API(filterData);
        }else{
            GET_API();
        }
    },[page,pageSize,filterData])

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setfilterData({...filterData,[name]:value});

        setFilter(true);
    }

    const GET_FILTER_API=(obj)=>{
        setLoading(true);
        axios.get(`${url}/filter`,{params:obj}).then((r)=>{
            setData(r.data.students);
            setLoading(false);
        }).catch((err)=>{
            console.log(err,"err in filter request")
            setLoading(false);
        })
        
    }

    

  return (
    <div id="container">
        <div>
            <Heading size={"sm"}>Filtering</Heading>
            <br/>
            <Input name="name" type="string" onChange={handleChange}  placeholder='Filter By Name'/>
            <Input name="location" type="string" onChange={handleChange} placeholder='Filter by location'/>
            <Input name="classNo" type="number" onChange={handleChange} placeholder='Filter By Class No'/>

        </div>
        <div>
            PageSize: <Input size={"sm"} onChange={(e)=>setPageSize(e.target.value)} type="number" placeholder='EnterPageSize'/>
        </div>
        <br/>
        <Table border={"2"} >
            <Thead>
                <Tr>
                    <Th>id</Th>
                    <Th>name</Th>
                    <Th>location</Th>
                    <Th>Class No</Th>
                    <Th>TotalMarks</Th>
                </Tr>
            </Thead>
            <Tbody>
                {
                    data.length>0 && data.map((item,ind)=>{
                        return(
                            <Tr key={ind}>
                                <Td>{item.id}</Td>
                                <Td>{item.name}</Td>
                                <Td>{item.location}</Td>
                                <Td>{item.classNo}</Td>
                                <Td>{item.totalMarks}</Td>
                            </Tr>
                        )
                    })
                }  
                {loading?<Heading color={"green"}>...Loading...</Heading>:""};
            </Tbody>
        </Table>
        <br/>
        <br/>
        <div>
            <Button isDisabled={page<=1?true:false} onClick={()=>setPage(page-1)}>-</Button>
            {page}
            <Button onClick={()=>setPage(page+1)}>+</Button>
        </div>
    </div>
  )
}

export default GetStudents