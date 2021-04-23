const router = require("express").Router();
const User = require('../models/User.model');


router.get("/", (req, res, next) => {
  res.json("All good in here");
 
});

router.get("/users", (req, res, next) => {
  User.find()
  .then((allUsers) => {
    res.json(allUsers)
  }).catch((err) => {console.log(err)})
})


router.get('/users/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user)
      if (!user) {
        res.status(404).json(user)
      } else {
        res.status(200).json(user)
      }
    })
    .catch(err => {
      next(err)
    })
});



router.put('/user/:id', (req, res, next) => {
  //const { name, location, age, gender, description, goal, nativeLanguages, learningLanguages} = req.body;
  console.log("STEP 4", req.body)
  // if we don't have {new: true} findByIdAndUpdate() will return the old version of 
  // the project
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      next(err)
    })
});



module.exports = router;