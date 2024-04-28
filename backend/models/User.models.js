import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
      },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    confirmPass: {
        type: String,
        required: true,
        minlength: 8,
    },
    interests: {
        type: Array,
        default: [],
    },
    skills:{
        type: Array,
        default: [],
    },
    availability:{
        type: String,
        default: 'Available',
    }
})

const User = mongoose.model('User', userSchema);

export default User;