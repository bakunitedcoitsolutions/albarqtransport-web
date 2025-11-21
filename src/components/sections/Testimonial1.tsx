"use client";
import { thmSecondary } from "@/utils";
// import "swiper/css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { en as enTranslations, ar as arTranslations } from "@/locales";

const getSwiperOptions = (isRTL: boolean) => ({
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  dir: isRTL ? "rtl" : "ltr",
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
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

export default function Testimonial1() {
  const { isRTL, t, language } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);
  const translations = language === "ar" ? arTranslations : enTranslations;
  const testimonials = (translations.testimonial?.testimonials || []) as Array<{
    text: string;
  }>;
  return (
    <>
      <section className="testimonial-section fix section-padding section-bg">
        <div className="arrow-shape float-bob-y rtl:scale-x-[-1]! rtl:right-0! rtl:left-[unset]!">
          <img src="/assets/img/testimonial/arrow-shape.png" alt="img" />
        </div>
        <div className="building-shape float-bob-x rtl:right-0! rtl:left-[unset]">
          <img src="/assets/img/testimonial/building-shape.png" alt="img" />
        </div>
        <div className="testimonial-image rtl:left-0! rtl:right-[unset]!">
          <img src="/assets/img/albarq/testimonial-sidebar.jpg" alt="img" />
        </div>
        <div className="container">
          <div className="testimonial-wrapper">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="testimonial-content">
                  <div className="section-title">
                    <PreHeader text={t("testimonial.preHeader")} />
                    <h2
                      className="text-white wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
                      data-wow-delay=".2s"
                    >
                      {t("testimonial.title")}
                    </h2>
                  </div>
                  <div className="swiper testimonial-slider mt-3 mt-md-0">
                    <Swiper
                      key={isRTL ? "rtl" : "ltr"}
                      {...swiperOptions}
                      className="swiper-wrapper"
                    >
                      {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <div className="testi-content">
                            <div className="icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={32}
                                height={32}
                                viewBox="0 0 32 32"
                                fill="none"
                              >
                                <path
                                  d="M0 4V28L12 16V4H0Z"
                                  fill={thmSecondary}
                                />
                                <path
                                  d="M20 4V28L32 16V4H20Z"
                                  fill={thmSecondary}
                                />
                              </svg>
                              <h4 className="rtl:text-xl! rtl:md:text-3xl!">
                                {testimonial.text}
                              </h4>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  {/* <div className="client-img-items">
                    <div className="client-image-area">
                      <div className="client-img">
                        <img
                          src="/assets/img/testimonial/client-1.png"
                          alt="img"
                        />
                      </div>
                      <div className="client-img">
                        <img
                          src="/assets/img/testimonial/client-2.png"
                          alt="img"
                        />
                      </div>
                      <div className="client-img">
                        <img
                          src="/assets/img/testimonial/client-3.png"
                          alt="img"
                        />
                      </div>
                    </div>
                    <div className="array-button">
                      <button className="array-prev h1p">
                        <i className="fa-solid fa-arrow-left-long" />
                      </button>
                      <button className="array-next h1n">
                        <i className="fa-solid fa-arrow-right-long" />
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
