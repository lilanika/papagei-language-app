const { Schema, model } = require("mongoose");


const MessageSchema = new Schema({ 
  content: String,

  sender: { 
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  recipient:{ 
  type: Schema.Types.ObjectId,
  ref: "User"
  }
  })
  
const Message = model("Message", MessageSchema);
module.exports = Message;