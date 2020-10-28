import Axios from "axios";
import { useReducer } from "react";
import ProfileContext from "./ProfileContext";
import ProfileReducer from "./ProfileReducer";
import { PROFILE_CREATE, PROFILE_DELETE, PROFILE_UPDATE } from "./profileTypes";

function ProfileState({ profile, ...props }) {
  const [state, dispatch] = useReducer(ProfileReducer, profile);

  async function createProfile(profile) {
    try {
      const creationStatus = await Axios.post("/api/profile/create", profile, {
        headers: {
          "content-type": "application/json",
        },
      });
      dispatch({ type: PROFILE_CREATE, profile });
      return creationStatus;
    } catch (error) {
      throw error;
    }
  }

  async function updateProfile(category, body) {
    try {
      const updationStatus = await Axios.post(
        `/api/profile/update?category=${category}`,
        body,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      dispatch({ type: PROFILE_UPDATE, profile });
      return updationStatus;
    } catch (error) {
      throw error;
    }
  }

  async function deleteProfile() {
    try {
      const deletionStatus = await Axios.delete(`/api/profile/delete`);
      dispatch({ type: PROFILE_DELETE });
      return deletionStatus;
    } catch (error) {
      throw error;
    }
  }

  return (
    <ProfileContext.Provider
      value={{ ...state, createProfile, updateProfile, deleteProfile }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
}

export default ProfileState;
