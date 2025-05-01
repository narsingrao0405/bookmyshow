import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({origin: '*'}));

app.get('/', (req: Request, res: Response) => {
    res.send("Book My Show API is running");

});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})