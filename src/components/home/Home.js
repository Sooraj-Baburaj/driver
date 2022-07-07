import React from "react";
import ConstructionService from "./ConstructionService";
import DigitisationService from "./DigitisationService";
import FleetTransportService from "./FleetTransportService";
import FaqSection from "./Faq";
import Hero from "./Hero";
import LatestFromBlogs from "./LatestFromBlogs";
import LogoSection from "./LogoSection";
import Testimonial from "./Testimonial";
import WhareHouseService from "./WhareHouseService";
import Fade from "react-reveal/Fade";
import Counter from "./Counter";
import handleViewport from "react-in-viewport";
import { Grid } from "@material-ui/core";
const ViewportBlock = handleViewport(Counter /** options: {}, config: {} **/);
const Home = () => {
  return (
    <div>
      <Fade bottom>
        <Hero />
      </Fade>
      <LogoSection />
      <Fade bottom></Fade>
      <Fade bottom>
        <ViewportBlock />
      </Fade>
      <Fade bottom>
        <WhareHouseService />
      </Fade>
      <Fade bottom>
        <FleetTransportService />
      </Fade>
      <Fade bottom>
        <ConstructionService />
      </Fade>
      <Fade bottom>
        <DigitisationService />
      </Fade>
      <Fade bottom>
        <FaqSection />
      </Fade>
      <Fade bottom>
        <Testimonial />
      </Fade>
      <div class="clearfix"></div>
      {/* <Fade bottom>
                <LatestFromBlogs />
            </Fade> */}
    </div>
  );
};

export default Home;
