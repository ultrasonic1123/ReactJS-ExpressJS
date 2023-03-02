import {getType, hideModal, showModal} from '../actions'
import { INIT_STATE } from '../INIT_STATE'

export default function showPostModalReducer(state = INIT_STATE.showPostModal, action){
    switch(action.type) {
        case getType(showModal): {
            return {isShow: true} 
        }
        case getType(hideModal): {
            return { isShow: false}
        }
        default: {
            return state
        }
    }
}