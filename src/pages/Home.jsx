import React from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import { handhelper, hand, milkshake } from "../assets";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

import {
  HomeFirstSection,
  HomeSecondSection,
  OtherLinksSection,
} from "../components";

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
      <section className={`hero is-warning is-fullheight`}>
        <div className={`hero-body pb-0`}>
          <Swiper
            autoplay={true}
            loop={true}
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <div className={`columns`}>
                <div className={`column`}>
                  <div className={`head-r px-4 py-4`}>
                    <h1>Grab life by the wings</h1>
                    <div className={`mt-2`}>
                      <a
                        href="/#"
                        className={`button is-uppercase has-text-weight-bold is-borderless is-radiusless`}
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
                </div>
                <div className={`column is-hidden-mobile`}>
                  <div
                    className={`card`}
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <div className={`card-image`}>
                      <figure className={`image`}>
                        <img
                          src={handhelper}
                          style={{
                            verticalAlign: "top",
                            height: "100%",
                            width: "100%",
                            position: "relative",
                            maxWidth: "none",
                            margin: "0px",
                            padding: "0px",
                          }}
                        />
                      </figure>
                    </div>
                    <div className={`card-content is-overlay`}>
                      <figure className={`image`}>
                        <img
                          src={hand}
                          style={{
                            verticalAlign: "top",
                            height: "100%",
                            width: "70%",
                            position: "relative",
                            maxWidth: "none",
                            margin: "0px",
                            padding: "0px",
                          }}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`head-r px-4 py-4 `}>
                <h1 className={`has-text-centered`}>Friends with Benefits</h1>
                <p className={`has-text-centered`}>refer a friend, get 500</p>
                <div className={`has-text-centered mt-2`}>
                  <a
                    href="/#"
                    className={`button is-uppercase has-text-weight-bold is-borderless is-radiusless`}
                    style={{
                      color: "#fff",
                      background: "#502829",
                      borderColor: "#502829",
                    }}
                  >
                    join the program
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`columns`}>
                <div className={`column`}>
                  <div className={`head-r px-4 py-4`}>
                    <h1>Save water, Drink a Milkshake</h1>
                    <div className={`mt-2`}>
                      <a
                        href="/#"
                        className={`button is-uppercase has-text-weight-bold is-borderless is-radiusless`}
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
                </div>
                <div className={`column is-hidden-mobile`}>
                  <div
                    className={`card`}
                    style={{ background: "transparent", boxShadow: "none" }}
                  >
                    <div className={`card-image`}>
                      <div className={`save-water`}></div>
                    </div>
                    <div className={`card-content is-overlay`}>
                      <figure className={`image`}>
                        <img
                          src={milkshake}
                          style={{
                            verticalAlign: "top",
                            height: "100%",
                            width: "80%",
                            position: "relative",
                            maxWidth: "none",
                            margin: "0px",
                            padding: "165px 0px 60px ",
                          }}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <HomeFirstSection />
      <HomeSecondSection />
      <OtherLinksSection />
    </React.Fragment>
  );
};

export default Home;
