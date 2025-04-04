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
    title: "DEDICATED SERVER",
    icon: "/images/services/3199bc5d6a8a9e06751ea6d898289cf9.png",
    description:
      "Enabling business success by ensuring round the clock uptime of your critical business applications & cloud resources.",
    animation: "fadeInDown",
  },
  {
    title: "CLOUD SERVER",
    icon: "/images/services/mobile-app1.png",
    description:
      "Independence in scaling up your cloud server infrastructure without any downtime. Available on-demand & instantly.",
    animation: "fadeInDown",
  },
  {
    title: "VPS SERVER",
    icon: "/images/services/web-app1.png",
    description:
      "Experience the great power of the virtual private servers. Recommended for businesses with mid level cloud applications.",
    animation: "slideInRight",
  },
  {
    title: "CLOUD CONSULTING",
    icon: "/images/services/crm.jpg",
    description:
      "Planning & implementation of a solid cloud infrastructure for the business and acting as a cloud infra backbone for them.",
    animation: "slideInLeft",
  },
  {
    title: "DOMAIN REGISTRATION",
    icon: "/images/services/custom-app.png",
    description:
      "Setting up the digital identity of the business or brand and to create a vibrant digital representative front of the business.",
    animation: "fadeInUp",
  },
  {
    title: "CLOUD SECURITY",
    icon: "/images/services/web-develpment.png",
    description:
      "Rapid advancement in the cloud era has increased the vulnerability of cloud applications and we will guard the same.",
    animation: "slideInRight",
  },
  {
    title: "CLOUD SECURITY",
    icon: "/images/services/digital-payment (1).png",
    description:
      "Rapid advancement in the cloud era has increased the vulnerability of cloud applications and we will guard the same.",
    animation: "slideInRight",
  },
  {
    title: "CLOUD SECURITY",
    icon: "/images/services/Ecommerce-Solution.png",
    description:
      "Rapid advancement in the cloud era has increased the vulnerability of cloud applications and we will guard the same.",
    animation: "slideInRight",
  },
  {
    title: "CLOUD SECURITY",
    icon: "/images/services/services_settings (1).png",
    description:
      "Rapid advancement in the cloud era has increased the vulnerability of cloud applications and we will guard the same.",
    animation: "slideInRight",
  },
];

const BusinessTechnology = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Business Technology" 
        backgroundImage="/images/breadcrumbs/bussiness-technology.jpg" 
      />
 <section className="about-section section-home-secondary1">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">BT</span>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Empowering Businesses</p>
              <h1 className="heading-line">
                <strong>Through Technology</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
              Business Technology is one of the areas of specialization of ISOLS Group developed & managed under its brand Innovative Solution Technologies.
              </p>
             
            </div>
            <div className="about-description">
              <p>
              Technology is one of the forte of ISOLS Group managed under its brand Innovative Solution Technologies. It focuses right from simple application development till business automation solution. The Company has its own technology products and solutions for various industry vertical such as Food & Restaurants, Hospitality, Medical & Healthcare, Doctors etc. Innovative Solution Technologies also offers its services for various custom software, mobile and web development requirements such as software development, website development, CRM development, mobile app development etc. The core niche of Innovative Solution Technologies is to conceptualize, develop & implement industry specific technology solution to solve the challenges of various industry verticals. Some of the technology solutions are:
              </p>
             
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="col-xs-12 col-sm-6 about-image">
            <div className="img-brd-mod wow slideInRight">
                  <div className="brd"></div>
                  <div className="img-cut">
                    <div className="cut"></div>
                    <img src="https://www.isolsgroup.com/images/header/4.png" className="img-responsive center-block" alt="Isols working" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
 <section className="section-services  pt-0 pb-5">
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
          <p>about various technology solutions & services offered by Innovative Solution Technologies - A technology wing of ISOLS Group</p>
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

export default BusinessTechnology;
