import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id:Number,
    username:String,
    fullname:String,
    password:String,
    email:String,
    phone:String,
    address:String,
});

const User = mongoose.model('User', userSchema);

export default User;    