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
    title: "DIGITAL MARKETING FOR INDIVIDUALS",
    icon: "/images/services/dmcicon1.png",
    description:
      "Individuals with their specific areas of interest can get a way to create a visibility for their own self and can get financial freedom.",
    animation: "fadeInDown",
  },
  {
    title: "DIGITAL MARKETING FOR STARTUPS",
    icon: "/images/services/dmcicon2.png",
    description:
      "Scaling up the startup exponentially so as to create a massive visibility among target audience in less time with cost effectiveness.",
    animation: "fadeInDown",
  },
  {
    title: "DIGITAL MARKETING FOR ENTREPRENEURS",
    icon: "/images/services/dmcicon3.png",
    description:
      "Taking your problem solving capability to the people who are in need of that specific solution & giving wings to showcase your talent.",
    animation: "slideInRight",
  },
  {
    title: "DIGITAL MARKETING FOR BUSINESS OWNERS",
    icon: "/images/services/dmcicon4.jpg",
    description:
      "Smart growth of the business at a rapid rate with cost efficiency, man-power efficiency and providing a global reach with ease of access.",
    animation: "slideInLeft",
  },
  {
    title: "DIGITAL MARKETING FOR WORKING PROFESSIONALS",
    icon: "/images/services/dmcicon5.jpg",
    description:
      "Climb higher through your career ladder with a vast knowledge of strategic smart marketing i.e. digital marketing. Making professionals grow more.",
    animation: "fadeInUp",
  },
  {
    title: "DIGITAL MARKETING FOR STUDENTS",
    icon: "/images/services/services_settings.png",
    description:
      "Giving a way to the young ones for manifesting their creativity and talent to the world and helping them to make their passion as their profession.",
    animation: "slideInRight",
  },
];

const DigitalMarketingCompanion = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Digital Marketing Companion" 
        backgroundImage="/images/breadcrumbs/dmc-header-isols.jpg" 
      />

 <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="b-mod-heading text-center">
              <p className="first-heading font-secondary wow fadeInDown" >
              Empowering & strengthening individuals digitally</p>
              <h2 className="heading-line line-right customColor customPseudoElBg wow fadeIn" >
                <strong>Digital Marketing Companion </strong>
              </h2>
              <p className="logomain">
                <img src="/images/dmc-logo.png" alt="Innovative Solution Technologies logo" />
              </p>
              <p className="second-heading font-additional">
              'Digital Marketing Companion' is the digital marketing training concern of ISOLS Group. It aims to create awareness and spread knowledge of digital marketing to individuals, startups, entrepreneurs, business owners, working professionals and students who wish to present and showcase their own specialisation or talent to their respective target audience. Under this off shoot of the group company, the founder & CEO Mr. Ujjwal Chugh (acknowledged & widely known as a ‘Digital Visionary’) has been invited by hundreds of technology & management institutions, universities for creating digital awareness among thousands of youngsters and supporting many budding entrepreneurs and startups.
              <br /><br />
              Under the dynamic leadership of our founder, we have been awarded with National Gaurav Award, 2018. Thousands of people have been trained and leveraged for their careers, and we have created very strong milestones and footprints in digital marketing and are working to realise the goal & vision of our founder i.e. ‘Digital marketing is such a powerful tool that can eradicate unemployment from developing nations like India upto 90%’. Our founder has authored the very first Digital Marketing Dictionary in the world to educate business owners, working professionals and students about digital marketing. It was launched by cabinet minister & eminent personalities at the world book fair Pragati Maidan.
             </p>  </div>
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

export default DigitalMarketingCompanion;
