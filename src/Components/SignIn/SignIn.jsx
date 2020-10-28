import React, { useContext } from "react";
import AuthContext from "../../States/Auth/AuthContext";
import { Redirect } from "react-router-dom";

function SignIn() {
  let { isAuth } = useContext(AuthContext);

  if (!isAuth)
    return (
      <section
        style={{
          minHeight: "95vh",
          maxWidth: "1080px",
          borderRadius: "30px",
          background:
            "linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.5)), url(./team-img.jpg) center center/cover no-repeat",
        }}
        className="mx-auto m-3 d-flex flex-column justify-content-center align-items-center p-5"
        id="welcome"
      >
        <h2 className="mb-3 text-white">Code mapper</h2>
        <p className="mb-5 text-white text-center">
          We aim to find the best suited team-mate for your project, code
          reaview and so on
        </p>
        <button className="btn btn-primary">
          Sign in to get started <i className="far fa-arrow-right"></i>
        </button>
      </section>
    );
  else return <Redirect to="/profile" />;
}

export default SignIn;
