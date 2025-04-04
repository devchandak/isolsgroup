import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brands.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const brands = [
  "https://www.isolsgroup.com/images/seven.png",
  "https://www.isolsgroup.com/images/client/jerry.png",
  "https://www.isolsgroup.com/images/client/ky.jpg",
  "https://www.isolsgroup.com/images/micro.png",
  "https://www.isolsgroup.com/images/viva.png",
  "https://www.isolsgroup.com/images/client/vvip.jpg",
  "https://www.isolsgroup.com/images/royal.png",
  "https://www.isolsgroup.com/images/oyo.png",
  "https://www.isolsgroup.com/images/client/ok.jpg",
  "https://www.isolsgroup.com/images/act-8.jpg",
  "https://www.isolsgroup.com/images/pnb.png",
  "https://www.isolsgroup.com/images/hyndai.png",
  "https://www.isolsgroup.com/images/client/kewel.jpg",
  "https://www.isolsgroup.com/images/client/vivek.png",
];

const BrandsSlider = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bussiness ">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h2
              style={{
                fontSize: "25px",
                color: "#ff9600",
                lineHeight: "1.2",
                textAlign: "center",
                fontFamily: "Raleway",
                fontWeight: "700",
                fontStyle: "normal",
                padding: "0 0 10px 30px",
                textTransform: "uppercase",
              }}
              className="vc_custom_heading vc_custom_1490112359046"
            >
              Brands we are empowering
            </h2>
            <Slider {...settings} className="customer-logos slider">
              {brands.map((brand, index) => (
                <div className="slide" key={index}>
                  <img src={brand} className="img-100" alt={`Brand ${index + 1}`} />
                </div>
              ))}
            </Slider>
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
  );
};

export default BrandsSlider;
