const userModel = require('../models/userModel');


const addUser = async(req: any, res: any) => {
    //const {name, email, password, isAdmin} = req.body;
    console.log("User details are ::::::::::::::::", req.body);
    try{
        const newUser = new userModel(req.body);
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

module.exports = {
    addUser // creating a new user
}