const router = require("express").Router();
const User = require('../models/User.model');
const bcrypt = require('bcrypt');
const passport = require('passport')


bcryptSalt = 10;

router.get('/signup', (req, res, next) => res.render('auth/signup'));



//* Expressserver, post to /signup*/ 
router.post('/signup', (req, res, next) => {
  const { username, password, name, nativeLanguages, learningLanguages, location,age, gender, description, goal } = req.body;
  if (password.length < 8) {
    return res.status(400).json({ message: 'Your password must be 8 chars minimum' });
  }
  if (username === '') {
    return res.status(400).json({ message: 'Your username cannot be empty' });
  }
  // check if username exists in database -> show message
  User.findOne({ username: username })
    .then(found => {
      if (found !== null) {
        return res.status(400).json({ message: 'Your username is already taken' });
      } else {
        // hash the password, create the user and send the user to the client
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);

        User.create({
          username: username,
          password: hash,
          name: name,
          nativeLanguages: nativeLanguages, 
          learningLanguages: learningLanguages, 
          location: location, 
          age: age,
          gender: gender,
          description: description, 
          goal: goal,
          imageUrl:"https://www.iass-potsdam.de/sites/default/files/styles/square_round_2_up/public/default_images/default_avatar_0.png?itok=ytiGDvoH"



        })
          .then(dbUser => {
            // login with passport:
            req.login(dbUser, err => {
              if (err) {
                return res.status(500).json({ message: 'Error while attempting to login' })
              }
              // we don't redirect to an html page anymore, we just send the user obj to the client
              return res.status(200).json(dbUser);
            });
          })
          .catch(err => {
            res.json(err);
          })
      }
    })
});

router.get("/auth/loggedin", (req,res,next) => {
  console.log("why is this not working")
})







router.post('/login', (req, res, next) => {
  console.log('STEP 3')
  passport.authenticate('local', (err, user) => {
    console.log('USER', user)
    if (err) {
      return res.status(500).json({ message: 'Error while attempting to login' })
    }
    if (!user) {
      return res.status(400).json({ message: 'Wrong credentials' })
    }
    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: 'Error while attempting to login' })
      }
      return res.status(200).json(user);
    })
  })(req, res)
});




router.delete('/logout', (req, res) => {
  // passport method to log out
  req.logout();
  res.status(200).json({ message: 'Sucessful logout' });
})

router.get('/loggedin', (req, res, next) => {
  console.log("toggedin route")
  res.json(req.user);
});

module.exports = router;