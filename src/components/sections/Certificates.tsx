"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

import { ALL_CERTIFICATES } from "@/utils";
import PreHeader from "../elements/PreHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const getSwiperOptions = (isRTL: boolean) => ({
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 2500,
  loop: true,
  dir: isRTL ? "rtl" : "ltr",

  // Navigation
  navigation: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

export default function Certificates() {
  const { isRTL, t } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);

  return (
    <>
      <section
        className="faq-section fix section-padding section-bg-2 bg-cover"
        style={{ backgroundImage: 'url("assets/img/faq/bg-shape.png")' }}
      >
        <div className="container text-center">
          <div className="section-title">
            <PreHeader text={t("certificates.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-4xl! rtl:md:text-5xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
            >
              {t("certificates.title")}
            </h2>
          </div>
        </div>
        <div className="container">
          <div className="swiper certificate-slider">
            <Swiper
              key={isRTL ? "rtl" : "ltr"}
              {...swiperOptions}
              className="swiper-wrapper"
            >
              {ALL_CERTIFICATES.map((cert: any) => (
                <SwiperSlide key={cert.id} className="swiper-slide">
                  <div className="certificate-item">
                    <img
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <div className="certificate-overlay"></div>
                    <div className="certificate-icon-wrapper">
                      <Link href={cert.link} target="_blank">
                        <i className="fa-solid fa-link"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-10! flex! justify-center! items-center!">
              <Link
                href="/certifications"
                className="theme-btn rtl:text-xl! rtl:md:text-2xl!"
              >
                {t("certificates.viewAllCertificates")}
                <i
                  className={`fas fa-long-arrow-right rtl:rotate-180! rtl:mr-3!`}
                />
              </Link>
            </div>
            {/* <div className="swiper-pagination"></div> */}
          </div>
        </div>
      </section>
    </>
  );
}
