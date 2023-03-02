import { createPost, getPosts, getType, updatePost } from "../actions";
import { INIT_STATE } from "../INIT_STATE";
export default function postsReducer(state = INIT_STATE.posts, action) {
    switch(action.type) {
        case getType(getPosts.getPostsRequest):
            return {
                ...state,
                isLoading: true
            }
        case getType(getPosts.getPostsSuccess):
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case getType(getPosts.getPostsFailure):
            return {
                ...state,
                isLoading: false
            }
        case getType(createPost.createPostRequest):
            return {
                ...state,
                isRequest: true
            }
        case getType(createPost.createPostSuccess):
            return {
                ...state,
                data: [...state.data, action.payload],
                isRequest: false
            }
        case getType(createPost.createPostFailure):
            return {
            ...state,
            isRequest: false
        }
        case getType(updatePost.updatePostRequest):
            return {
                ...state,
                isRequest: true
            }
        case getType(updatePost.updatePostSuccess):
            let indexOfUpdatedItem = state.data.find(ele =>  ele._id === action.payload._id)
            let cloneStateData = state.data.slice();
            cloneStateData.splice(indexOfUpdatedItem, 1, action.payload)
            return {
                ...state,
                data: [...cloneStateData],
                isRequest: false
            }
        case getType(updatePost.updatePostFailure):
            return {
            ...state,
            isRequest: false
        }
        default:
            return state
    }
}