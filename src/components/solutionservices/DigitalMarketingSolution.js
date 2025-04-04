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
    title: "SEARCH ENGINE MARKETING",
    icon: "/images/services/sem-icon.png",
    description:
      "Edge cutting result oriented SEO solution to revolutionise your business growth via Search Engine Optimisation.",
    animation: "fadeInDown",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    icon: "/images/services/social-media-marketing.png",
    description:
      "Creating a strong & impactful voice of your organisation/business with contagious social media marketing.",
    animation: "fadeInDown",
  },
  {
    title: "CONTENT MARKETING",
    icon: "/images/services/content-marketing.png",
    description:
      "Content is the king on Internet and we are well verse in creating an award winning content for your company.",
    animation: "slideInRight",
  },
  {
    title: "VIDEO MARKETING",
    icon: "/images/services/video-marketing.png",
    description:
      "Creating an ever lasting deep impact in the minds of your perspective audience with interactive video marketing.",
    animation: "slideInLeft",
  },
  {
    title: "INFLUENCER MARKETING",
    icon: "/images/services/Influence-marketing.png",
    description:
      "Giving a mind boggling jerk to your company's visibility and business growth with influencer marketing.",
    animation: "fadeInUp",
  },
  {
    title: "VIRAL MARKETING",
    icon: "/images/services/viral-marketing.png",
    description:
      "Fulfilling the thirst of getting massive visibility & recoginition with effective viral marketing.",
    animation: "slideInRight",
  },
  {
    title: "ONLINE REPUTATION MANAGEMENT",
    icon: "/images/services/orm.png",
    description:
      "Ensuring the sustainability of your company or business by creating a strong credibility & online reputation.",
    animation: "slideInRight",
  },
  {
    title: "EMAIL MARKETING",
    icon: "/images/services/email-marketing.png",
    description:
      "Making a network of loyal customers using email marketing who loves to engage with your company whole heartedly.",
    animation: "slideInRight",
  },
  {
    title: "PAY PER CLICK",
    icon: "/images/services/payonclick.png",
    description:
      "Show your company's advertisment free of cost, only pay for it when someone is interested in your products or services.",
    animation: "slideInRight",
  },
];

const DigitalMarketingSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <BreadcrumbsHeader 
        title="Digital Marketing" 
        backgroundImage="/images/breadcrumbs/bussiness-technology1.jpg" 
      />
 <section className="about-section section-home-secondary1">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">DM</span>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Growing Businesses Via</p>
              <h1 className="heading-line">
                <strong>Digital Marketing</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
              Digital Marketing is one of the primary offshoot of ISOLS Group managed under its brand Digital India Leader.</p>
             
            </div>
            <div className="about-description">
              <p>
              It specializes in conceptualizing and implementing personalized industry specific digital marketing solutions for increasing the brand building, maximizing brand reach, increasing the business and improvising the brand reputation of startups, SMEs and MNCs. Digital India Leader has an expertise in providing 360° range of internet marketing solutions & services such as Search Engine Marketing, Social Media Marketing, Influential Marketing, Ecommerce Marketing, Lead Generation, Online Reputation Management, Drip Marketing and video marketing. The core niche of Digital India Leader lies in creating and implementing industry specific personalized digital marketing solutions so as to strengthen the various business verticals digitally. Therefore, we are one of the leading digital marketing agency in gurgaon, delhi & noida.</p>
              <p>With our result oriented quality, commitment and trust of our clients on us, we look forward to rise up as one of the best digital marketing company in India.

</p>
             
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="col-xs-12 col-sm-6 about-image">
            <div className="img-brd-mod wow slideInRight">
                  <div className="brd"></div>
                  <div className="img-cut">
                    <div className="cut"></div>
                    <img src="/images/dm-sideimage.png" className="img-responsive center-block" alt="Isols working" />
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
          <p>about various digital marketing solutions & services offered by Digital India Leader - A digital marketing wing of ISOLS Group</p>
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

export default DigitalMarketingSolution;
