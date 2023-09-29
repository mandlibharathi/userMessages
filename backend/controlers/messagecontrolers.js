const Asynchandler= require('express-async-handler')
const Message = require('../modal/messageModal')


const getMessages = Asynchandler(async(req,res)=>{

  const messages=  await Message.find({})
  res.status(200).json(messages)

})
const postMessage = Asynchandler(async(req,res)=>{
    const { message,description } = req.body;
    if (!message) {
        res.status(400)
        throw new Error('Please add your message')
      }
      
      
      const addmsg = await Message.create({
        message,
        description,
      })
      if (addmsg) {
        res.status(201).json({
          _id: addmsg.id,
          message: addmsg.message,
          description: addmsg.description,
        })
      } else {
        res.status(400)
        throw new Error('message cant send')
      }
  
  })

  module.exports={
    getMessages,
    postMessage
  }