import { clerkMiddleware } from "@clerk/express";
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import tracksRoute from "./routes/tracks.route.js";
import collectionsRoute from "./routes/collections.route.js";
import statsRoute from "./routes/stats.route.js";
import adminRoutes from "./routes/admin.route.js";
import { connectDB } from "./lib/db.js";
import fileUpload from "express-fileupload";
import path from "path";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(clerkMiddleware()); // this will add the auth to req objecy => req.auth

// save files in temp folder when we upload something, once it has been uploaded we can upload it, we could have used presigned urls from aws s3 as well but i am trying out this approach for now
const __dirname = path.resolve();
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true, // if it does not exist, it will create it
    limits: {
      fileSize: 1024 * 1024 * 10, // 10MB
    },
  })
);

app.get("/health-check", (req, res) => {
  res.send("We up baby!");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/tracks", tracksRoute);
app.use("/api/users", userRoutes);
app.use("/api/collections", collectionsRoute);
app.use("/api/stats", statsRoute);
app.use("/api/admin", adminRoutes);

// Error handling middleware
app.use((error, req, res, next) => {
  res
    .status(500)
    .json({
      message:
        process.env.NODE_ENV === "development"
          ? error.message
          : "Internal Server Error",
    });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
  connectDB();
});
