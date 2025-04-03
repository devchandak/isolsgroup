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
    title: "Business Applications",
    icon: "/images/services/business-app.png",
    description:
      "Automating business workflow with CRM & ERP solutions to simplify the work process & maximize efficiency.",
    animation: "fadeInDown",
  },
  {
    title: "Mobility Solutions",
    icon: "/images/services/mobile-solution.png",
    description:
      "iOS and Android mobile app solutions to leverage & boost organizations in the evolving mobile era.",
    animation: "fadeInDown",
  },
  {
    title: "Web Solutions",
    icon: "/images/services/web-solution.png",
    description:
      "End-to-end web solutions from website development to cloud application automation.",
    animation: "slideInRight",
  },
  {
    title: "Artificial Intelligence Solutions",
    icon: "/images/services/artificial-intelligance.png",
    description:
      "Well-engineered AI solutions providing a new dimension to business for futuristic growth.",
    animation: "slideInLeft",
  },
  {
    title: "Business Process Management",
    icon: "/images/services/bussiness-process-mng.png",
    description:
      "Efficient business process services handling technical support & customer service processes.",
    animation: "fadeInUp",
  },
  {
    title: "Industry Specific Solutions",
    icon: "/images/services/industry-solutin.png",
    description:
      "Innovative products & solutions tailored for industries like restaurants, hospitals, and manufacturing.",
    animation: "slideInRight",
  },
];

const InnovativeSolutionTechnologies = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="innovativesolutions">
      <Header />
      <BreadcrumbsHeader 
        title="Innovative Solution Technologies" 
        backgroundImage="/images/breadcrumbs/ist-header.jpg" 
      />

 <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="b-mod-heading text-center">
              <p className="first-heading font-secondary wow fadeInDown" >
                Simplifying With Technology Innovation
              </p>
              <h2 className="heading-line line-right customColor customPseudoElBg wow fadeIn" >
                <strong>Innovative Solution Technologies</strong>
              </h2>
              <p  className="logomain">
                <img src="/images/services/ist-logo-color.PNG" alt="Innovative Solution Technologies logo" />
              </p>
              <p className="second-heading font-additional">
                'Innovative Solution Technologies' is the technology concern of ISOLS Group. It aims to develop, implement & deliver end-to-end technology solutions, software solutions & web solutions such as CRM, ERP solutions, software development, web application development, business automation solutions etc. that can simplify the business process & execution.
                <br /><br />
                Innovative Solution Technologies works as a technology partner for many clients of various industry verticals for strengthening their businesses & companies technologically. Also, it has the expertise to provide business process management for companies who wish to outsource the same.
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

export default InnovativeSolutionTechnologies;
