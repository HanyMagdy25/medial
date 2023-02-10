import React from "react";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4 mt-3">
            <p className="text-center ">
              Badaro, Horsh Kfoury, Hauchar Bldg, F7 Beirut - Lebanon
            </p>
          </div>
          <div className="col-12 col-lg-4 mt-3">
            <p className="text-center ">+961 3 902623</p>
            <p className="text-center ">info@medi-afric.com</p>
          </div>
          <div className="col-12 col-lg-4 mt-3">
            <div className="d-flex justify-content-around">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon flex-center"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon flex-center"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon flex-center"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="footer__icon flex-center"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
