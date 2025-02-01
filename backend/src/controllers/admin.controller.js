import Track from "../models/track.model.js";
import Collection from "../models/collection.model.js";
export const createTrack = async (req, res, next) => {
   try {
        if (!req.files || ! req.audioFile || !req.imageFile) {
            return res.status(400).json({message: "Please provide all the required files"})
        }
        const {title, dj , collection, genre, duration} = req.body;
        const imageUrl = req.files.imageFile;
        const audioUrl = req.files.audioFile;
        const track = new Track({
            title,
            dj,
            imageUrl,
            audioUrl,
            genre,
            duration,
            collection : collection ? collection : null
        })
        await track.save();
        // if song belongs to a collection, add the track to the collection
        if (collection){
            await Collection.findByIdAndUpdate(collection, {$push: {tracks: track._id}})
        }
        return res.status(201).json({message: "Track created successfully", track})
    }
    catch (e) {
        console.log("Error creating track", e)
        next(error)
    }
};

