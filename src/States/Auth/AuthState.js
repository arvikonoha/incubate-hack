import Axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

import { useReducer } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { AUTH_FAIL, AUTH_RESET, AUTH_SUCCESS } from "./authTypes";

const INITIAL_STATE = {
  isAuth: true,
  errorMessage: "",
};

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBcEbihX0SzcG-9K7my1BQb2qCFWZUeITM",
  authDomain: "incubate-hack.firebaseapp.com",
  databaseURL: "https://incubate-hack.firebaseio.com",
  projectId: "incubate-hack",
  storageBucket: "incubate-hack.appspot.com",
  messagingSenderId: "168406120815",
  appId: "1:168406120815:web:a0c5b7575a9ea2757e909a",
  measurementId: "G-TMEKSVZTX6",
};

function AuthState(params) {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  async function init() {
    // Initialize Firebase
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  async function signIn() {
    try {
      const userCred = await firebase.auth().signInWithPopup();
      const userDetails = await Axios.post(
        "/api/signin",
        {
          userid: userCred.user.uid,
        },
        {
          headers: { "content-type": "application/json" },
        }
      );
      dispatch({ type: AUTH_SUCCESS });
      return userDetails;
    } catch (error) {
      dispatch({ type: AUTH_FAIL, payload: error.message });
      throw error;
    }
  }

  async function reset() {
    if (state.isAuth) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          dispatch({ type: AUTH_RESET });
        });
    } else {
      dispatch({ type: AUTH_RESET });
    }
  }

  return (
    <AuthContext.Provider value={{ ...state, signIn, init, reset }}>
      {params.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
