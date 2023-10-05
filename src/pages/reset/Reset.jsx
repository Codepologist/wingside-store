import { google } from "../../assets";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <section className="section" style={{ paddingTop: "2.9rem" }}>
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
              <h2 className="title is-size-3 is-size-4-mobile mt-6 mb-4 is-spaced">
                Reset password
              </h2>
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
                    placeholder="Enter your email address"
                    style={{ borderRadius: "0px" }}
                  />
                </div>
              </div>

              <a className="button is-dark mb-4 is-fullwidth is-radiusless">
                Reset password
              </a>
              <a className="button mb-6 is-flex is-justify-content-center is-align-items-center is-radiusless">
                <img className="mr-2 image" src={google} alt="" />
                <span>Sign In with Google</span>
              </a>
              <p className="is-size-7 has-text-centered">
                <span>Have an account? </span>
                <Link to="/login">Sign In</Link>
              </p>
              <p className="is-size-7 has-text-centered">
                <span>Don’t have an account? </span>
                <Link to="/register">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reset;
