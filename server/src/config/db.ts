import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const dbURL = process.env.DB_URL || "mongodb://localhost:27017/bookmyshow";
console.log("MongoDB URL is ::::::::::::", dbURL);
console.log("DB_URL from environment:", process.env.DB_URL);

const connectDB = async () => {
    try{
        await mongoose.connect(dbURL as string, {});
        console.log("MongoDB connected successfully");
        }catch(error:any){
        console.log("Error connecting to Database:::::::::::", error.message);
        process.exit(1);
    }
};
export default connectDB;