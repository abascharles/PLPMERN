const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

//registering user and generating a token

app.post('/api/users/sigup', async (req, res) => {
  const { email, password } = req.body;
  //hashing passwod using bcrypt
  const hash = await bcrypt.hash(password, 10);
  //Creating user and indicating thatit is hashed.
  const user = await User.create({ email, password: hash });

  //token generartion using jwt.sign() method
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

//fectching the user

app.post('/api/users/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send('User not found');

  //comparing the password after finding user(using bcrypt compare)
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.status(401).send('Invalid password');

  //Generate the token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

//Protecting routes using JWT middleware

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split('')[1];
};
