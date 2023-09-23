import { contact } from "../../assets";
const Contact = () => {
  return (
    <div className="section" style={{ marginTop: "2.9rem" }}>
      <div className="container">
        <figure className="image">
          <img src={contact} alt="Contact Us" />
        </figure>

        <div className="columns">
          <div className="column">
            <div
              style={{
                maxWidth: "24rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div>
                <h2 className="title is-size-3 mt-6 mb-6 is-spaced">
                  Hope to see you soon at any of our locations in Nigeria!
                </h2>
                <p className="subtitle mb-6">
                  24 King Perekule Street, <br /> Port Harcourt, <br />
                  Nigeria
                </p>
                <p className="subtitle mb-0">
                  30/33 Sani Abacha Road, <br />
                  The Autograph Mall, <br />
                  Port Harcourt,
                  <br />
                  Nigeria
                  <br />
                  <br />
                  +234(0)809-019-1999
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div
              style={{
                maxWidth: "24rem",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <div>
                <h2 className="title is-size-3 mt-6 mb-6 is-spaced">
                  How’s it going?
                </h2>
                <p className="subtitle mb-6">
                  We love hearing from you! Let us know if you have feedback or
                  questions.
                </p>
              </div>
              <form action="">
                <div className="field mb-4">
                  <label className="label" htmlFor="">
                    Your Name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your Name"
                      style={{ borderRadius: "0px" }}
                    />
                  </div>
                </div>
                <div className="field mb-4">
                  <label className="label" htmlFor="">
                    Your Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Your Email"
                      style={{ borderRadius: "0px" }}
                    />
                  </div>
                </div>
                <div className="field mb-4">
                  <label className="label" htmlFor="">
                    Phone
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your Phone"
                      style={{ borderRadius: "0px" }}
                    />
                  </div>
                </div>
                <div className="field mb-4">
                  <label className="label" htmlFor="">
                    Subject
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Your Subject"
                      style={{ borderRadius: "0px" }}
                    />
                  </div>
                </div>
                <div className="field mb-4">
                  <label className="label" htmlFor="">
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea has-fixed-size"
                      placeholder="Your Message Here"
                      rows="5"
                    />
                  </div>
                </div>
                <a className="button is-dark mb-4 is-fullwidth is-radiusless">
                  Send Message
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
