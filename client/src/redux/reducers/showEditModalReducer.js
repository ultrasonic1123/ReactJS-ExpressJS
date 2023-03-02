import { INIT_STATE } from "../INIT_STATE";
import { getType, showEditModal, hideEditModal } from "../actions";
export default function showEditModalReducer(
  state = INIT_STATE.showEditModal,
  action
) {
  switch (action.type) {
    case getType(showEditModal):
      return {
        isShow: true,
      };
    case getType(hideEditModal):
      return {
        isShow: false,
      };
    default:
      return state;
  }
}
