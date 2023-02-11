import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import useForm from './read'

const Book = () => {
    var [books,setbook] = useForm({tittle:"",quantity:"",description:""})
    
  return (
    <div>
      <Typography variant='h2'>Todo List</Typography>
    <TextField  name ='tittle' value ={books.tittle} onChange={setbook} variant='outlined' label="To do list"></TextField><br></br>
    <TextField name ='quantity' value ={books.quantity} onChange={setbook}variant='outlined' label="Rice"></TextField><br></br>
    <TextField name ='decsription' value ={books.description} onChange={setbook} variant='outlined' label="quantity"></TextField><br></br>
    <Button variant='contained'>submit</Button><br></br>
    <Typography variant='h2'>{books.tittle}</Typography>
    <Typography variant='h2'>{books.quantity}</Typography>
    <Typography variant='h2'>{books.description}</Typography>

    </div>
    
  )
  }

export default Book
