import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5000;
console.log("Server Port is ::::::::::::::", PORT);


const app = express();
//const PORT = 3000;
connectDB();


app.use(cors({origin: '*'}));

app.get('/', (req: Request, res: Response) => {
    res.send("Book My Show API is running");

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})