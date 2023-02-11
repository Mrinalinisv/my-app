import {Button,Typography} from '@mui/material'
import React,{useState} from 'react'

const StateBase = ()=>{
var [pname,setPname]= useState("dhannu");

     const changename =()=>{
          setPname("ishu");
           }
 return (
    <div>
    <Typography variant='h4'>wELCOME {pname}</Typography>
    {/* <button color='primary'
    variant='contained'
    onClick={changename}>Change</button> */}
    <Button color='primary' variant='contained'onClick={changename}>Change</Button>
</div>
)
 }
export default StateBase