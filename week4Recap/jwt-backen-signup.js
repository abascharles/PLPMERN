const jwt = require('jsonwebtoken')

const express = require('express');

const app = express();

app.post('api/users', async(req, res) => {
    const {email, password} = req.body
})