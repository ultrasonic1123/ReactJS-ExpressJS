import { call, takeLatest, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api'

function * fetchPostsSaga(action) {
    try {console.log("action", action)
    const posts = yield call(api.getPosts);
    console.log("posts: ", posts)
    yield put(actions.getPosts.getPostsSuccess(posts.data))}
    catch(err) {
        console.error(err)
        alert(err)
        yield put(actions.getPosts.getPostsFailure(err))
    }
}

function * createPostSaga(action) {
    try {console.log("action", action)
    const post = yield call(api.createPost, action.payload);
    console.log("create-post: ", post.data)
    yield put(actions.createPost.createPostSuccess(post.data))}
    catch(err) {
        console.error(err)
        yield put(actions.createPost.createPostFailure(err))
    }
}

function* updatePostSaga(action) {
    try {
        console.log("Process API", action.payload)
        const updatedPost = yield call(api.updatePost, action.payload)
        console.log("Process API", updatedPost.data)
        yield put(actions.updatePost.updatePostSuccess(updatedPost.data))
    }
    catch(err) {
        console.log(err)
        yield put(actions.updatePost.updatePostFailure(err))
    }
}

function* mySaga () {
    console.log('pattern: ', actions.getPosts.getPostsRequest)
    yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga)
    yield takeLatest(actions.createPost.createPostRequest, createPostSaga)
    yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga)
}

export default mySaga;