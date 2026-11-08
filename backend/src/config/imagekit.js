import imageKit from "@imagekit/nodejs";
import dotenv from "dotenv";
dotenv.config();

const imagekit = new imageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    timeout: 3000000 // Increase timeout to 30 seconds (value in milliseconds)
});

export default imagekit;