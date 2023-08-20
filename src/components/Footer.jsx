import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`footer has-background-warning`}>
      <div className={`container`}>
        <div className={`content`}>
          <span className={`has-text-white has-text-weight-medium`}>
            © 2023 All Rights Reserved. Wingside Foods.
          </span>
          <span className={`icon-text is-pulled-right`}>
            <span className={`icon`}>
              <FaFacebookF color={"#fff"} fontWeight={500} fontSize={20} />
            </span>
            <span className={`icon`}>
              <FaTwitter color={`#fff`} fontWeight={500} fontSize={20} />
            </span>
            <span className={`icon`}>
              <FaInstagram color={`#fff`} fontWeight={500} fontSize={20} />
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
