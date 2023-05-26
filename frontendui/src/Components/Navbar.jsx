import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from "@chakra-ui/react";

const Navbar = () => {

  return (
    <div style={{display:"flex",gap:"20px",justifyContent:"space-evenly",marginBottom:"40px",marginTop:"20px"}}>
        <Link to="/"><Button>Home</Button></Link>
        <Link to="/add"><Button>ADD Student</Button></Link>
        <Link to="/get"><Button>GET Students</Button></Link>
    </div>
  )
}

export default Navbar