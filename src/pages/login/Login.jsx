import { google } from "../../assets";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="section">
      <div className="container">
        <div
          style={{
            maxWidth: "24rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="has-text-centered">
            <h2 className="title is-size-3 mt-6 mb-2 is-spaced">
              Log in to your account
            </h2>
            <p className="subtitle mb-6">
              Please enter your details to proceed.
            </p>
          </div>
          <form action="">
            <div className="field mb-4">
              <label className="label" htmlFor="">
                Email
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Your email address"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <div className="field mb-4">
              <label className="label" htmlFor="">
                Password
              </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  placeholder="Your password"
                  style={{ borderRadius: "0px" }}
                />
              </div>
            </div>
            <label className="checkbox is-flex mb-6">
              <input
                className="mr-4"
                type="checkbox"
                name="terms"
                value="1"
                style={{ borderRadius: "0px" }}
              />
              <div className="is-size-7">
                <span>Remember Me</span>
              </div>
            </label>
            <a className="button is-dark mb-4 is-fullwidth is-radiusless">
              Sign In
            </a>
            <a className="button mb-6 is-flex is-justify-content-center is-align-items-center is-radiusless">
              <img className="mr-2 image" src={google} alt="" />
              <span>Sign In with Google</span>
            </a>
            <p className="is-size-7 has-text-centered">
              <span>Don’t have an account? </span>
              <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
