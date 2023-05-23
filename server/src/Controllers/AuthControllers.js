
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/AuthModels");
const maxAge = 3 * 24 * 60 * 60 * 1000;

const login = async (req, res) => { 
  const { username, pin } = req.body; 
  try {
    const user = await UserModel.getUserByUserNameAndPin(username, pin);
    if(user){
      const token = jwt.sign({ userId: user.id, isAdmin: user.isAdmin }, 'secret-key');
      res.cookie('jwt', token, { httpOnly: true, maxAge });
      res.status(200).json({ user, token });
    } else {
      res.status(404).json({ message: "Email or password incorrect"})
    }
  } catch (err) {
    res.status(400).send('Error occurred');
  }
};

const signin = async (req, res) => { 
  const { username, pin } = req.body; 
  console.log(username, pin)
  try {
    const user = await UserModel.insertUserByUserNameAndPin(username, pin);
   
    if(user){
      const token = jwt.sign({ userId: user.id }, 'secret-key');
      res.cookie('jwt', token, { httpOnly: true, maxAge });
      res.status(200).json({ user, token });
   
      
    } else {
      res.status(404).json({ message: "invalid credentials"})
    }
  } catch (err) {
    res.status(400).send('Error occurred');
  }
};

module.exports = { 
  login,
  signin
}