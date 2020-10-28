import { AUTH_FAIL, AUTH_SUCCESS, AUTH_RESET } from "./authTypes";

function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuth: true };
    case AUTH_FAIL:
      return { ...state, isAuth: false, errorMessage: action.payload };
    case AUTH_RESET:
      return { ...state, isAuth: false, errorMessage: "" };
    default:
      return { ...state };
  }
}

export default AuthReducer;
