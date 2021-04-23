const router = require("express").Router(); 
const Message = require('../models/Message.model'); 
const User = require('../models/User.model'); 


// req.body {receipient, message}
//req.sessions.user 

router.post('/', (req, res, next) => {
  const {recipient, content} = req.body;
  console.log("STEP 2", recipient, content)
  Message.create({ recipient, content, sender: req.user._id })
  .then((response) =>{
    console.log("STEP 2.5", response)
    res.status(200).json(response)
  })
  .catch(err =>{
    next(err);
  })
}); 


// router.get('/history', (req, res, next) =>{
//  console.log("body", req.body, "params". req.params)
// })

router.get('/history', (req, res, next) =>{
  console.log('CHECK MESS', req.user)
  Message.find({$or : [{sender: req.user._id}, {recipient: req.user._id}]})
  .populate('sender')
  .populate('recipient')
  .then(response => {
    console.log('RESPONSE BACKEND', response)
    res.json(response)
  })
  .catch(err =>{
    next(err);
  })
})


// router.get('/history', (req, res, next) =>{
//   console.log('CHECK MESS', req.user)
//   Message.find({$or : [{sender: req.user._id}, {recipient: req.user._id}]})
//   .then(response => {
//     console.log('RESPONSE BACKEND', response)
//     res.json(response)
//   })
//   .catch(err =>{
//     next(err);
//   })
// })





module.exports = router;