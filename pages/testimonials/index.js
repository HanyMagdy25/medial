import Layout from "../../components/Layout";

import testi1 from "../../assets/testi1.jpg";
import testi2 from "../../assets/testi2.jpg";
import Image from "next/image";
import TestimonialsComponent from "../../components/TestimonialsComponent/TestimonialsComponent";

const testimonials = () => {
  return (
    <Layout>
      <div className="testimonials-section">
        <div className="container">
          <TestimonialsComponent />
          <TestimonialsComponent />
          <TestimonialsComponent />
          <TestimonialsComponent />
        </div>
      </div>
    </Layout>
  );
};

export default testimonials;
