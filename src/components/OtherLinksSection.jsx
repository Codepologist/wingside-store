import React from "react";

const OtherLinksSection = () => {
  return (
    <section className={`section`}>
      <div className={`container`}>
        <div className={`other-links-section`}>
          <ul
            className={`is-flex is-justify-content-space-evenly is-flex-wrap-wrap`}
          >
            <li>
              <a>Careers</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>My Account</a>
            </li>
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OtherLinksSection;
