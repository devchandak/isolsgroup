import React from "react";
import Header from "../components/Header";
import SliderComponent from "../components/SliderComponent";
import Services from "../components/services/Services";
import Footer from "../components/Footer";
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
              src="https://www.isolsgroup.com/images/help-1.webp"
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
      <Footer />
    </>
  );
};

export default Home;
