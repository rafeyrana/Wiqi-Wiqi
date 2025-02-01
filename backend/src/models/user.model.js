import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    clerkId:{
        type: String,
        required: true,
        unique: true
    }
} , {timestamps: true});

export const User = mongoose.model("User", userSchema);