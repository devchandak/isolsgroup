import React, { useEffect } from "react";
import BreadcrumbsHeader from "../breadcrumbs/BreadcrumbsHeader";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import Brands1 from "../brands/Brands1";
import { FaArrowRight } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";


const servicesData = [
  {
    title: "WEB CONSULTING",
    icon: "/images/services/web-consult.jpeg",
    description:
      "Expert consulting for web technologies and website development and management.",
    animation: "fadeInDown",
  },
  {
    title: "MOBILE APPS CONSULTING",
    icon: "/images/services/mobile-consult.jpeg",
    description:
      "Mobile app development or concept setting; an overall mobile technologies consulting for enterpise success.",
    animation: "fadeInDown",
  },
  {
    title: "UI / UX CONSULTING",
    icon: "/images/services/uiandux.jpeg",
    description:
      "Consulting for creating a user friendly seamless UI/UX designs that has the power to disrupt & create an impact.",
    animation: "fadeInDown",
  },
  {
    title: "OVERALL TECH CONSULTING",
    icon: "/images/services/overall-cons.jpeg",
    description:
      "Consulting for setting up the enterprise technology standards to maximise the efficiency & throughput.",
    animation: "fadeInDown",
  },
  {
    title: "DIGITAL MARKETING CONSULTING",
    icon: "/images/services/digital-mark-cons.jpeg",
    description:
      "Consulting to setup a successful result oriented online marketing campaigning strategy.",
    animation: "fadeInDown",
  },
  {
    title: "CLOUD INFRA CONSULTING",
    icon: "/images/services/cloud-mark-cons.jpeg",
    description:
      "Consulting for setting-up and managing the robust & relaible cloud server infrastructure.",
    animation: "fadeInDown",
  },
];

const CloudInfrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Tech Digital Consulting" 
        backgroundImage="/images/breadcrumbs/tech-digi-consult.jpeg" 
      />
 <section className="about-section section-home-secondary1 pb-2">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">ABOUT</span>
      </div>
      <div className="container">
        <div className="row pb-5">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Tech Digital</p>
              <h1 className="heading-line">
                <strong>Consulting</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
              Setting up the robust & reliable in-house tech and digital ecosystem is the demand of every large enterprise, and we have the code of conduct to fulfill their demands.</p>
             
            </div>
            <div className="about-description">
                <br></br>
              <p className="mb-0">
              Innovative Solution Technologies and Digital India Leader, the technology and digital marketing wing of ISOLS Group work hand-in-hand together for strategic consulting of enterprises technology & digital standards. We just don't believe in giving simple consulting services rather we monitor and scrutinize the implementation strategies of our clients. </p>
                           
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="col-xs-12 col-sm-6 about-image">
            <div className="img-brd-mod wow slideInRight">
                  <div className="brd"></div>
                  <div className="img-cut">
                    <div className="cut"></div>
                    <img src="/images/techdigital4.png" className="img-responsive center-block" alt="Isols working" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
 <section className="section-services  pt-4 pb-5">
      <div className="container">
      <div className="b-services-holder">
          <div className="row">
            {servicesData.map((service, index) => (
              <div className={`col-xs-6 col-sm-4 wow ${service.animation}`}  key={index}>
                <div className="b-services-item">
                  <div className="services-icon">
                    <img src={service.icon} alt={service.alt} />
                  </div>
                  <div className="services-text">
                    <h6 className="services-title customColor customPseudoElBg font-secondary text-uppercase">
                      {service.title}
                    </h6>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="row">
       <div className="col-md-12">
        <div className="knowmorebtn">
          <Link to="/award-certifications" className="btn btn-default-arrow btn-sm">
          <FaArrowRight />
          Know more
          </Link>
          <p>about technology &amp; digital marketing consulting by writing us an email at <a href="mailto: info@isolsgroup.com">info@isolsgroup.com</a> or <a href="tel:+919555411411">call us</a> or <a href="https://www.isolsgroup.com/contact">contact us</a></p>
        </div>
        </div>
       </div>
      </div>
    </section>
   
   <Brands1 />
      <Footer />
    </div>
  );
};

export default CloudInfrastructure;
