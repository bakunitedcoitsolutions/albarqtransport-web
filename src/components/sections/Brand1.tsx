"use client";
// import "swiper/css"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";

const getSwiperOptions = (isRTL: boolean) => ({
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2500,
  loop: true,
  dir: isRTL ? "rtl" : "ltr",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: {
      slidesPerView: 5,
    },
    991: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

interface Brand1Props {
  alt?: boolean;
}

export default function Brand1({ alt }: Brand1Props): React.ReactElement {
  const { isRTL } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);

  return (
    <>
      <div
        className={`brand-section fix section-padding ${
          alt ? "pt-0 section-bg-2" : ""
        }`}
      >
        <div className="container">
          <div className="swiper brand-slider">
            <Swiper
              key={isRTL ? "rtl" : "ltr"}
              {...swiperOptions}
              className="swiper-wrapper"
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="brand-image center">
                    <img src={`/assets/img/brand/brand-logo-2.png`} alt="img" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
