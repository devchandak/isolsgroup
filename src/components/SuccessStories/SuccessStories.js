import React, { useEffect } from "react";
import $ from "jquery";
import "./jquery.magnific-popup.js";
import "./jquery.magnific-popup.min.js";
import "./magnific-popup.css";
import "./SuccessStories.css";

const VideoTestimonials = () => {
  useEffect(() => {
    $(".popup-video").magnificPopup({
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  }, []);

  const videos = [
    { id: "ofWi6TePZQo", thumbnail: "/images/success/mqdefault.jpg" },
    { id: "Hfh01auRGAw", thumbnail: "/images/success/mqdefault2.jpg" },
    { id: "q7oQOlp3oow", thumbnail: "/images/success/mqdefault.jpg" },
  ];

  return (
    <div className="video successstories">
      
        <div className="row">
          {videos.map((video) => (
            <div key={video.id} className="col-xs-4 col-sm-4 ">
                <div className="successvideo">
              <img src={video.thumbnail} alt="testimonial image" className=" w-full" />
              <div className="youtubebtn">
                <a href={`https://www.youtube.com/watch?v=${video.id}`} className="popup-video inline-block">
                  <img
                    src="https://www.isolsgroup.com/images/yt.png"
                    alt="Play Video"
                    className="w-16 h-16 mx-auto mt-2 cursor-pointer"
                  />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default VideoTestimonials;
