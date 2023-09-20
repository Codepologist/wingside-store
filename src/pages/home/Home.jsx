import React from "react";
import { Helmet } from "react-helmet";
import { hand } from "../../assets";

import {
  HomeFirstSection,
  HomeSecondSection,
  Breadcrumb,
} from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>
          The Wingside of Town – Wings. Sandwiches. Wraps - Wingside®
        </title>
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Wingside® - Eat &amp; Tell™" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="The Wingside of Town – Wings. Sandwiches. Wraps - Wingside®"
        />
        <meta property="og:url" content="https://wingside.ng/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="The Wingside of Town – Wings. Sandwiches. Wraps - Wingside®"
        />
      </Helmet>

      <section className="hero is-warning is-fullheight-with-navbar" style={{ paddingTop: "2.9rem" }}>
        <div className="hero-body pb-0">
          <div className="columns is-align-items-center">
            <div className="column">
              <p
                className="title has-text-weight-bold has-text-white is-size-1-mobile has-text-centered-mobile"
                style={{ fontSize: "80px" }}
              >
                Grab life by the wings
              </p>
              <div className="mt-2 mb-6 is-hero-item-center">
                <a
                  href="#"
                  className="button is-uppercase has-text-weight-bold is-borderless is-radiusless"
                  style={{
                    color: "#fff",
                    background: "#502829",
                    borderColor: "#502829",
                  }}
                >
                  order now
                </a>
              </div>
            </div>
            <div className="column">
              <div
                className="card"
                style={{ background: "transparent", boxShadow: "none" }}
              >
                <div className="card-image has-image-centered">
                  <figure className="image is-centered is-mobile">
                    <img src={hand} />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeFirstSection />
      <HomeSecondSection />
      <Breadcrumb />
    </React.Fragment>
  );
};

export default Home;
