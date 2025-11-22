"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import PreHeader from "../elements/PreHeader";

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

  // Placeholder certificate items - replace with actual certificate data
  const allCertificates = [
    {
      id: 1,
      image: "/assets/img/albarq/certificates/cert-1.png",
      link: "/assets/pdf/01-Commercial-Registration-Certificate-Jeddah.pdf",
    },
    {
      id: 2,
      image: "/assets/img/albarq/certificates/cert-2.png",
      link: "/assets/pdf/02-Commercial-Registration-Certificate-Riyadh",
    },
    {
      id: 3,
      image: "/assets/img/albarq/certificates/cert-3.png",
      link: "/assets/pdf/03-Sagia-License-2031.pdf",
    },
    {
      id: 4,
      image: "/assets/img/albarq/certificates/cert-4.png",
      link: "/assets/pdf/04-Tasneef-Certificate.pdf",
    },
    {
      id: 5,
      image: "/assets/img/albarq/certificates/cert-5.png",
      link: "/assets/pdf/05-MUQAWIL-SCA.pdf",
    },
    {
      id: 6,
      image: "/assets/img/albarq/certificates/cert-6.png",
      link: "/assets/pdf/06-Jeddah.pdf",
    },
    {
      id: 7,
      image: "/assets/img/albarq/certificates/cert-7.png",
      link: "/assets/pdf/07-Zakat-Certificate.pdf",
    },
    {
      id: 8,
      image: "/assets/img/albarq/certificates/cert-8.png",
      link: "/assets/pdf/08-ALBARQ-VAT-Certificate-2025.pdf",
    },
    {
      id: 9,
      image: "/assets/img/albarq/certificates/cert-9.png",
      link: "/assets/pdf/09-GOSI-Certificate-Jeddah.pdf",
    },
    {
      id: 10,
      image: "/assets/img/albarq/certificates/cert-10.png",
      link: "/assets/pdf/10-GOSI-Certificate-Riyadh.pdf",
    },
    {
      id: 13,
      image: "/assets/img/albarq/certificates/cert-13.png",
      link: "/assets/pdf/13.pdf",
    },
    {
      id: 14,
      image: "/assets/img/albarq/certificates/cert-14.png",
      link: "/assets/pdf/14.pdf",
    },
    {
      id: 12,
      image: "/assets/img/albarq/certificates/cert-12.png",
      link: "/assets/pdf/12-MOMRA.pdf",
    },
    {
      id: 15,
      image: "/assets/img/albarq/certificates/cert-15.png",
      link: "/assets/pdf/15-National-Address.pdf",
    },
  ];

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
              {allCertificates.map((cert: any) => (
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
                href="/certificates"
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
