import Image from "next/image";
import React from "react";
import testi1 from "../../assets/testi1.jpg";
import testi2 from "../../assets/testi2.jpg";
const TestimonialsComponent = () => {
  return (
    <div className="testimonials__component">
      <div className="row testimonials__component__row">
        <div className="col-12 col-lg-3 testimonials__image">
          <Image src={testi1} alt="doctor-name" width="1000" height="1000" />
        </div>
        <div className="col-12 col-lg-9">
          <div className="testimonial ">
            <blockquote>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
              dolor auctor. Nulla vitae elit libero, a pharetra augue. Donec id
              elit non mi porta gravida at eget metus. Nulla vitae elit libero,
              a pharetra augue. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et.
            </blockquote>
            <div></div>
            <p>John Doe &mdash; Worcestershire, UK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsComponent;
