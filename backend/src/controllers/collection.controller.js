import { Collection } from "../models/collection.model.js";
export const getAllCollections = async (req, res, next) => {
  try {
    const collections = await Collection.find();
    return res.status(200).json({ collections });
  } catch (e) {
    console.log("Error getting all collections", e);
    next(error);
  }
};

export const getCollectionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await Collection.findById(id).populate("tracks");
    if (!collection) {
      return res.status(404).json({ message: "Collection not found" });
    }
    return res.status(200).json({ collection });
  } catch (e) {
    console.log("Error getting collection by id", e);
    next(error);
  }
};
