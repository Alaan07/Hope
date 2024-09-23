import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userModel from './models/user.js';

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

mongoose.connect("mongodb://localhost:27017/Hope")

app.get('/login/:updatedEmail/:password', async(req, res) => {
    const useremail = req.params.updatedEmail;
    const userpassword = req.params.password;
    try{
        const userdata = await userModel.findOne({email: useremail})
        if(!userdata){
           return res.json({notfound: true});
        }else if(userdata.password === userpassword){
           return res.json({isloginSuccesfull: true});
        }else{
           return res.json({isloginSuccesfull: false});
        }
    }catch(err){
        console.log(err)
    }
});

app.post('/registeruser', async(req, res)=>{
    try{
        const isexist = await userModel.findOne({email:req.body.Email});
        if(isexist){
            return res.json({alreadyexist:true});
        }else{
            const data = await userModel.create({
                userName:req.body.userName, 
                email:req.body.Email,
                password:req.body.password,
                confirmPassword:req.body.confirmpassword
            })
            const users = res.json({data});
            console.log(users.data);
        }
    }catch(err){
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`the Server is started at port http://localhost:${port}`);
})