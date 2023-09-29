const router=require('express').Router()
const {getMessages,postMessage} =require('../controlers/messagecontrolers')
// const {protect} =require('../middleware/authMiddleware')

router.get('/',getMessages)

router.post('/',postMessage)

module.exports=router