import Image from "next/image";
import React from "react";
import { featuresData } from "../../utils/data";

const Features = () => {
  return (
    <div className="features">
      <div className="container">
        <div className="row">
          {featuresData.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 features__card mb-1 mb-md-4"
            >
              <div className="features__icon">
                <span>
                  <Image src={item.image} alt={item.title} />
                </span>
              </div>
              <div className="features__content">
                <h5>{item.title}</h5>
                <p>{item.descripiton}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
