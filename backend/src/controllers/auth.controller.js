import {User} from "../models/user.model.js";
export const authCallback = async (req, res) => {
    try{
            const {id , firstName,lastName, imageUrl} = req.body
            // checking if user already exists
            const user = await User.findOne({clerkId: id})
            if (!user){
                await User.create(
                    {
                        username: `${firstname}${lastname}`,
                        clerkId: id,
                        imageUrl: imageUrl,
                    }
                )
            }
            res.status(200).json({success:true})
        }
        catch (error){
            console.log("Error in creating new user in Auth", error)
            res.status(500).json({message: "Internal Server Error", error})
        }
}