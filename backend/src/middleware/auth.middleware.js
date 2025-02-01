import {clerkClient} from "@clerk/express"
// auth checking route
export const protectRoute = async (req, res, next) => {
    if (!req.auth.userId) {
        return res.status(401).json({message: "Unauthorized- User not logged in"})
    }
    next();
}
export const requireAdmin = async (req, res, next) => {
    try{
        const admin = await clerkClient.users.getUser(req.auth.userId)
        // get admin details from clerk
        if(admin.primaryEmailAddress?.emailAddress !== process.env.ADMIN_EMAIL){
            return res.status(403).json({message: "Unauthorized - User is not an admin"})
        }
    }
    catch (e) {
        return res.status(500).json({message: "Internal Server Error"})
    }
    next();
}