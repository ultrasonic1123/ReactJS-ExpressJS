import { combineReducers } from "redux"
import posts from './postsReducer'
import showPostModal from './showPostModalReducer' 
import showEditModal from "./showEditModalReducer"
export const reducers = combineReducers({
    posts,
    showPostModal,
    showEditModal
})