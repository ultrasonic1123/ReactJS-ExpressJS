import express from "express";
import { getPostsController, createPostController, updatePostController, deletePostController} from "../controllers/postsController.js";
const postsRouter = express.Router();

postsRouter.get('/', getPostsController)
postsRouter.post('/', createPostController)
postsRouter.post('/update', updatePostController)
postsRouter.post('/delete', deletePostController)


export default postsRouter;