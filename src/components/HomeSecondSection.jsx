import React from "react";
import { party } from "../assets";

const HomeFirstSection = () => {
  return (
    <section className={`section is-medium home-second-section-column-bg`}>
      <div className={`content has-text-centered `}>
        <h1 className={`title has-text-white is-size-1 has-text-weight-bold`}>
          The Crowd Pleasers
        </h1>
        <h2 className={`title has-text-white is-size-2 has-text-weight-bold`}>
          Party?
        </h2>
        <h3
          className={`subtitle has-text-white is-size-3 has-text-weight-bold`}
        >
          Invite us
        </h3>
      </div>

      <div className={`container`}>
        <div className={`columns`}>
          <div className={`column`}>
            <p className={`is-size-3 has-text-weight-light has-text-centered`}>
              Lord of the Wings
            </p>
            <p
              className={`is-size-4 has-text-white has-text-weight-light has-text-centered`}
            >
              100 Wings
            </p>
          </div>
          <div className={`column is-half`}>
            <figure className={`image is-6by9`}>
              <img src={party} />
            </figure>
          </div>
          <div className={`column`}>
            <p className={`is-size-3 has-text-weight-light has-text-centered`}>
              Hunger Games
            </p>
            <p className={`is-size-4 has-text-white has-text-centered`}>
              60 Wings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFirstSection;
