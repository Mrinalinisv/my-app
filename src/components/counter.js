import {Button,Typography} from '@mui/material'
import React,{useState} from 'react'

const Counter = ()=>{
var [countervalue,setcountervalue]= useState(0);

     const inCounter =()=>{
          setcountervalue(countervalue+1);
           }
           const deCounter =()=>{
            setcountervalue(countervalue-1);
             }
 return (
    <div>
    <Typography variant='h4'>{countervalue}</Typography>
    <Button  color='success'variant='contained' onClick={inCounter}>+</Button>
    
    {/* <Typography variant='h4'>0</Typography> */}
    
    <Button color='error' variant='contained' onClick={deCounter}>-</Button>

</div>
)
 }
export default Counter