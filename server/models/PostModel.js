import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: 'Admin',
        required: true
    },
    attachment: String,
    likeCount: {
        type: Number,
        default: 0
    }
    // if timestamps added automatic add two field createdAd updatedAt
},{timestamps: true})

export const PostModel = mongoose.model('Post', postSchema)