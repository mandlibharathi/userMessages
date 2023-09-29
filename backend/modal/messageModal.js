const mongoose =require('mongoose')
const Messages =  mongoose.Schema({

    message:{
        type:String,
        required:true
    },
    description:{
        type:String,
        
    }
},
{timestamps:true}
)


const Message =mongoose.model("messages",Messages)

module.exports=Message;