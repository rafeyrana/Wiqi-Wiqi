import { Track } from '../models/track.model.js';
import { User } from '../models/user.model.js';
import { Collection } from '../models/collection.model.js';
export const getAllStats = async (req, res, next) => {
  async (req, res) => {
    try {
      // make concurrent calls to db to get the db
      const [totalTracks, totalUsers, totalCollections, uniqueArtists] =
        await Promise.all([
          Track.countDocuments(),
          User.countDocuments(),
          Collection.countDocuments(),
          Track.aggregate([
            // getting the count of unique djs
            {
              $unionWith: {
                coll: "collection",
                pipeline: [],
              },
            },
            {
              $group: {
                _id: "$dj",
              },
            },
            {
              $count: "count",
            },
          ]),
        ]);
      const stats = [
        {
          totalTracks,
          totalUsers,
          totalCollections,
          uniqueArtists: uniqueArtists[0]?.count || 0,
        },
      ];
      res.json(stats[0]);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
};
