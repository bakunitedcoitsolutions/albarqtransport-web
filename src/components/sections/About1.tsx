"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";
export default function About1() {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <>
      <section className="about-section fix section-padding" id="about">
        <div className="about-shape-1 float-bob-x">
          <img src="/assets/img/about/about-shape-1.png" alt="img" />
        </div>
        <div className="about-shape-2 float-bob-x">
          <img src="/assets/img/about/about-shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <img
                    src="/assets/img/about/01.jpg"
                    alt="img"
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="/assets/img/about/02.jpg" alt="img" />
                    <div className="video-box">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-btn video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="about-line-shape">
                    <img src="/assets/img/about/about-shape-3.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <h6 className="wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long" />
                      about us
                      <i className="fa-regular fa-arrow-right-long" />
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".2s">
                      Leading Global Logistic And Transport Agency
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 text-black wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    It is a long established fact that a reader will be
                    distracted the readable content of a page when looking at
                    layout the point of using lorem the is Ipsum less normal
                    distribution of letters.
                  </p>
                  <ul className="list-items wow fadeInUp" data-wow-delay=".2s">
                    <li>
                      {" "}
                      <i className="fa-solid fa-circle-check" />
                      We will never compromise the safety of our people
                    </li>
                    <li>
                      {" "}
                      <i className="fa-solid fa-circle-check" />
                      With over four decades of experience providing solutions
                    </li>
                    <li>
                      {" "}
                      <i className="fa-solid fa-circle-check" />
                      We see projects through and proactively develop solutions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={isOpen}
        videoId="JXMWOmuR1hU"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
