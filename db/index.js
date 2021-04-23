// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
require("dotenv/config");
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

//const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tandemapp";
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://lila:Uy0YXutdQ7O3CvUr@cluster0.lj0j1.mongodb.net/PapageiDataBase?retryWrites=true&w=majority";
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to o: ", err);
  });
