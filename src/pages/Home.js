import React from "react";
import Header from "../components/Header";
import SliderComponent from "../components/SliderComponent";
import Services from "../components/services/Services";
import Brands from "../components/brands/Brands";
import Testimonials from "../components/testimonials/Testimonials";
import ClientFeedback from "../components/testimonials/ClientFeedback";
import SuccessStories from "../components/SuccessStories/SuccessStories";
import GetinTouch from "../components/GetinTouch";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./main.css";

const Home = () => {
  return (
    <>
      <Header />
      <SliderComponent />
      <section className="about-section">
      <div className="vertical-title hidden-md">
        <span className="vertical-text-main">ISOLS Group</span>
        <span className="vertical-text-additional">About</span>
      </div>
      <div className="container">
        <div className="row">
          {/* Left Column: Text Content */}
          <div className="col-xs-12 col-sm-6 about-content">
            <div className="heading">
              <p className="first-heading">Helping Organizations to</p>
              <h1 className="heading-line">
                <strong>Achieve Success</strong>
              </h1>
            </div>
            <div className="blockquote">
              <p className="quote-text">
                "Live on Newton's third law; Work for the success of others and
                you will automatically become successful."
              </p>
              <p className="quote-author">
                <span className="quote-icon"></span>
                <span className="author-name">Dr. Ujjwal Chugh,</span>
                <span className="author-role"> Founder & CEO</span>
              </p>
            </div>
            <div className="about-description">
              <p>
                ISOLS Group, a private limited corporation, is a pioneering
                enterprise excelling, expanding & evolving in technology and
                digital marketing solutions & product innovations. Ever since
                its inception, the group has created a legacy of delivering
                top-notch and consistent industry solutions for solving their
                problems.
              </p>
              <p>
                The group has multiple off-shoots and sister brands under
                itself. The evolution and growth of the group company & its
                brands is associated with a pool of highly passionate young
                professionals known as ISOLIANS who are bestowed with a blended
                art of creativity and experience.
              </p>
            </div>
          </div>
          {/* Right Column: Image */}
          <div className="col-xs-12 col-sm-6 about-image">
            <div className="b-cuts-img-holder">
                <div className="img-cut cut-right-top">
            <img
              src="/images/help-1.webp"
              alt="Isols group working"
              className="img-responsive center-block1"
              width="530"
              height="480"
            />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Services />
    <div className="b-home-offers ">
      <div className="container-bg-additional  ">
        <div className="b-services-bg-filter customBgColor"></div>

        <div className="vertical-title hidden-md">
          <span className="vertical-text-main color-white text-uppercase">ISOLS Group</span>
          <span className="vertical-text-additional color-white text-uppercase">Ideology</span>
        </div>

        <div className="b-featured-services">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="featured-services-left">
                  <div className="b-f-s-info">
                    <h2 className="f-s-title">3DP : Our <br></br> Work & Success <br></br> Mantra</h2>
                    <p>
                      Creating a business application, ERP application, automation solution or boosting the business via
                      digital marketing; we work with one definite approach & ideology of 3DP.
                      <br />
                      <strong>Determination | Dedication | Discipline | Perseverance</strong>
                    </p>
                    <a href="#" className="btn btn-default-arrow btn-sm">
                      <i className="bi bi-arrow-right"></i> Get in Touch
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-5">
                <div className="featured-services-right">
                <div className="b-services-slides-holder">
                  <div className="b-services-item">
															<div className="services-icon">
																<img src="/images/services/determination.png" loading="lazy" alt="Determination" width="56px" height="56px" />
															</div>
															<div className="services-text">
																<h6 className="services-title customColor customPseudoElBg font-secondary text-uppercase">
																	Determination
																</h6>
																<p>
																	Determined to explore every possibilty of technology &amp; digital domain
																	in order to engineer cutting-edge innovative products &amp; solutions.
																</p>
															</div>
														</div>
                            <div className="b-services-item">
															<div className="services-icon">
																<img src="/images/services/dedication.png" alt="Dedication" loading="lazy" width="56px" height="56px" />
															</div>
															<div className="services-text">
																<h6 className="services-title customColor customPseudoElBg font-secondary text-uppercase">
																	Dedication
																</h6>
																<p>
																	In their respective departments, ISOLIANS do work which they truly love to do
																	and that makes their commitment &amp; dedication for work like a solid rock. 															</p>
															</div>
														</div>
                            <div className="b-services-item">
															<div className="services-icon">
																<img src="/images/services/discipline.png" alt="Discipline" loading="lazy" width="56px" height="56px" />
															</div>
															<div className="services-text">
																<h6 className="services-title customColor customPseudoElBg font-secondary text-uppercase">
																	Discipline
																</h6>
																<p>
																	True discipline and self management brings our complete
																	involvement in every work that we do; be it solution development or having fun. 
																</p>
															</div>
														</div>
                            <div className="b-services-item">
															<div className="services-icon">
																<img src="/images/services/persverence.png" alt="Perseverance" loading="lazy" width="56px" height="56px" />
															</div>
															<div className="services-text">
																<h6 className="services-title customColor customPseudoElBg font-secondary text-uppercase">
																	Perseverance
																</h6>
																<p>
																	We believe in creating a life long and healthy relationship with our clients
																	because we have the perseverance to solve their problems via technology &amp; digital means.
																</p>
															</div>
														</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Brands />
    <Testimonials />
    <section className="awards-recognitions ">
    <div className="container mx-auto px-4">
      <div className="row b-member-info">
          <div className="col-xs-12 col-sm-3">
          <div className="b-mod-heading">
            <p className="first-heading font-secondary member-prof">Awards &</p>
            <h4 className="heading-line line-right customColor customPseudoElBg member-name" >
            <strong>Recognitions</strong>
            </h4>
		  </div>
          </div>
          <div className="col-xs-12 col-sm-9">
           <div className="b-member-caption">
                <h6 className="contact-info-title customPseudoElBg font-secondary">BEST TECHNOLOGY & DIGITAL COMPANY OF THE YEAR AWARD</h6>
                <p>ISOLS Group has been awarded as the Best Technology and Digital Company 2021 Award by Topgallant Media.</p>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-xs-6 col-sm-3 text-center">
            <div className="member-img">
              <img src="/images/award/isols 1.webp" className="img-responsive" loading="lazy" alt="awards" width="262px" height="260px" />
            </div>
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
            <div className="member-img">
              <img src="/images/award/award1.webp" className="img-responsive" loading="lazy" alt="awards" width="262px" height="260px" />
            </div>
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
            <div className="member-img">
              <img src="/images/award/award2.webp" className="img-responsive" loading="lazy" alt="awards" width="262px" height="260px" />
            </div>
        </div>
        <div className="col-xs-6 col-sm-3 text-center">
            <div className="member-img">
              <img src="/images/award/award3.webp" className="img-responsive" loading="lazy" alt="awards" width="262px" height="260px" />
            </div>
        </div>
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
    <ClientFeedback />
    <section className="success-stories">
    <div className="container mx-auto px-4">
      <div className="row b-member-info">
          <div className="col-xs-12 col-sm-4">
          <div className="b-mod-heading">
            <p className="first-heading font-secondary member-prof">Clients</p>
            <h4 className="heading-line line-right customColor customPseudoElBg member-name" >
            <strong>Success Stories</strong>
            </h4>
		  </div>
          </div>
          <div className="col-xs-12 col-sm-8">
           <div className="b-member-caption">
                <h6 className="contact-info-title customPseudoElBg font-secondary">WANT TO SEE YOUR BUSINESS SUCCESS STORY HERE?
                </h6>
                <p>We believe in empowering businesses technologically & help in growth hacking</p>
            </div>
          </div>
        </div>
        <SuccessStories />
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
    <div className="h-divider">
      <div className="shadow1"></div>
      <div className="text2">
        <img
          src="/images/favicon.jpeg"
          alt="Favicon"
          loading="lazy"
        />
      </div>
    </div>
    <GetinTouch />
      <Footer />
    </>
  );
};

export default Home;
