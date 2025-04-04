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
    title: "WEBSITE PAYMENT GATEWAY",
    icon: "/images/services/idp-icons.png",
    description:
      "Personalised Payment Gateway fully integrated on business's official website with a 3 click simple payment mechanism.",
    animation: "fadeInDown",
  },
  {
    title: "SUBSCRIPTION PAYMENT MODULE",
    icon: "/images/services/bw-payment-scheduled1.png",
    description:
      "Hassle free automation of payments for subsciption based products from end customer in a simple & secure way.",
    animation: "fadeInDown",
  },
  {
    title: "SPLIT PAYMENT SYSTEM",
    icon: "/images/services/split-payment1.png",
    description:
      "Automate the split payment mechanism to trasnfer hassle free money to your bsuiness partners. Suitable for aggregators.",
    animation: "slideInRight",
  },
  {
    title: "BRAND'S PERSONALISED APP",
    icon: "/images/services/4920565931.png",
    description:
      "Your customers can pay you from your own official mobile app using any mode: credit card, debit card, wallets, UPI, etc.",
    animation: "slideInLeft",
  },
  {
    title: "PAYMENT LINKS",
    icon: "/images/services/payment-link1.png",
    description:
      "Generate on-demand payment link with two simple clicks and send it to specific customer for payment.",
    animation: "fadeInUp",
  },
  {
    title: "INVOICE CREATION & PAYMENTS",
    icon: "/images/services/invoices_paylink.jpg",
    description:
      "Create personalised GST invoices for customers with an integrated payment button onto the invoice.",
    animation: "slideInRight",
  },
];

const DigitalPaymentsSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Digital Payments" 
        backgroundImage="/images/breadcrumbs/dp-header.jpg" 
      />
 <section className="about-section section-home-secondary1 pb-2">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">DP</span>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Digitalise Business payments via</p>
              <h1 className="heading-line">
                <strong>India Digital Pay</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
              India Digital Pay is an initiative of Innovative Solution Technologies under ISOLS Group to revolunarise the SMEs and unorganised businesses by digitalising their payments - Say Yes to Digital Payments & Go Cashless.</p>
             
            </div>
            <div className="about-description">
                <br></br>
              <p>
              The digital payment solution has been developed by Innovative Solution Technologies | ISOLS Group in association with two payment gateway partners: Razorpay & Airpay. India Digital Pay focuses on streamlining the payments of unorganised business verticals by providing the end user with a highly user friendly payment system via business's official mobile app or web app.</p>
             
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
          <p>about online digital payment system offered by India Digital Pay an initiative of Innovative Solution Technologies - A technology wing of ISOLS Group</p>
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

export default DigitalPaymentsSolution;
