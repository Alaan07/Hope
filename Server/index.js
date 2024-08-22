import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.listen(port, () => {
    console.log(`the Server is started at port http://localhost:${port}`);
})