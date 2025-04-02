import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderComponent.css";


const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "https://www.isolsgroup.com/media/home/thirdslide.webp",
      rotateheading: "we do miracles often",
      subheading: "Leading Corporation in",
      heading: "Tech & Digital Solutions",
      description: "We love to solve industry problems using technology & digital methodologies. <br> Our motto is to empower enterprises & their business.",
      image1: "/images/logo/canada.png",
      image2: "/images/logo/in.png",
      image3: "/images/logo/us.png",
    },
    {
      id: 2,
      image: "https://www.isolsgroup.com/media/home/thirdslide.webp",
      rotateheading: "we love to innovate",
      subheading: "ISOLS",
      heading: "Intuitive Souls",
      description: "Innovate First, Rule Next... <br> A visionary sight to make an organisation smart",
      image1: "/images/logo/canada.png",
      image2: "/images/logo/in.png",    
      image3: "/images/logo/us.png",
    },
  ];

  return (
    <section className="main-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={`Slide ${slide.id}`} className="slide-img" />
            <div className="slide-content">
            <div className="roatebox1">
                <div className="roatebox">
                    <p>{slide.rotateheading}</p>
                </div>
                </div>
                <div className="sliderright">
                    <h4>{slide.subheading}</h4>
                    <h3>{slide.heading}</h3>
                    <p dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                  <div className="countrylogo">
                    <span> <img src={slide.image1}  className="countrylogo" /></span>
                    <span> <img src={slide.image2}  className="countrylogo" /></span>
                    <span> <img src={slide.image3}  className="countrylogo" /></span>
                  </div>
                </div>
              
            </div>
            <div className="slider-filter-holder">
									<div className="cutBox cut-bottom">

									</div>
					<div className="custom-filter">
					<div className="slider-icon">
                     <img src="/images/logo/slider-icon.png" alt="Logo" />
					</div>
				</div>
			</div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderComponent;
