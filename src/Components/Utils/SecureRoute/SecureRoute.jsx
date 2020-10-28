import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthContext from "../../../States/Auth/AuthContext";

function SecureRoute({ component: Component, ...rest }) {
  const { isAuth } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...rest} /> : <Redirect to="/" />
      }
    />
  );
}

export default SecureRoute;
