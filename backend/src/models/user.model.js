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
        required: true,
        unique: true,
    },
    clerkId:{
        type: string,
        required: true,
        unique: true
    }
} , {timestamps: true});

export const User = mongoose.model("User", userSchema);