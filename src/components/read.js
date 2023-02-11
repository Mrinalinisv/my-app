import React, { useState } from 'react'

const useForm = (book) => {
  var [val,setval]=useState(book);
  return [val,(e)=>{
    setval(
      {
        ...val,[e.target.name]:e.target.value
      }
    )
  }]
   
  
}

export default useForm
