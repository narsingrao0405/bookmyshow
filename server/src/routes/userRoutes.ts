import authMiddleWare from "../middlewares/authMiddleWare";

const userRouter = require("express").Router();
const {addUser: addUserController, 
    loginUser: loginUserController,
    currentUser: currentUserController 
    } = require('../controller/userController')


userRouter.post('/register', addUserController);
userRouter.post('/login', loginUserController);
userRouter.get('/get-current-user',  currentUserController);

module.exports = userRouter;
