"use client";
// import "swiper/css";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

export default function Service1() {
  return (
    <>
      <section
        className="service-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
      >
        <div className="container">
          <div className="section-title text-center">
            <h6 className="wow fadeInUp text-theme2!">
              <i className="fa-regular fa-arrow-left-long" />
              WHAT WE Do
              <i className="fa-regular fa-arrow-right-long" />
            </h6>
            <h2 className="wow fadeInUp text-white" data-wow-delay=".2s">
              We Offers Cost Efficient
              <br />
              Transport Shipping
            </h2>
          </div>
          <div className="array-button">
            <button className="array-prev h1p">
              <i className="fa-regular fa-arrow-left-long" />
            </button>
            <button className="array-next h1n">
              <i className="fa-regular fa-arrow-right-long" />
            </button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="swiper service-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              {Array.from({ length: 8 }).map((_, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="service-box-items">
                    <div className="service-thumb">
                      <img src="/assets/img/service/01.jpg" alt="img" />
                      <div className="icon">
                        <i className="fa-regular fa-truck-fast" />
                      </div>
                    </div>
                    <div className="service-content">
                      <h2 className="number">{index + 1}</h2>
                      <h3>
                        <Link href="/service-details">Road Fright</Link>
                      </h3>
                      <p className="text-black!">
                        Consectetur Phasellus a odio vel sapien pharetra
                        placerat.
                      </p>
                      <Link href="/service-details" className="link-btn">
                        Explore More <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
