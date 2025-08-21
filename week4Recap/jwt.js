const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

//Hashing the  password and creating a new user with the  hashed password

app.post('api/users/signup', async (req, res) => {
  const { email, password } = req.body;
  //Hasshing the password
  const hash = await bcrypt.hash(password, 10);
  //Creating the user using the email and the hashed password
  const user = await User.create({ email, password: hash });

  //Generating a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

//login validate and compare our passwords

app.post('api/users/sigin', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send('user not found');

  //comparing the  password
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.status(401).send('Invalid password');

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

//Protecting routes using JWT Middleware
//HOW

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; //Bearer <token>
  if (!token) return res.status(401).send('No valid token provided');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send('Invalid Token');
  }
};
