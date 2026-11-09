import express from "express";
import cors from "cors";
import postRoute from "./routes/post.route.js"

const app = express();

// app.use(cors({
//     origin: "http://localhost:5173"
// }));

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send(`<h1>Welcome to ImageKit File Upload API</h1>
        <p>Use the /create-post route to create a post with an image and caption.</p>
        <p>Use the /get-posts route to get all posts.</p>
    `);
});

// posts route
app.use("/api/posts", postRoute);

export default app;