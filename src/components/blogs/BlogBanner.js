import React from "react";
import { Link } from "react-router-dom";
import newAssets from "../../newAssets/newAssets";

const ServiceThreeBanner = () => {
  const currentBanner = {};
  return (
    <>
      <div className="main_bannerpart" style={{ paddingBottom: "130px" }}>
        <div className="banner_contantpart_outer">
          <div class="banner_contantpart wow fadeInUp" data-wow-delay="1s">
            <h1 style={{ textAlign: "left" }}>
              {currentBanner.title !== null ? (
                <>
                  <p style={{ fontSize: 16 }}>
                    Systematic & Comprehensive Solutions To{" "}
                  </p>
                  <span class="banner_redfont">Warehouse </span>
                  <span> Management & B2B Fulfilment</span>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 16 }}>
                    Systematic & Comprehensive Solutions To
                  </p>{" "}
                  <br />
                  <span class="banner_redfont">Warehouse</span> Management & B2B
                  Fulfilment
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
                  Complete Warehouse management and streamline B2B fulfilment
                  services, including order processing and inventory management
                  for companies in India.
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
            <img src={newAssets.serviceThreeBanner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="service_contantbox_outer">
        <h2 className="background double take">
          <span> B2B Fulfilment With WMS In India </span>
        </h2>
        <div className="mission_section no_after6">
          <p>
            Visionary and growing businesses in India have already set the trend
            of outsourcing their Warehouse management and B2B fulfilment to 3PL
            companies in order to make their process of Inventory, warehouse
            operations and customer service efficient and error-proof.
          </p>
          <p>
            With Driver Logistics, you can streamline your business strategies
            with state-of-the-art technology and cloud-based software modules
            with APIs and EDI. This helps in saving time and turning focus to
            scaling your core business.
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

export default ServiceThreeBanner;
