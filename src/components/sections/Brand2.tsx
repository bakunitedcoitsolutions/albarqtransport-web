"use client";

// import "swiper/css"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};

export default function Brand2() {
  return (
    <>
      <div className="brand-section fix section-padding">
        <div className="container">
          <div className="swiper brand-slider">
            <Swiper {...swiperOptions} className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="brand-image center">
                  <img src="/assets/img/brand/brand-logo.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="brand-image center">
                  <img src="/assets/img/brand/brand-logo-2.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="brand-image center">
                  <img src="/assets/img/brand/brand-logo-3.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="brand-image center">
                  <img src="/assets/img/brand/brand-logo-4.png" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="brand-image center">
                  <img src="/assets/img/brand/brand-logo-5.png" alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
