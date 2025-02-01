import mongoose from "mongoose";
const trackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    dj: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    genre: {
      type: [{ type: String, required: true }],
    },
    audioUrl: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    plays: {
      type: Number,
    },
    downloads: {
      type: Number,
    },
    collection: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Collection",
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamp: true }
);

export const Track = mongoose.model("Track", trackSchema);
