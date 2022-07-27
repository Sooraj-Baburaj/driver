import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServiceWareHouseImg } from "../../assets/images";

const ServicesCommon = ({ title, description, image, left }) => {
  return (
    <>
      <div className="secondbox wow fadeInUp" data-wow-delay="1s">
        <div className={`row ${left ? "row_reverse_new" : ""}`}>
          <div className="col-md-6 new_class_one">
            <div
              className={`careers_map_contantbox_${
                !left ? "left" : "right_one"
              }`}
            >
              <img alt="" src={image} />
            </div>
          </div>

          <div className="col-md-6 new_class_one">
            <div
              className={`careers_map_contantbox_${
                left ? "left_one" : "right"
              }`}
            >
              <h2>{title}</h2>

              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCommon;
