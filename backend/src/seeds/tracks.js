import mongoose from "mongoose";
import { Track } from "../models/track.model.js"; // Ensure correct path to model
import { config } from "dotenv";

config();

const tracks = [
  {
    title: "Stay With Me",
    dj: "Sarah Mitchell",
    imageUrl: "/cover-images/1.jpg",
    genre: ["Pop", "Acoustic"],
    audioUrl: "/songs/1.mp3",
    duration: 46,
    plays: 10234,
    downloads: 523,
    collection: null,
    createdAt: new Date(),
  },
  {
    title: "Midnight Drive",
    dj: "The Wanderers",
    imageUrl: "/cover-images/2.jpg",
    genre: ["Synthwave", "Electronic"],
    audioUrl: "/songs/2.mp3",
    duration: 41,
    plays: 8342,
    downloads: 421,
    collection: null,
    createdAt: new Date(),
  },
  {
    title: "Lost in Tokyo",
    dj: "Electric Dreams",
    imageUrl: "/cover-images/3.jpg",
    genre: ["Chillwave", "Lo-fi"],
    audioUrl: "/songs/3.mp3",
    duration: 24,
    plays: 5021,
    downloads: 312,
    collection: null,
    createdAt: new Date(),
  },
  {
    title: "Summer Daze",
    dj: "Coastal Kids",
    imageUrl: "/cover-images/4.jpg",
    genre: ["Indie", "Surf Rock"],
    audioUrl: "/songs/4.mp3",
    duration: 24,
    plays: 6521,
    downloads: 271,
    collection: null,
    createdAt: new Date(),
  },
  {
    title: "Neon Lights",
    dj: "Night Runners",
    imageUrl: "/cover-images/5.jpg",
    genre: ["Synthwave", "Retro"],
    audioUrl: "/songs/5.mp3",
    duration: 36,
    plays: 12034,
    downloads: 732,
    collection: null,
    createdAt: new Date(),
  }
];

const seedTracks = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing tracks
    await Track.deleteMany({});

    // Insert new tracks
    await Track.insertMany(tracks);

    console.log("Tracks seeded successfully!");
  } catch (error) {
    console.error("Error seeding tracks:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedTracks();
