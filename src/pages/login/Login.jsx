import { google } from "../../assets";
import { Link } from "react-router-dom";

const Login = () => {
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
              Log in to your account
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
            <button className="button is-dark mb-5 py-5 is-fullwidth is-radiusless">
              Sign In
            </button>
            <a className="button mb-6 py-5 is-flex is-justify-content-center is-align-items-center is-radiusless">
              <img className="mr-2 image" src={google} alt="" />
              <span>Sign In with Google</span>
            </a>
            <p className="is-size-7 has-text-centered">
              <Link to="/reset">Lost your password?</Link>
            </p>
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
