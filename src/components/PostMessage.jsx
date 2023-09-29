import React ,{useState,useEffect} from 'react'
import messageService from './services/messages'
import { Input } from '@mui/material'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import './styles/form.css'

const PostMessage = () => {
  const navigation =useNavigate()
const[message,setMessage]=useState('')
const[description,setDescription]=useState('')



const postMsg = async()=>{
  let userData={message,description}
  const descvalu= description!=='' ? userData:{message}

  try {
  
    const resp= await messageService.postMessage(descvalu)


if( resp.status  === 201 || resp.status === 201){
  toast.success("message added successfully")

  setTimeout(()=>{
   navigation('/allmessages')

  },2000)
 
}
  } catch (error) {
    toast.error("Please add your message")
  }
  

}
const onSubmit=  (e)=>{
  e.preventDefault()
  postMsg()
  
}

const handleMessageChange=(e)=>{
  const newValue = e.target.value;

  // if(newValue == ''){
  //   toast.warning('please enter message')
  // }
  if (/^\s*$/.test(newValue) || newValue.includes('``')) {
     toast.error('pleace add message!')

  }

  // Update the state with the valid input value
  setMessage(newValue);


}
  return (
    <div className='formstyles'>
      <div className='formbox'>
      <input 
      type='text' 
      id="message" 
      name="message" 
      value={message}
      placeholder="Please add message .." 
      style={{height:"70px", }}
       required
      onChange={handleMessageChange}
      />
      <br /> <br />
       <textarea 
      id="description" 
      name="description"
      value={description}
      placeholder="enter description.." 
      onChange={(e) => setDescription(e.target.value)}
      style={{height:"100px", }} 
      
      />
         <br /> <br />
        <button  onClick={onSubmit}>Submit</button>
</div>

</div>
)
}

export default PostMessage
