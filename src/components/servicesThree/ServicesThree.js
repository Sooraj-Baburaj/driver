import Fade from "react-reveal/Fade";
import newAssets from "../../newAssets/newAssets";
import ServiceThreeBanner from "../blogs/BlogBanner";
import { FooterTopBox } from "../common";
import FaqSection from "../home/Faq";
import ServicesCommon from "../services/common";
import ServiceThreeContent from "./servicesThreeContent";
const ServicesThree = () => {
  return (
    <div>
      <Fade bottom>
        <ServiceThreeBanner />
      </Fade>
      <Fade bottom>
        <ServiceThreeContent />
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
          title="Lower Operating Expense"
          description="Lowering the overall operating expense is your first step towards an optimised business model, and there are no better choices than outsourcing Warehouse management and B2B fulfilment to a third-party logistics company like us. With the integration of WMS, you can save from unnecessary expenses and time with the help of our pre-built resources and expertise to provide customised solutions based on your requirements."
          image={newAssets.lowOS}
          left
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Transparency & Control"
          description="By choosing B2B fulfilment & WMS services with us, you will have complete transparency on the entire order processing and the ability to track and control the activity in real-time. 
This will help your business eliminate unfortunate negligence and prepare you to handle supply chain demands that might occur in the process. A transparent and accurate warehouse and inventory management system helps to monitor stocks, cut down on damages & returns, maintain proper inventory & in turn, increases client satisfaction.
"
          image={newAssets.control}
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Labour, Equipment And Space Efficiency"
          description="It is undebatable that the process of Warehouse management and complete B2B fulfilment requires a handful of skilled labourers in the particular field. As your trusted third-party logistics service provider, we have a strong team of well trained and specialized people taking utmost care of daily operations. It is wiser to go for third-party logistics companies with WMS and save money, rather than spend on installing equipment and buying large space for inventory management."
          image={newAssets.labourEqp}
          left
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="API & EDI Integration"
          description="Third-party logistics companies provide seamless automation tools such as API & EDI Integration for the smooth running of the warehouse as well as increase your business. In the digital era that we live in, it is almost impossible to function without adapting to new technologies to stride ahead of the competition. EDI system gives you the most error-free data with minimized labour, time and risk."
          image={newAssets.api}
        />
      </Fade>
      <Fade bottom>
        <ServicesCommon
          title="Supply Chain Optimization"
          description="A third-party logistics provider can assist you with an effective Warehouse Management system that streamlines the overall supply chain management of the company with reduced operational costs. Get the benefit of advanced WMS, TMS, and ERP solutions for Warehouse Inbound Process Management, Item allocation and assignment according to configurable rules, Inventory, Stock & Material Management, Realtime Warehouse Monitoring, Reporting & Analytics etc and strengthen your company’s supply chain system."
          image={newAssets.supplyChain}
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

export default ServicesThree;
