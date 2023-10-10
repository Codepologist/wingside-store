import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <div className="section">
      <div className="container">
        <div
          className="box has-text-centered py-6-desktop"
          style={{
            maxWidth: "28rem",
            marginTop: "3rem",
            marginLeft: "auto",
            marginRight: "auto",
            borderWidth: "1px",
            borderColor: "#DADFE9",
            borderStyle: "solid",
            boxShadow: "none",
            color: "#0A2463",
            borderRadius: "5px",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
          }}
        >
          <form action="">
            <span class="has-text-info has-text-weight-semibold">
              Register an account
            </span>
            <h3 class="mt-4 mb-6 title is-3">Join our community</h3>
            <div className="field mb-5">
              <div className="control">
                <input
                  className="input py-5"
                  type="email"
                  placeholder="Email"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <div className="field mb-5">
              <div className="control">
                <input
                  className="input py-5"
                  type="password"
                  placeholder="Create password"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <div className="field mb-5">
              <div className="control">
                <input
                  className="input py-5"
                  type="password"
                  placeholder="Confirm password"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <button className="button is-dark mb-5 py-5 is-fullwidth is-radiusless">
              Register
            </button>

            <p className="is-size-7 has-text-centered">
              <span>Have an account? </span>
              <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
