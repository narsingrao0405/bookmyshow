import userModel from '../models/userModel';

const jwt = require('jsonwebtoken');
const jwtSecret : any = process.env.JWT_SECRET;
const jwtExpiry : any = process.env.JWT_EXPIRY;


const addUser = async(req: any, res: any) => {
    //const {name, email, password, isAdmin} = req.body;
    console.log("User details are ::::::::::::::::", req.body);
    try{
        const newUser = new userModel(req.body);
        const userExists = await userModel.findOne({email : newUser.email});
        if(userExists){
            return res.status(400).json({
                success: false,
                message: "User already exists",
            })
        }
        const user = await newUser.save();
        console.log("User Registration Success ::::::::::::", user);
        res.status(201).json({
            success: true,
            message: "User Registration Success",
            user: user.email
        })

    }catch(error:any){
        console.log("Error in User Registration :::::::::::", error.message);
        res.status(500).json({
            message: "Error in User Registration",
            error: error.message
        })
    }
};

const loginUser = async (req: any, res: any) => {
    const {email, password} = req.body;

    console.log("User Login details are ::::::::::::::::", req.body);
    try{
        const login = await userModel.findOne({email});
        if(!login){
            return res.status(401).json({
                success: false,
                message: "User not found",
            })

        }else{
            if(login.password != password){
                return res.status(401).json({
                    success: false,
                    message: "Invalid Password",
                })
            }else{
                console.log("User Login Success ::::::::::::", login);
                const token = jwt.sign({userId: login._id}, jwtSecret, {expiresIn: jwtExpiry});
                console.log("Token is ::::::::::::::::", token);
                // res.cookie("token",token, {
                //     httponly: true,
                //     maxAge: jwtExpiry * 1000,
                //     //secure: process.env.NODE_ENV === "production" ? true : false,
                // });
                res.status(200).json({
                    success: true,
                    message: "User Login Success",
                    data: token,
                })
            }

            }

        }catch(error:any){
        console.log("Error in User Login :::::::::::", error.message);
        res.status(500).json({
            success: false,
            message : "Error in User Login",
            error: error.message
        })
    }
};

module.exports = {
    addUser, // creating a new user
    loginUser, // login user

}