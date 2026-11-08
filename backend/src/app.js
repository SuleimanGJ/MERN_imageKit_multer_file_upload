import express from "express";
import postRoute from "./routes/post.route.js"

const app = express();
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