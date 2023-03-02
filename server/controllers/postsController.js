import { PostModel } from "../models/PostModel.js"

export const getPostsController = async (req, res) => {
    try {
        const posts = await PostModel.find({}, null, {limit: 5})
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

export const createPostController = async(req, res) => {
    try {
        const newPost = req.body
        const post = new PostModel(newPost)
        await post.save();
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

export const updatePostController = async(req, res) => {
    try {
        console.log("REQUEST UPDATE ACCEPTED")
        const updatePost = req.body
        const post = await PostModel.findOneAndUpdate({_id: updatePost._id},updatePost,{new: true})
        res.status(200).json(post)
    }
    catch(err){
        res.status(500).json({error: err})
    }
}

export const deletePostController = async(req, res) => {
    try {
        console.log(req)
        const itemId = req.body.id
        let deletedPost = await PostModel.findOneAndDelete({_id: itemId})
        res.status(200).json(deletedPost)
    }
    catch(err) {
        console.log("delete Item Err: ", err)
        res.status(500).json({error: err})
    }
}