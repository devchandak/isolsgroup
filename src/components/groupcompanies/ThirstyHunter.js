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
    title: "ENTREPRENEURS INCUBATION",
    icon: "/images/services/entorpreer.png",
    description:
      "True passionate entrepreneurs having the conviction & dedication for becoming the reason for change are invited.",
    animation: "fadeInDown",
  },
  {
    title: "STUDENTS INCUBATION",
    icon: "/images/services/student-encub.png",
    description:
      "Students having disruptive ideas as the real problem solvers and the courage to bring a change are invited.",
    animation: "fadeInDown",
  },
  {
    title: "WORKING PROFESSIONAL INCUBATION",
    icon: "/images/services/bussiness-incubetor.png",
    description:
      "Sincere people who have taken a pledge to be less ordinary and are willing to take risks are invited.",
    animation: "slideInRight",
  },
  
];

const ThirstyHunter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Thirsty Hunter" 
        backgroundImage="/images/breadcrumbs/th.jpg" 
      />

 <section className="section-services">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="b-mod-heading text-center">
              <p className="first-heading font-secondary wow fadeInDown" >
              Giving Wings to Fly</p>
              <h2 className="heading-line line-right customColor customPseudoElBg wow fadeIn" >
                <strong>Thirsty Hunter </strong>
              </h2>
              {/* <p className="logomain">
                <img src="/images/dmc-logo.png" alt="Innovative Solution Technologies logo" />
              </p> */}
              <p className="second-heading font-additional">
              '‘Thirsty Hunter’ is a newly incepted startup incubator of ISOLS Group. Thirsty Hunter incubator has been designed in a pioneering style with the goal to promote the vibrant startup ideas that can act as a boon to the society, nation or the world. Thirsty Hunter is an umbrella for aspiring entrepreneurs working with an objective to foster entrepreneurship that helps the young minds to convert their ideas into successful and profitable ventures by supporting them in business planning, experts mentoring, commercialising their venture, getting seed funding, helping in forging partnerships at the national and global level, giving advice on intellectual property, training and development and nurturing many other aspects. It is a place for all the passionate people who carry the thirst to solve problems and make them simple.<br /><br />
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

export default ThirstyHunter;
