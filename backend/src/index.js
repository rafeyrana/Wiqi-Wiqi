import { clerkMiddleware } from '@clerk/express'
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import tracksRoute from "./routes/tracks.route.js";
import collectionsRoute from "./routes/collections.route.js";
import statsRoute from "./routes/stats.route.js";
import adminRoutes from "./routes/admin.route.js";
import {connectDB} from "./lib/db.js";


dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(clerkMiddleware())


app.get('/health-check', (req, res) => {
    res.send('We up baby!');
});

app.use("/api/auth", authRoutes)
app.use("/api/tracks", tracksRoute)
app.use("/api/users", userRoutes)
app.use("/api/collections", collectionsRoute)
app.use("/api/stats", statsRoute)
app.use("/api/admin", adminRoutes) 





app.listen(port, ()=>{
    console.log("Server is running on port " + port)
    connectDB()
});