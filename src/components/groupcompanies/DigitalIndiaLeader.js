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
    title: "BRANDING & VISIBILITY",
    icon: "/images/services/dilicon1.png",
    description:
      "Creating brand mileage & strong visibility strategically using smart marketing i.e. personalised digital marketing.",
    animation: "fadeInDown",
  },
  {
    title: "BUSINESS GROWTH",
    icon: "/images/services/bussiness-grow.png",
    description:
      "2x business growth with higher efficiency, less time and at best economics. An effortless, smart way to double your sales.",
    animation: "fadeInDown",
  },
  {
    title: "REPUTATION MANAGEMENT",
    icon: "/images/services/REPUTATION.png",
    description:
      "Managing & enhancing the brand's credibility online so as to establish a stronger company reputation within the market.",
    animation: "slideInRight",
  },
  {
    title: "EMAIL & SMS MARKETING",
    icon: "/images/services/smsandemail.png",
    description:
      "Robust, reliable & instant Email & SMS marketing tailored as per the need & requirement of the company.",
    animation: "slideInLeft",
  },
  {
    title: "INDUSTRY SPECIFIC SOLUTIONS",
    icon: "/images/services/INDUSTRY.jpg",
    description:
      "Personalised digital marketing solutions designed dedicatedly for specific industries as per their prevailing needs.",
    animation: "fadeInUp",
  },
  {
    title: "DIGITAL MARKETING TOOLS",
    icon: "/images/services/dilicon6.png",
    description:
      "To enhance clients and digital marketing agencies, a digital marketing toolkit has been developed for digital seekers.",
    animation: "slideInRight",
  },
];

const DigitalIndiaLeader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="DIL" 
        backgroundImage="/images/breadcrumbs/dil-header1.jpg" 
      />

 <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="b-mod-heading text-center">
              <p className="first-heading font-secondary wow fadeInDown" >
              Making Companies & Individuals Grow Digitally</p>
              <h2 className="heading-line line-right customColor customPseudoElBg wow fadeIn" >
                <strong>Digital India Leader </strong>
              </h2>
              <p  className="logomain">
                <img src="/images/about-001.png" alt="Innovative Solution Technologies logo" />
              </p>
              <p className="second-heading font-additional">
                ''Digital India Leader' is the digital marketing concern of ISOLS Group. It aims to strengthen the startups, SMEs and large enterprises digitally by increasing their online visibility, maximizing their brand's reach to their target audience, increasing their business and improvising their brand’s reputation & credibility.
                <br /><br />
                Digital India Leader has its niche specialization in designing & executing personalised digital marketing campaigns. It has industry specific digital marketing solutions & products to fulfill its respective client company's ultimate marketing objective. </p>
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

export default DigitalIndiaLeader;
