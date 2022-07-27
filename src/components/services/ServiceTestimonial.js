import "./services.css";
import newAssets from "../../newAssets/newAssets";

const ServiceTestimonial = () => {
  return (
    <div className="testimonial">
      <figure className="testimonialFigure">
        <img src={newAssets.apostrophe} alt="background" />
      </figure>
      <div className="content">
        <div className="profile">
          <figure>
            <img src={newAssets.profile} alt="sooraj" />
          </figure>
          <div className="profileDetails">
            <p>
              Sooraj,
              <br />
              Area Manager, <br />
              JK Tyres
            </p>
          </div>
        </div>
        <div className="profileDesc">
          <p>
            "They have ensured seamless operations. Process oriented and
            flexible and agile. In this pandemic time they have right sized the
            operations and shown the cost optimization. Being enthusiastic and
            agile their operational flexibility is their USP. Good at handling
            any seasonal spikes. They are constantly striving to serve better
            with the technology like data analytics, and ML, AI."
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceTestimonial;
