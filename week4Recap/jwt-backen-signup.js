const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.post('api/users', async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, password: hash });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res, json({ token });
});
