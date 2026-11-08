import { Router } from "express";
import { createPost, getPost } from "../controllers/post.controllers.js";
import upload from "../middleware/multer.middleware.js";
const router = Router();

router.post("/create-post", upload.single("image"), createPost);
router.get("/get-posts", getPost);

export default router;