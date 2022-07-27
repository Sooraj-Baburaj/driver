import React from "react";
import { Link } from "react-router-dom";
import newAssets from "../../newAssets/newAssets";

const ClienteleBanner = () => {
  let currentBanner = {};
  return (
    <>
      <div className="main_bannerpart" style={{ paddingBottom: "130px" }}>
        <div className="banner_contantpart_outer">
          <div class="banner_contantpart wow fadeInUp" data-wow-delay="1s">
            <h1 style={{ textAlign: "left" }}>
              {currentBanner.title !== null ? (
                <>
                  <span class="banner_redfont">3PL </span>
                  <span>Driver Drop by Driver Logistics</span>
                  <p style={{ fontSize: 16 }}>LTL Services in India </p>
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
              <div
                style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  fontWeight: "200",
                  opacity: "0.6",
                }}
              >
                <p style={{ fontSize: 16 }}>
                  Less-than-truckload (LTL) freight shipping is the
                  Cost-Efficient method for the transportation of Small Freights
                  most effectively.
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
            <img src={newAssets.clienteleBanner} alt="banner" />
          </div>
        </div>
      </div>
      <div className="service_contantbox_outer">
        <h2 className="background double take">
          <span>Best Method of Small Freight Transportation</span>
        </h2>
        <div className="mission_section no_after6">
          <p>
            Driver Drop is the Less-than-truckload (LTL) freight shipping method
            designed by Driver Logistics for transporting goods that do not need
            a complete truck or trailer.
          </p>
          <p>
            Collective small freights or goods are collected from distributors
            and warehouses in Kochi and are transported with the help of single
            truckloads to multiple delivery points in Kerala, making the method
            very efficient and cost-effective for the business.
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

export default ClienteleBanner;
