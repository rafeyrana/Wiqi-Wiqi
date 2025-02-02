import mongoose from "mongoose";
import { Collection } from "../models/collection.model.js";
import { Track } from "../models/track.model.js";
import { config } from "dotenv";

config();

const seedCollections = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing collections
    await Collection.deleteMany({});

    // Fetch some tracks from the database to associate with collections
    const allTracks = await Track.find().limit(10); // Adjust limit as needed

    const collections = [
      {
        title: "Urban Nights",
        dj: "Various Artists",
        description: "A mix of the best urban-themed tracks.",
        imageUrl: "/albums/1.jpg",
        releaseYear: 2024,
        tracks: allTracks.slice(0, 3).map((track) => track._id), // Assigning first 3 tracks
        createdAt: new Date(),
      },
      {
        title: "Coastal Dreaming",
        dj: "Various Artists",
        description: "Smooth coastal vibes for your summer days.",
        imageUrl: "/albums/2.jpg",
        releaseYear: 2024,
        tracks: allTracks.slice(3, 6).map((track) => track._id), // Assigning next 3 tracks
        createdAt: new Date(),
      },
      {
        title: "Midnight Sessions",
        dj: "Various Artists",
        description: "Late-night grooves to keep you going.",
        imageUrl: "/albums/3.jpg",
        releaseYear: 2024,
        tracks: allTracks.slice(6, 9).map((track) => track._id), // Assigning next 3 tracks
        createdAt: new Date(),
      },
    ];

    // Insert collections into the database
    const insertedCollections = await Collection.insertMany(collections);

    console.log("Collections seeded successfully!", insertedCollections);
  } catch (error) {
    console.error("Error seeding collections:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedCollections();