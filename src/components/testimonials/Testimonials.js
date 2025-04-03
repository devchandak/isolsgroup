import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonials = [
  {
    img: "/images/testimonials/p.l.chugh.jpg",
    name: "P L Chugh, Chairman",
    quote:
      "Our aim behind ISOLS Group is to run an ever-growing & shining eco-system that can create a good name & credibility with clients and aid its company members with overall well-being. Also, more and more people should keep on becoming part of the ISOLS family."
  },
  {
    img: "/images/testimonials/ujjwal-chugh.jpg",
    name: "Dr. Ujjwal Chugh, Founder",
    quote:
      "Live according to Newton's third law; Work for the success of others and you will automatically become successful."
  },
  {
    img: "/images/testimonials/amit-kumar.jpg",
    name: "Amit Kumar, Head Technology Operations",
    quote:
      "Technology is one of the biggest boons to human beings and has played a very important role in our overall evolution. We have been creating, implementing & innovating technology to empower businesses and organizational processes."
  },
  {
    img: "/images/testimonials/sagar.jpg",
    name: "Sagar, President Digital Marketing (DIL)",
    quote: "Digital marketing is a reservoir of infinite possibilities and measured outcomes."
  },
  {
    img: "/images/testimonials/poonam.jpg",
    name: "Poonam Madaan, Director Marketing ISOLS Group Canada Inc",
    quote:
      "The aim is to empower businesses in Canada & USA with Technology & Digital to help them achieve growth hacking."
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 3 slides
    slidesToScroll: 0,
    vertical: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="testimonials">
        <div className="container-fluid">
            <div className="row">

           
      <div className="col-xs-4 col-sm-4 left-side">
        <div className="service-item">
          <div className="services-icon">
            <img
              src="/images/testimonials/speak-logo.png"
              alt="Isols Rising Leaders"
              width="60px"
              height="69px"
            />
          </div>
          <div className="services-text">
            <h6 className="services-title customColor customPseudoElBg font-secondary text-uppercase">ISOLIANS SPEAK - Rising Leaders</h6>
            <p>Words of wisdom that make a difference.</p>
          </div>
        </div>
      </div>
      <div className="col-xs-8 col-sm-8 right-side">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div  className="testimonial-item">
              <div className="quote-userpic">
                <img src={testimonial.img} alt={testimonial.name} width="100px" height="100px" />
              </div>
              <div className="quote-content">
                <p className="quote-text">{testimonial.quote}</p>
                <p className="quote-author">{testimonial.name}</p>
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
