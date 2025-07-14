import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import path from "path";

import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const __dirname = path.resolve();
const rootDir = path.resolve(__dirname, "..");

console.log(path.join(rootDir, "/frontend/dist"));

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    try{
        // console.log(express.static(path.join(rootDir, "frontend", "dist")))
        app.use(express.static(path.join(rootDir, "frontend", "dist")));
    }
    catch(e){
        console.log("Error in this path.")
    }
    // console.log("*");
    try {
        app.get("", (req, res) => {
            res.sendFile(path.join(rootDir,"frontend", "dist", "index.html"));
            
        });
    } catch (error) {
        console.log("Error in path 2 error:",error);
    }
  
}

server.listen(PORT, () => {
  console.log("server is running on PORT:" + PORT);
  connectDB();
});