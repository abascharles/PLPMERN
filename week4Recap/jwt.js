const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

//Hashing the  password and cretaing anew user with the  hashed password

app.post('api/users/signup', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash });

  //Generating a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token });
});

//login validate and  compare our passwords

app.post('api/users/signup', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).send('user not found');

  //comparing the  password
  const isMatch = await bcrypt.compare(req.body.password, user.password);
});
