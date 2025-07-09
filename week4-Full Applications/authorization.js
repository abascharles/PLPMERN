const jwt = require('jsonwebtoken');
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

//Authentication middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Token Required ');

  //Decoding the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send('Invalid token');
  }
};

//Authorization moddleware
const authorize = roles => {
  return (req, res, next) => {
    if (!roles.included(req.user.roles)) {
      return res.status(403).send('Acess Denied');
    }
    next();
  };
};

//The use of Authorization and authentication
app.get('/api/admin-only', auth, authorize(['admin']), (req, res) => {
  res.send('hello admin ');
});
