import React from "react";
import HeaderTabList from "./HeaderTabList";
import FooterTopBox from "../common/FooterTopBox";
import ServicesCommon from "./common";
import Fade from "react-reveal/Fade";
import FaqSection from "../home/Faq";
import newAssets from "../../newAssets/newAssets";
import ServiceBanner from "./ServiceBanner";
import ServiceContent from "./ServiceContent";
import ServiceTestimonial from "./ServiceTestimonial";

function ServiceMain() {
  return (
    <div className="page-wrapper">
      <ServiceBanner />
      <ServiceContent />
      <Fade bottom>
        <ServiceTestimonial />
      </Fade>
      <Fade bottom>
        <h2
          className="background"
          style={{ width: "60%", margin: "80px auto 0" }}
        >
          <span style={{ fontSize: "25px" }}>
            Benefits Of Associating With Driver Logistics,
            <br />
            <span style={{ color: "#c62028", fontSize: "25px" }}>
              {" "}
              3PL Company In India{" "}
            </span>
          </span>
        </h2>
        <ServicesCommon
          title="Our Extensive Network"
          description="As your Third Party Logistics company, you can leverage our extensive network and exclusive relationships for the supply chain and logistics management of your company. 
"
          image={newAssets.extensiveNetwork}
          left
          first
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Save Unnecessary Costs"
          description="A 3PL is always the better negotiator and can get you great volume discounts which will minimize the overall cost for your company. When you partner with us, you can make a big save on transportation, warehouse space, manpower, technology etc."
          image={newAssets.unneccessoryCosts}
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Expertise And Experience"
          description="Logistics can be a complex process from time to time. As your 3PL service provider, we already have an existing team of logistics experts with an established presence and experience in the market. Opt us for a single window solution for documentation, import and export, international compliance and economic regulations etc. "
          image={newAssets.expertise}
          left
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Flexibility At Its Best"
          description="We become your omnichannel for end-to-end logistics operations for your company based on the needs and requirements. This means you can limit your investments for unutilized resources during the business is low and a chance to upscale when the business is going up"
          image={newAssets.flexibility}
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Customer Satisfaction"
          description="This is the most important reason to go for a 3PL service provider in India. We as your 3PL company ensure that your customer is heard and responded to immediately at every step of the logistics operations in a systematic and automated manner."
          image={newAssets.customerSatisfaction}
          left
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Core Business Focus"
          description="Outsourcing your logistics requirements to a third party logistics service provider is the best way to move your focus on the core business competencies. You can benefit from our expertise without affecting the internal resources. 3PL paves the way to exponential growth for businesses as it expands the brand’s presence across different marketing without having to physically expand there. 

We will take care of the warehousing, equipment, labour etc. giving a large room for growth for your businesses.
"
          image={newAssets.coreBusiness}
          last
        />
      </Fade>
      <div className="centerButton">
        <button style={{ marginTop: "60px" }} className="contact_button">
          <a href="/login">Join Now</a>
        </button>
      </div>
      <FaqSection />
      <div className="centerButton">
        <button style={{ margin: "80px 0" }} className="contact_button">
          <a href="/login">Join Now</a>
        </button>
      </div>
      <Fade bottom>
        <FooterTopBox />
      </Fade>
    </div>
  );
}

export default ServiceMain;
