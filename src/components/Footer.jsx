import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer has-background-warning">
      <div className="container">
        <div className="content has-text-centered">
          <p
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              fontWeight: "400",
              color: "#fcfcfc",
            }}
          >
            © 2023 Wingside Foods. All Rights Reserved.
          </p>
        </div>
        <div className="content has-text-centered has-text-white">
          <span className="icon has-text-weight-bold">
            <FaFacebookF />
          </span>
          <span className="icon has-text-weight-bold">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaInstagram style={{ fontWeight: "900" }} />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
