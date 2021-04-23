const express = require('express');
const router = express.Router();

// include CLOUDINARY:

const uploader = require('../config/cloudinary-setup'); 
const User = require('../models/User.model');


router.post('/upload/:userId', uploader.single('imageUrl'), (req, res, next) => {
  
  console.log(' Ola from req.params', req.params)
  console.log(' Ola from req.file.path ', req.file.path )

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }

  User.findByIdAndUpdate(req.params.userId, {
    imageUrl: req.file.path

  } , {new: true}).then(user => {
    console.log(user);
    res.json(user)
   
   });
   



  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend

  res.json({ secure_url: req.file.path });
});

module.exports = router;
