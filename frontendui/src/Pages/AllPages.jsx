import React from 'react'
import Home from './Home';
import {Routes,Route} from "react-router-dom";

import { Heading } from '@chakra-ui/react';
import GetStudents from './GetStudents';
import AddStudents from './AddStudents';

const AllPages = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path='/add' element={<AddStudents/>}></Route>
            <Route path="/get" element={<GetStudents/>}></Route>
            <Route path="*" element={<Heading>Page didn't found</Heading>}></Route>
        </Routes>
    </div>
  )
}

export default AllPages