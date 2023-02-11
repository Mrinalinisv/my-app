
import { Button,Typography } from '@mui/material'
import React,{useState} from 'react'


const useEffects = () => {
    var [showmessage , setmessage]=useState("new site")
   const changeWelcome = ()=>{
      setmessage("Home");

   }
   const changeGal = ()=>{
    setmessage("Gallery page");

 }
 const changecont = ()=>{
    setmessage("Contact page");

 }

  return (
    <div>
      <Typography variant='h4'>Welcome to new site</Typography>
    <button color ='primary'
    variant='contained' 
    onClick={changeWelcome}> Home</button>

    <button color ='primary'
    variant='contained' 
    onClick={changeGal}> Gallery</button>

    <button color ='primary'
    variant='contained' 
    onClick={changecont}> Contact page</button>
   
    </div>
  )
}

export default useEffects
