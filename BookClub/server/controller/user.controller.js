const User = require('../model/user.model'); 
//login user
const loginUser = async ( req, res) => {
    res.json({message: "login user"})
}


// sign up user
const signUpUser = async ( req, res) => {
    res.json({message: "Sign up user"})
}

module.exports = {signUpUser, loginUser}