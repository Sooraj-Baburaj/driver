import Fade from "react-reveal/Fade";
import ClienteleBanner from "../clientele/ClienteleBanner";
import { FooterTopBox } from "../common";
import ServiceContent from "../services/ServiceContent";
import newAssets from "../../newAssets/newAssets";
import ServicesCommon from "../services/common";
import FaqSection from "../home/Faq";

const ServicesTwo = () => {
  return (
    <div>
      <Fade bottom>
        <ClienteleBanner />
      </Fade>
      <Fade bottom>
        <ServiceContent />
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
          title="Tremendous Cost Reductionk"
          description="With Driver Drop, you only pay for the space you occupy to transport your freight. The rest of the portion's cost will be paid by other fright shippers occupying the remaining part, saving you a tremendous cost that otherwise will be spent unnecessarily. "
          image={newAssets.CostReduction}
          left
          first
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Safe & Secure Transportation"
          description="As an established 3PL service provider in India, we already comply with all the necessary measures for safely and securely transporting your freights. By choosing LTL with us, you can avail yourself of it without any hustle."
          image={newAssets.safeAndSecure}
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title=" Live Tracking & Visibility"
          description="We give you complete control over the entire process of transportation of your freights from the point of pick up to the end of the drop with 360-degree visibility. Our innovative technologies and cloud-based tracking softwares enable live tracking facilities for you."
          image={newAssets.liveTracking}
          left
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="E-Commerce & Small Business Friendly"
          description="LTL has become a necessity for ecommerce and small business owners due to its possibility to deliver goods in a time-bound manner at a reduced cost. They choose the Less than truckload freight shipping method as it compliments their business's dynamic nature most effectively."
          image={newAssets.eCom}
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Established TMS"
          description="Driver Drop has a fast and reliable transport management system as your less-than-truckload freight service provider for small shipments. Delivery of goods to various delivery points collected from different distributors and warehouses is made easy with an established Transportation Management system provided by us. "
          image={newAssets.tms}
          left
          last
        />
      </Fade>
      <Fade bottom>
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
      </Fade>
      <Fade bottom>
        <FooterTopBox />
      </Fade>
    </div>
  );
};

export default ServicesTwo;
