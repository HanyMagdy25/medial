import React from "react";
import Layout from "../../components/Layout";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import ContactForm from "../../components/ContactForm/ContactForm";
const Index = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col col-lg-10 offset-lg-1">
              <div className="office-info">
                <div className="row">
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon flex-center">
                        <span className="flex-center">
                          <IoLocationOutline />
                        </span>
                      </div>
                      <div className="office-info-text">
                        <h2>Address</h2>
                        <p>7 Green Lake Street Crawfordsville, IN 47933</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon flex-center">
                        <span className="flex-center">
                          <HiOutlineMail />
                        </span>
                      </div>
                      <div className="office-info-text">
                        <h2>Email Us</h2>
                        <p>helloyou@gmail.com</p>
                        <p>helloyou@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                    <div className="office-info-item">
                      <div className="office-info-icon flex-center">
                        <span className="flex-center">
                          <BsTelephone />
                        </span>
                      </div>
                      <div className="office-info-text">
                        <h2>Call Now</h2>
                        <p>+1 800 123 654 987</p>
                        <p>+1 800 123 654 987</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-title">
                <h2>Have Any Question?</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
