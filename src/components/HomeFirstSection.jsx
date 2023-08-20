import React from "react";
import { spice, product, bash } from "../assets";

const HomeFirstSection = () => {
  return (
    <section className={`section is-medium`}>
      <div className={`container`}>
        <div className={`columns`}>
          <div className={`column`}>
            <div className={`card`}>
              <div className={`card-image`}>
                <figure className={`image`}>
                  <img src={spice} />
                </figure>
              </div>
              <div
                className={`card-content home-first-section-column-text is-overlay`}
              >
                <h4 className={`subtitle has-text-white`}>
                  15 Exciting Flavors
                </h4>
                <a className={`btn-cta`}>MEET OUR FLAVORS</a>
              </div>
            </div>
          </div>
          <div className={`column`}>
            <div className={`card`}>
              <div className={`card-image`}>
                <figure className={`image`}>
                  <img src={product} />
                </figure>
              </div>
              <div
                className={`card-content home-first-section-column-text is-overlay`}
              >
                <h4 className={`subtitle has-text-white`}>
                  Boost Employee Morale
                </h4>
                <a className={`btn-cta`}>OFFICE PROGRAM</a>
              </div>
            </div>
          </div>
          <div className={`column`}>
            <div className={`card`}>
              <div className={`card-image`}>
                <figure className={`image`}>
                  <img src={bash} />
                </figure>
              </div>
              <div
                className={`card-content home-first-section-column-text is-overlay`}
              >
                <h4 className={`subtitle has-text-white`}>
                  Get Loads of Rewards
                </h4>
                <a className={`btn-cta`}>JOIN THE WINGCLUB</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstSection;
