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
      "DEDICATED SERVEREnabling business success by ensuring round the clock uptime of your critical business applications & cloud resources.",
    animation: "fadeInDown",
  },
  {
    title: "CLOUD SERVER",
    icon: "/images/services/cloud-server.png",
    description:
      "Independence in scaling up your cloud server infrastructure without any downtime. Available on-demand & instantly.  ",
    animation: "fadeInDown",
  },
  {
    title: "VPS SERVER",
    icon: "/images/services/vps-server.jpg",
    description:
      "Experience the great power of the virtual private servers. Recommended for businesses with mid level cloud applications.",
    animation: "fadeInDown",
  },
  {
    title: "CLOUD CONSULTING",
    icon: "/images/services/cloud-support.png",
    description:
      "Planning & implementation of a solid cloud infrastructure for the business and acting as a cloud infra backbone for them.",
    animation: "fadeInDown",
  },
  {
    title: "DOMAIN REGISTRATION",
    icon: "/images/services/domain-registration.png",
    description:
      "Setting up the digital identity of the business or brand and to create a vibrant digital representative front of the business.",
    animation: "fadeInDown",
  },
  {
    title: "CLOUD SECURITY",
    icon: "/images/services/buss-prce-cons.jpeg",
    description:
      "Rapid advancement in the cloud era has increased the vulnerability of cloud applications and we will guard the same.",
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
        title="Cloud Infrastructure" 
        backgroundImage="/images/breadcrumbs/cloud-infra.jpg" 
      />
 <section className="about-section section-home-secondary1 pb-2">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">CI</span>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Digital Pillar</p>
              <h1 className="heading-line">
                <strong>Cloud Infra</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
              Robust Cloud Server Infra is the backbone for the online success of the venture. BookYouOnline.com, one of the wings of ISOLS Group specialises for the same.</p>
             
            </div>
            <div className="about-description">
                <br></br>
              <p className="mb-0">
              Technology and digital marketing are core solution areas of ISOLS Group managed under its brand Innovative Solution Technologies and Digital India Leader. But, with the advancement in the digital era, for determining the success of the company it has become a necessity for an organisation to have a stable, reliable & secure online server infrastructure with excellent technical support.</p>
                <p>BookYouOnline.com is a wing of ISOLS Group that deals in cloud server solutions, cloud security and other cloud solutions & services.

                </p>             
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="col-xs-12 col-sm-6 about-image">
            <div className="img-brd-mod wow slideInRight">
                  <div className="brd"></div>
                  <div className="img-cut">
                    <div className="cut"></div>
                    <img src="/images/cloud-infra-side.jpg" className="img-responsive center-block" alt="Isols working" />
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
          <p>insides on various Cloud Infra solutions offered by BookYouOnline.com an initiative by Innovative Solution Technologies - A technology wing of ISOLS Group</p>
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
