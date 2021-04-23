const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  name: String,
  nativeLanguages: String,
  learningLanguages: [String],
  location: String,
  age: Number,
  gender: String,
  // tag: String,
  description: String, 
  goal: String,
  imageUrl: { type: String, required: true }
  //image: String, look if possible with heroko clounderari (link: string id: string}
});

const User = model("User", userSchema);

module.exports = User;
