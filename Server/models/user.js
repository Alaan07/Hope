import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    email: {type: String, required: true},
    password :  {type: String, required: true},
    confirmPassword : {type: String, required: true}
});

const userModel = mongoose.model('users', UserSchema);

export default userModel;