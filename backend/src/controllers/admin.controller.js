import {Track} from "../models/track.model.js";
import {Collection} from "../models/collection.model.js";
import { uploadToCloudinary } from "../lib/cloudinary.js";

export const checkAdmin = async (req, res, next) => {
  return res.status(200).json({ admin: true });
};

export const createTrack = async (req, res, next) => {
  try {
    if (!req.files || !req.audioFile || !req.imageFile) {
      return res
        .status(400)
        .json({ message: "Please provide all the required files" });
    }
    const { title, dj, collection, genre, duration } = req.body;
    const imageFile = req.files.imageFile;
    const audioFile = req.files.audioFile;
    // uploading to cloudinary
    const imageUrl = await uploadToCloudinary(imageFile);
    const audioUrl = await uploadToCloudinary(audioFile);
    const track = new Track({
      title,
      dj,
      imageUrl,
      audioUrl,
      genre,
      duration,
      collection: collection ? collection : null,
    });
    await track.save();
    // if song belongs to a collection, add the track to the collection
    if (collection) {
      await Collection.findByIdAndUpdate(collection, {
        $push: { tracks: track._id },
      });
    }
    return res
      .status(201)
      .json({ message: "Track created successfully", track });
  } catch (e) {
    console.log("Error creating track", e);
    next(error);
  }
};

export const deleteTrack = async (req, res, next) => {
  try {
    const { id } = req.params;
    const track = await Track.findById(id);
    if (track.collection) {
      await Collection.findByIdAndUpdate(track.collection, {
        $pull: { tracks: id },
      });
    }
    await Track.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ message: "Track deleted successfully", track });
  } catch (e) {
    console.log("Error deleting track", e);
    next(error);
  }
};

export const createCollection = async (req, res, next) => {
  try {
    const { title, dj, description, releaseYear } = req.body;
    const imageFile = req.files.imageFile;
    const imageUrl = await uploadToCloudinary(imageFile);
    const collection = new Collection({
      title,
      dj,
      description: description ? description : "",
      imageUrl,
      releaseYear,
    });
    await collection.save();
    return res
      .status(201)
      .json({ message: "Collection created successfully", collection });
  } catch (e) {
    console.log("Error creating collection", e);
    next(error);
  }
};

export const deleteCollection = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Track.deleteMany({ collection: id });
    await Collection.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Collection deleted successfully", collection });
  } catch (e) {
    console.log("Error deleting collection", e);
    next(error);
  }
};
