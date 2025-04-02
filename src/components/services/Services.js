import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Business Technology",
    description:
      "Business Technology is one of the areas of specialization of ISOLS Group developed & managed under its brand Innovative Solution Technologies.",
    imgSrc:
      "https://www.isolsgroup.com/images/solution-icons/3199bc5d6a8a9e06751ea6d898289cf9.webp",
    link: "#",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital Marketing is one of the primary offshoots of ISOLS Group managed under its brand Digital India Leader.",
    imgSrc: "https://www.isolsgroup.com/images/marketing.png",
    link: "#",
  },
  {
    title: "Digital Payments",
    description:
      "India Digital Pay is an initiative of Innovative Solution Technologies under ISOLS Group to revolutionize SMEs and unorganized businesses.",
    imgSrc:
      "https://www.isolsgroup.com/images/solution-services-icons/digital-payment.png",
    link: "#",
  },
  {
    title: "Business Process Management",
    description:
      "Streamlining business process execution is the basis for the success of an organization, and we specialize in redefining your business process to take it to the zenith of success.",
    imgSrc: "https://www.isolsgroup.com/images/process.png",
    link: "#",
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Robust Cloud Server Infra is the backbone for the online success of the venture. BookYouOnline.com, one of the wings of ISOLS Group specializes in the same.",
    imgSrc: "https://www.isolsgroup.com/images/cloud.png",
    link: "#",
  },
  {
    title: "Tech Digital Consulting",
    description:
      "Setting up the robust & reliable in-house tech and digital ecosystem is the demand of every large enterprise, and we have the code of conduct to fulfill their demands.",
    imgSrc:
      "https://www.isolsgroup.com/images/group-icon/ist-favicon_old.webp",
    link: "#",
  },
];

const Services = () => {
  return (
    <section className="b-home-services">
      <div className="container">
        <div className="row b-member-info">
          <div className="col-xs-12 col-sm-3">
          <div className="b-mod-heading">
																	<p className="first-heading font-secondary member-prof">Solution &amp;</p>
																	<h4 className="heading-line line-right customColor customPseudoElBg member-name" >
																		<strong>Services</strong>
																	</h4>
																	
																</div>
          </div>
          <div className="col-xs-12 col-sm-9">
          <div className="b-member-caption">
																	<h6 className="contact-info-title customPseudoElBg font-secondary">We are one-stop your technology &amp; digital partner</h6>
																	<p>Providing Products, Solutions &amp; Services in Technology, Digital Marketing, Analytics &amp; AI</p>
																	</div>
          </div>
        </div>
       
        </div>
        <div className="container-fluid">
        <div className="b-services-holder row">
        
          {servicesData.map((service, index) => (
              <div className="col-xs-12 col-sm-4">
            <a href={service.link} key={index} className="service-card">
              <div className="b-services-item">
              <div className="service-icon">
                <img src={service.imgSrc} alt={service.title} />
              </div>
              <div className="services-text">
                <h3 class="services-title customColor customPseudoElBg font-secondary text-uppercase">{service.title}</h3>
                <p>{service.description}</p>
              </div>
              </div>
            </a>
              </div>
          ))}
        
        </div>
        </div>
    </section>
  );
};

export default Services;
