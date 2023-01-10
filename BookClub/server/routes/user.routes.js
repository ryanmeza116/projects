const express = require('express'); 

const {signUpUser, loginUser} = require('../controller/user.controller'); 

const router = express.Router(); 
// login route
router.post('/login', loginUser);
// sign up route
router.post('/signup', signUpUser);

module.exports = router; 

// left off on this video : https://www.youtube.com/watch?v=mjZIv4ey0ps&list=PL4cUxeGkcC9g8OhpOZxNdhXggFz2lOuCT&index=3