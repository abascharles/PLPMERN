const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.post('/api/users', async (req, res) => {
  const { email, password } = req.body;
  //hashing passwod using bcrypt
  const hash = await bcrypt.hash(password, 10);
  //Creating user and indicating thatit is hashed.
  const user = await User.create({ email, password: hash });
});
