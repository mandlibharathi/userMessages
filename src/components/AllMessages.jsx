import React ,{useState,useEffect}from 'react'
import{Box, Button, Pagination, Typography} from '@mui/material'
import messageService from './services/messages'
import {ArrowBackIos,ArrowForwardIos} from '@mui/icons-material'
const AllMessages = () => {
const [messages,setMessages]=useState([])
const [showMore, setShowMore] = useState(false);
const [currentpage,setCurrentPage]=useState(1)
const [postesPerPage]=useState(10)
const indexOfLastPage=currentpage*postesPerPage  
const indexOfFirstPage=indexOfLastPage-postesPerPage
const currentPosts=messages.slice(indexOfFirstPage,indexOfFirstPage)


const handleClick = (pageNumber) => {
  if(pageNumber >=1 && pageNumber <= messages.length /10 && pageNumber!==currentpage ){
  setCurrentPage(pageNumber);
  }
};

const getAllMsgs = async()=>{
  const resp = await messageService.getMessages()
  setMessages(resp.data)

}
useEffect(()=>{
  getAllMsgs()
},[])
  return (
    <Box style={{
      display:'flex',
      flexDirection:'column',
      width:'90%',
      minHeight:'70vh',
      justifyContent:'center',
      alignItems:'center',
      color:'black',
      marginTop:'30px',
      textAlign:'center',
      backgroundColor:'white',
      marginLeft :'auto',
      marginRight:'auto',
      padding:'5px'

      }}>
      <Box style={{}}>
        <h1>Messages from users</h1>
        <hr />
        {messages?.length === 0 ? (
          <Box>
           <h1>U don't have any messages yet pleace add</h1>
            </Box>
        ):(
          <>
         
        {messages?.slice(indexOfFirstPage,indexOfLastPage).map((msg)=>(
        <>
          <Typography>{msg.message}</Typography>
         
        </>
        
        ))
        }
     <Button onClick={()=>handleClick(currentpage-1)}>Previous</Button> 
         <Button onClick={()=>handleClick(currentpage+1)}>next</Button> 
        </>
        )
        
}
      </Box>

    </Box>

  )
}

export default AllMessages
