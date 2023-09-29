const express= require('express')
const cors=require('cors')

const app =express()
const dotenv=require('dotenv')
const connectDB = require('./config/db');
const {errorHandler} =require('./middleware/errormiddleWare')
// const router=require('./routes/userroutes')
const messageroutes=require('./routes/messageroutes')
dotenv.config()
connectDB()
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(errorHandler)
// app.use('/',router)
app.use('/messages',messageroutes)


const PORT=process.env.PORT
app.listen(PORT , ()=>console.log(`server is running on port ${PORT}`))