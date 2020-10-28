import { PROFILE_CREATE, PROFILE_DELETE, PROFILE_UPDATE } from "./profileTypes";

function ProfileReducer(state, action) {
  switch (action.type) {
    case PROFILE_UPDATE:
      return { ...state, [action.payload.key]: action.payload.value };
    case PROFILE_CREATE:
      return { ...action.payload };
    case PROFILE_DELETE:
      return {};
    default:
      return state;
  }
}

export default ProfileReducer;
