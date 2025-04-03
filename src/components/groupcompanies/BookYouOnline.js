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
    icon: "/images/services/dedicated-server.jpg",
    description:
      "Enabling business success by ensuring round the clock uptime of your critical business applications & cloud resources.",
    animation: "fadeInDown",
  },
  {
    title: "CLOUD SERVER",
    icon: "/images/services/cloud-server.png",
    description:
      "Independence in scaling up your cloud server infrastructure without any downtime. Available on-demand & instantly.",
    animation: "fadeInDown",
  },
  {
    title: "VPS SERVER",
    icon: "/images/services/vps-server.jpg",
    description:
      "Experience the great power of the virtual private servers. Recommended for businesses with mid level cloud applications.",
    animation: "slideInRight",
  },
  {
    title: "CLOUD CONSULTING",
    icon: "/images/services/cloud-support.png",
    description:
      "Planning & implementation of a solid cloud infrastructure for the business and acting as a cloud infra backbone for them.",
    animation: "slideInLeft",
  },
  {
    title: "DOMAIN REGISTRATION",
    icon: "/images/services/domain-registration.png",
    description:
      "Setting up the digital identity of the business or brand and to create a vibrant digital representative front of the business.",
    animation: "fadeInUp",
  },
  {
    title: "CLOUD SECURITY",
    icon: "/images/services/cloud-security.png",
    description:
      "Rapid advancement in the cloud era has increased the vulnerability of cloud applications and we will guard the same.",
    animation: "slideInRight",
  },
];

const BookYouOnline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Book You Online" 
        backgroundImage="/images/breadcrumbs/byo.jpg" 
      />

 <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="b-mod-heading text-center">
              <p className="first-heading font-secondary wow fadeInDown" >
              Making Businesses & Organisations Go Digital
              </p>
              <h2 className="heading-line line-right customColor customPseudoElBg wow fadeIn" >
                <strong>Book You Online</strong>
              </h2>
              <p  className="logomain">
                <img src="/images/services/bookyouonline-logo.gif" alt="Book You Online" />
              </p>
              <p className="second-heading font-additional">
              ‘Book You Online’ is the digital infrastructure concern of ISOLS Group providing cloud infrastructure and digital access & mobility. It aims to strengthen the digital ecosystem of startups, SMEs & MNCs by providing a strong and dedicated cloud server infrastructure so as to determine the digital success of the business/organization. BookYouOnline.com gives a quick, easy, robust & economical way to start and establish a business, organization or brand identity on the internet.<br /><br />
                </p>
            </div>
          </div>
        </div>

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
        <div className="aboutt">
          <Link to="/award-certifications" className="btn btn-default-arrow btn-sm">
          <FaArrowRight />
            Explore More
          </Link>
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

export default BookYouOnline;
