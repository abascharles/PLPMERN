//Import depedencies you just installed

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./Routes/taskRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
