
const express = require('express');
//const userModel = require('../models/userModel');

const {userAdd} = require('../controllers/userController');

const userRouter = express.Router();

//movieRouter.post("/add-movie", addMovie);

userRouter.post('register', userAdd);
