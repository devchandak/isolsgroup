import React from "react";
import "./GetinTouch.css";
import { FaArrowRight } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaMobileRetro } from "react-icons/fa6";


const GetInTouch = () => {
  return (
    <div className="top-footer">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-12 gett" style={{ textAlign: "center", padding: "12px 2px 36px" }} >
            <h2
              className="heading-line line-right customColor customPseudoElBg wow fadeIn"
              style={{ fontSize: "40px", visibility: "visible", animationName: "fadeIn" }} >
              <strong>Get In Touch</strong>
            </h2>
          </div>

          <div className="col-xs-12 col-sm-6">
            <div
              className="b-mod-heading wow fadeInDown"
              style={{ padding: "17px 0px 18px", visibility: "visible", animationName: "fadeInDown" }}
            >
              <div className="col-xs-12 col-sm-12" style={{ paddingLeft: 0 }}>
                <div className="b-footer-right-side">
                  <div className="b-footer-contacts" style={{ marginLeft: 0 }}>
                    <div className="footer-contacts-item">
                      <h6 className="contacts-item-title" style={{ color: "#000" }}>
                        Head Office
                      </h6>
                      <p style={{ color: "#000" }}>
                        Plot No. 698, Sector 45, Gurugram, Haryana 122003, India
                      </p>
                      <a
                        href="https://www.google.com/maps/place/ISOLS+GROUP"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ff9600", fontWeight: 400 }}
                      >
                        Click Here To Get The Google Direction
                      </a>
                    </div>
                    <div className="footer-contacts-item">
                      <h6 className="contacts-item-title" style={{ color: "#000" }}>
                        Branch Office
                      </h6>
                      <p style={{ color: "#000" }}>
                        83 Elgin Drive, Brampton, Ontario: L6Y1A9, Canada
                      </p>
                      <a
                        href="https://www.google.com/maps/place/ISOLS+GROUP+CANADA+INC"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ff9600", fontWeight: 400 }}
                      >
                        Click Here To Get The Google Direction
                      </a>
                    </div>
                    <div className="footer-contacts-item">
                      <h6 className="contacts-item-title" style={{ color: "#000" }}>
                        Email
                      </h6>
                      <p>
                        <a style={{ color: "#000" }} href="mailto:info@isolsgroup.com">
                          info@isolsgroup.com
                        </a>
                      </p>
                    </div>
                    <div className="footer-contacts-item">
                      <h6 className="contacts-item-title" style={{ color: "#000" }}>
                        Phone
                      </h6>
                      <p style={{ color: "#000" }}>
                        <a style={{ color: "#000" }} href="tel:+919555411411">
                        <FaMobileRetro />
                        +91-9555-411-411
                        </a>{" "}
                        (India)
                        <br />
                        <a style={{ color: "#000" }} href="tel:+14373768000">
                        <FaWhatsapp /> +1(437) 376 8000
                        </a>{" "}
                        (US/Canada/Mexico)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 wow slideInLeft text-inverse" style={{ visibility: "visible", animationName: "slideInLeft" }}>
            <div className="flowlu-form" is_init="true">
              <input type="hidden" name="manager_id" value="" />
              <input type="hidden" name="url" value="https://www.isolsgroup.com/" />
              <input type="hidden" name="pipeline_id" value="14" />
              <input type="hidden" name="source_id" value="36" />
              <input type="hidden" name="name" value="New Get in Touch Request Received | ISOLS Group Website | Home Page" />
              <input type="hidden" id="flowlu_host" value="https://erp.isolsgroup.com/" />
              <textarea name="nspm" style={{ display: "none" }}></textarea>
              <div className="flowlu-row d-flex column-gap-20">
                <input type="text" required id="flowlu_contact_name" placeholder="Your Name*" name="contact_name" className="flowlu-input" />
                <input type="text" required id="flowlu_contact_email" placeholder="Email Address*" name="contact_email" className="flowlu-input" />
              </div>
              <div className="flowlu-row">
                <input type="text" required id="flowlu_contact_phone" placeholder="Mobile*" name="contact_phone" className="flowlu-input" />
                <input type="text" id="flowlu_contact_website" placeholder="Your Website" name="contact_website" className="flowlu-input" />
                <textarea id="flowlu_description" rows="5" name="description" placeholder="Type Your Query" className="flowlu-input"></textarea>
              </div>
              <div className="flowlu-row flowlu-row-submit">
                <button className="flowlu-submit btn-default-arrow">
                  <FaArrowRight /> Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
