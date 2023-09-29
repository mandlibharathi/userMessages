import axios from 'axios'
const API_URL='/messages'


// Register user
const postMessage = async (userData) => {
    const response = await axios.post(API_URL, userData)
  
    
    return response
  }
  const getMessages = async () => {
    const response = await axios.get(API_URL)
  
    
    return response
  }


  const messageService = {
    postMessage,
    getMessages
  }
  
  export default messageService;