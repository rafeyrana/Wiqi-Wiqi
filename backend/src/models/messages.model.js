import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    sender: {
        type: string,
        required: true,
    },
    receiver: {
        type: string,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema);