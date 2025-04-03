import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";


const clientfeeback = [
  {
    img: "/images/testimonials/dummy.png",
    name: "Taran Jyot Singh",
    quote:
      "It was an amazing experience with Sawan jain sir. He helped me a lot with my queries and setting up my payment link at Razorpay. Also he was always available to help me out anytime I ask him for. It was pleasure to seek your help sir."
  },
  {
    img: "/images/testimonials/dummy.png",
    name: "Sunil kumar",
    quote:
      "I am thrilled to have such a terrific group and I thank Mr Sawan Jain for being truly honest in completing my project in time. Your dedication & diligence are unmatchable. Thank you for giving us your best & wish you all the best for your future endeavours.With deep appreciation for your great efforts and look forward to working with you on many future projects. I thank Mr Jitender for his support. Thank you for doing a great job ! Truly Incredible !!"
  },
  {
    img: "/images/testimonials/dummy.png",
    name: "JMIT College",
    quote:
      "Working with ISOLS GROUP has been a great experience. Perfect company if you are looking for a quality, reliable and hi end solutions for all your software needs, web & cloud based needs and digital marketing requirement to leverage your organization in an effective manners. They have run a very effective lead generation program for our b-tech and mba wing and also managing our overall presence on the internet."
  },
  {
    img: "/images/testimonials/dummy.png",
    name: "Shreya Agarwal",
    quote:
      "I am thrilled to have such a terrific group and I thank Mr Sawan Jain for being truly honest in completing my project in time. Your dedication & diligence are unmatchable. Thank you for giving us your best & wish you all the best for your future endeavours.With deep appreciation for your great efforts and look forward to working with you on many future projects. I thank Mr Jitender for his support. Thank you for doing a great job ! Truly Incredible !!"
  },
 
];

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="clientfeedback">
      <div className="container">
        <div className="row b-member-info">
          <div className="col-xs-12 col-sm-3">
            <div className="b-mod-heading">
              <p className="first-heading font-secondary member-prof">Clients' </p>
              <h4 className="heading-line line-right customColor customPseudoElBg member-name">
                <strong>Feedback</strong>
              </h4>
            </div>
          </div>
          <div className="col-xs-12 col-sm-9">
            <div className="b-member-caption">
              <h6 className="contact-info-title customPseudoElBg font-secondary">
                Our satisfaction is directly proportional to client happiness
              </h6>
              <p>ISOLS Group has been awarded as the Best Technology and Digital Company 2021 Award by Topgallant Media.</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <Slider {...settings}>
              {clientfeeback.map((testimonial, index) => (
                <div key={index} className="clientfed">
                
                  <div className="clientdesc">
                  <span><FaQuoteLeft /> </span>
                    <p >{testimonial.quote}</p>
              
                  </div>
                  <div className="clientquote">
                    <img src={testimonial.img} alt={testimonial.name} width="100px" height="100px" />
                    <p className="quote-client">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
