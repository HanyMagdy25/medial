import Layout from "../../components/Layout";
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
