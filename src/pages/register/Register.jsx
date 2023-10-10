import { useState } from "react";
import { google } from "../../assets";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div className="section">
      <div className="container">
        <div
          className="card"
          style={{
            maxWidth: "30rem",
            marginTop: "3rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="card-content">
            <div className="has-text-centered">
              <h2 className="title is-size-3 is-size-4-mobile mt-6 mb-2 is-spaced">
                Register an account
              </h2>
              <p className="subtitle mb-6 ">Please enter details to proceed.</p>
            </div>
            <form action="">
              <div className="field mb-4">
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    style={{ borderRadius: "0px" }}
                  />
                </div>
              </div>
              <div className="field mb-4">
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Create password"
                    style={{ borderRadius: "0px" }}
                  />
                </div>
              </div>
              <div className="field mb-4">
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    placeholder="Confirm password"
                    style={{ borderRadius: "0px" }}
                  />
                </div>
              </div>
              <a className="button is-dark mb-4 is-fullwidth is-radiusless">
                Register
              </a>

              <p className="is-size-7 has-text-centered">
                <span>Have an account? </span>
                <Link to="/login">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
