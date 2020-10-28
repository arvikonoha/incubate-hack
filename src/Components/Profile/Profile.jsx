import React, { useContext } from "react";
import ProfileContext from "../../States/Profile/ProfileContext";
import CreateProfile from "../CreateProfile/CreateProfile";
import UpdateProfile from "../UpdateProfile/UpdateProfile";

function Profile() {
  let profile = useContext(ProfileContext);

  // to check if profile has any data
  if (!profile.firstname) return <CreateProfile />;
  else return <UpdateProfile />;
}

export default Profile;
