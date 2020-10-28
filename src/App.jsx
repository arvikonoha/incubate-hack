import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import AuthState from "./States/Auth/AuthState";
import SecureRoute from "./Components/Utils/SecureRoute/SecureRoute";
import SignIn from "./Components/SignIn/SignIn";
import Profile from "./Components/Profile/Profile";
import ProfileState from "./States/Profile/ProfileState";
import Recs from "./Components/Recs/Recs";

function App() {
  return (
    <AuthState>
      <ProfileState>
        <BrowserRouter>
          <SecureRoute path="/profile" component={Profile} />
          <SecureRoute path="/recs" component={Recs} />
          <Route exact path="/" component={SignIn} />
        </BrowserRouter>
      </ProfileState>
    </AuthState>
  );
}

export default App;
