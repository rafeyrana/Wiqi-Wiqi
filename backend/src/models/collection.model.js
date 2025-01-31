import mongoose from 'mongoose';


const collectionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        dj: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        tracks: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Track',
                required: false
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }
    , {timestamp : true}
);

export const Collection = mongoose.model('Collection', collectionSchema);