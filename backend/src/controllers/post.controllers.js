import uploadFile from "../services/storage.service.js";
import postModel from "../models/post.model.js";

const createPost = async (req, res) => {
    
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select an image",
      });
    }

    const result = await uploadFile(req.file.buffer);

    const newPost = await postModel.create({
        image: result.url,
        caption: req.body.caption
    });

    // await postModel.save();

    return res.status(201).json({
        success: true,
        message: "Post uploaded successfully",
        data: newPost
    });
};


const getPost = async (req, res) => {
    const posts = await postModel.find();

    if(!posts){
        res.status(500).json({
        success: false,
        message: "Posts not found",
        });
    }

    return res.status(200).json({
        success: true,
        message: "Posts fetched successfully",
        data: posts
    });
}

export { createPost, getPost };