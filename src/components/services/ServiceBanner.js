import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import newAssets from "../../newAssets/newAssets";

const ServiceBanner = () => {
  const { data = [] } = useSelector((state) => state.userLog.banner);
  const currentBanner = data[0] || {};
  return (
    <>
      <div className="main_bannerpart" style={{ paddingBottom: "130px" }}>
        <div className="banner_contantpart_outer">
          <div class="banner_contantpart wow fadeInUp" data-wow-delay="1s">
            <h1 style={{ textAlign: "left" }}>
              {currentBanner.title !== null ? (
                <>
                  <p style={{ fontSize: 16 }}>
                    Becoming the most Flexible & Customer-driven
                  </p>
                  <span class="banner_redfont">3PL</span>
                  <span> Company In India</span>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 16 }}>
                    Becoming the most Flexible & Customer-driven
                  </p>{" "}
                  <br />
                  <span class="banner_redfont">3PL</span> Company In India
                </>
              )}
              <br />
              <div
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  fontWeight: "200",
                  opacity: "0.6",
                }}
              >
                <p style={{ fontSize: 16 }}>
                  {" "}
                  Helping businesses scale and reduce overall cost with
                  customisable end-to-end logistics solutions and fulfilment
                  services backed by new-age technology.
                </p>
              </div>
              <div class="banner_readmore">
                <Link to="/about-us" class="theme-btn btn-style-one">
                  <span class="btn-title">Contact Us</span>
                </Link>
              </div>
            </h1>
          </div>
          <div className="banner_imagepart wow fadeInUp">
            <img src={newAssets.homeBanner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="service_contantbox_outer">
        <h2 className="background double take">
          <span> Fastest-growing 3PL Company in India</span>
        </h2>
        <div className="mission_section no_after6">
          <p>
            Driver Team has transformed itself into a well-acknowledged player
            in 3PL warehouse planning, B2B fulfilment and logistics. Our
            collective passion for innovation and excellence helps us understand
            the supply chain challenges companies face and we are equipped with
            the knowledge and resources to help businesses optimise their
            logistics operations in India.
          </p>
        </div>
        <div className="centerButton">
          <button className="contact_button">
            <a href="/login">Join Now</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
