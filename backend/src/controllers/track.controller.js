import { Track } from "../models/track.model.js";

export const getAllTracks = async (req, res, next) => {
  try {
    const tracks = await Track.find().sort({ createdAt: -1 }); // newest first -1 is descending
    return res.status(200).json(tracks);
  } catch (e) {
    console.log("Error getting all tracks", e);
    next(e);
  }
};

export const getFeaturedTracks = async (req, res, next) => {
  try {
    // fetching 6 featured songs using monogdb aggregation pipeline
    const tracks = await Track.aggregate([
      {
        $sample: { size: 6 },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          dj: 1,
          imageUrl: 1,
          genre: 1,
          audioUrl: 1,
        },
      },
    ]);
    return res.status(200).json(tracks);
  } catch (e) {
    console.log("Error getting featured tracks", e);
    next(e);
  }
};

export const getMadeForYouTracks = async (req, res, next) => {
    try {
        // not complicating it using a recommendation algorithm YET
        const tracks = await Track.aggregate([
          {
            $sample: { size: 4 },
          },
          {
            $project: {
              _id: 1,
              title: 1,
              dj: 1,
              imageUrl: 1,
              genre: 1,
              audioUrl: 1,
            },
          },
        ]);
        return res.status(200).json(tracks);
      } catch (e) {
        console.log("Error getting featured tracks", e);
        next(e);
      }
};
export const getTrendingTracks = async (req, res, next) => {
    try {
        // not complicating it using a recommendation algorithm YET
        const tracks = await Track.aggregate([
          {
            $sample: { size: 4 },
          },
          {
            $project: {
              _id: 1,
              title: 1,
              dj: 1,
              imageUrl: 1,
              genre: 1,
              audioUrl: 1,
            },
          },
        ]);
        return res.status(200).json(tracks);
      } catch (e) {
        console.log("Error getting featured tracks", e);
        next(e);
      }
};
