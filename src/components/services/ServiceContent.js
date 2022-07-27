import newAssets from "../../newAssets/newAssets";

const ServiceContent = () => {
  return (
    <div style={{ margin: "60px 0" }} className="service_contantbox_outer">
      <h2 className="background" style={{ width: "60%", margin: "auto" }}>
        <span style={{ fontSize: "30px" }}>
          join The Prestigious Clientele That Chose Us As Their Trusted 3PL
          Provider
        </span>
      </h2>
      <div className="mission_section no_after">
        <p>
          We assist businesses to integrate the right tools to give them
          accurate business intelligence & insights for predictive planning and
          optimisation of their supply chain with third party logistics
          solutions.
        </p>
      </div>
      <div className="logos">
        <img src={newAssets.logos} alt="Partner" />
      </div>
    </div>
  );
};

export default ServiceContent;
