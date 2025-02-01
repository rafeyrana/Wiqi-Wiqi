import { User } from "../models/user.model.js";
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const currentUser = req.auth.userId;
    // dont include current user in the results of call
    const usersWithoutCurrentUser = users.filter(
      (user) => user.clerkId !== currentUser
    );
    res.status(200).json(usersWithoutCurrentUser);
  } catch (error) {
    console.log("error in all users", error);
    next(error);
  }
};
