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
    title: "BACK OFFICE BPO SOLUTIONS",
    icon: "/images/services/bpo.png",
    description:
      "Tailored business process outsourcing solutions for the back office management such as; Data Entry Services, Document Digitalisation, Data Extraction Services, Data Management Services, Order Management Solutions etc.",
    animation: "fadeInDown",
  },
  {
    title: "FINANCE & ACCOUNTING SERVICES",
    icon: "/images/services/acounting.png",
    description:
      "Tailored business process services for Finance & Accounting vertical such as; Invoice Processing Services, Accounting System Helpdesk Services, Customer Database Management, Contract Management Solution etc. ",
    animation: "fadeInDown",
  },
  {
    title: "CUSTOMER SUPPORT SERVICES",
    icon: "/images/services/customer-seuport-serv.jpeg",
    description:
      " Tailored business process outsourcing solutions for company’s customer support such as; Customer Technical Support, Product Support, Product Overview or Training Support, Product Installation Support Services etc.",
    animation: "fadeInDown",
  },
  {
    title: "CUSTOMER RELATIONSHIP SERVICES",
    icon: "/images/services/customer-relatin-serv.jpeg",
    description:
      "Tailored business process outsourcing solutions for company’s customer relationship process such as; Customer Complaint Registration Services, Product Warrenty Management Services, On Call Complaint Resolution Services etc. ",
    animation: "fadeInDown",
  },
  {
    title: "ECOMMERCE SUPPORT SERVICES ",
    icon: "/images/services/ecomerce-customer-sprt.jpeg",
    description:
      " Edge cutting business process outsourcing solutions for eCommerce company such as; Order Processing Services, Image Editing & Processing Services, Customer Care Management, On call customer resolution services etc.",
    animation: "fadeInDown",
  },
  {
    title: "BUSINESS PROCESS CONSULTING ",
    icon: "/images/services/buss-prce-cons.jpeg",
    description:
      "Expert consulting for planning, implementation and execution of company's business processes that determines the winning strategy for the company and ensures trustworthy sustainable relationship with the customers. ",
    animation: "fadeInDown",
  },
];

const BusinessProcessManagement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Business Process Management" 
        backgroundImage="/images/breadcrumbs/process-management.jpg" 
      />
 <section className="about-section section-home-secondary1 pb-2">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">BPM</span>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Strategic Business Process</p>
              <h1 className="heading-line">
                <strong>Outsourcing</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
              Streamlining business process execution is the basis for the success of an organization, and we specialise in redefining your business process to take it to the zenith of success. ISOLS Group has developed strategic business process management service under its technology brand; Innovative Solution Technologies.
              </p>
             
            </div>
            <div className="about-description">
                <br></br>
              <p>
              Providing turnkey business process management solution for the company’s customer support process and customer relationship process. Redefining the management of your business process in such a way that determines the sustainability of the customer base that results to the ultimate success and continuous growth of the company. Tailored made customised business process management solution to stand by your commitments to your customers.</p>
             
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="col-xs-12 col-sm-6 about-image">
            <div className="img-brd-mod wow slideInRight">
                  <div className="brd"></div>
                  <div className="img-cut">
                    <div className="cut"></div>
                    <img src="/images/dp-side.jpg" className="img-responsive center-block" alt="Isols working" />
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
          <p>about various business process outsourcing solutions & services offered by Innovative Solution Technologies - A technology wing of ISOLS Group</p>
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

export default BusinessProcessManagement;
