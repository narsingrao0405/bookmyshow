const userRouter = require("express").Router();
const {addUser: addUserController, loginUser: loginUserController} = require('../controller/userController')


userRouter.post('/register', addUserController);
userRouter.post('/login', loginUserController);

module.exports = userRouter;
