import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brands.css";

const brands = [
  { src: "/images/brand/royal.png", alt: "Royal logo" },
  { src: "/images/brand/oyo.png", alt: "Oyo logo" },
  { src: "/images/brand/ok.jpg", alt: "Ok logo" },
  { src: "/images/brand/act-8.jpg", alt: "Act logo" },
  { src: "/images/brand/pnb.webp", alt: "Pnb logo" },
  { src: "/images/brand/hyndai.webp", alt: "Hyndai logo" },
  { src: "/images/brand/kewel.jpg", alt: "Kewel logo" },
  { src: "/images/brand/vivek.png", alt: "Viveka logo" },
  { src: "/images/brand/seven.png", alt: "Seven logo" },
  { src: "/images/brand/jerry.png", alt: "Jerry client logo" },
  { src: "/images/brand/ky.jpg", alt: "Kyodo logo" },
  { src: "/images/brand/micro.png", alt: "Micro logo" },
  { src: "/images/brand/viva.png", alt: "Viva logo" },
  { src: "/images/brand/vvip.jpg", alt: "Vvip logo" },
];

const ClientsSection = () => {
  const settings = {
            slidesToShow: 8,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 3
                }
            }]
  };

  return (
    <section className="clients">
      <div className="container mx-auto px-4">
      <div className="row b-member-info">
          <div className="col-xs-12 col-sm-3">
          <div className="b-mod-heading">
            <p className="first-heading font-secondary member-prof">Brands We Are</p>
            <h4 className="heading-line line-right customColor customPseudoElBg member-name" >
            <strong>Empowering</strong>
            </h4>
		  </div>
          </div>
          <div className="col-xs-12 col-sm-9">
           <div className="b-member-caption">
                <h6 className="contact-info-title customPseudoElBg font-secondary">PROUDLY EMPOWERING SUCCESSFUL BRANDS</h6>
                <p>Helping Startups, SMBs & Large Enterprise brands globally!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mx-auto mt-8">
        <Slider {...settings}>
          {brands.map((brand, index) => (
          
              <img src={brand.src} alt={brand.alt} className="w-full h-auto object-contain" loading="lazy" />
            
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ClientsSection;
