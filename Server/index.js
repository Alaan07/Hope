import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userModel from './models/user.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

mongoose.connect("mongodb://localhost:27017/Hope")

app.post('/registeruser', async(req, res)=>{
    try{
        const data = await userModel.create({
            userName:req.body.userName, 
            email:req.body.Email,
            password:req.body.password,
            confirmPassword:req.body.confirmpassword
        })
        const users = res.json({data});
        console.log(users.data);
    }catch(err){
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`the Server is started at port http://localhost:${port}`);
})