"use client";
import { thmSecondary } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";

import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { useGetAllReviews } from "@/lib/db/services/review/requests";
import Skeleton from "@/components/ui/Skeleton";

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
  const { isRTL, t } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);
  const { data: reviewsData, isLoading } = useGetAllReviews();

  if (!isLoading && (!reviewsData || reviewsData?.length === 0)) {
    return null;
  }

  const activeReviews =
    reviewsData && reviewsData.length > 0
      ? [...reviewsData].sort(
          (a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0),
        )
      : [];
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
                    {isLoading ? (
                      <div className="w-full flex items-center justify-center p-5">
                        <Skeleton height="100px" containerClassName="w-full" />
                      </div>
                    ) : (
                      <Swiper
                        key={isRTL ? "rtl" : "ltr"}
                        {...swiperOptions}
                        className="swiper-wrapper"
                      >
                        {activeReviews.map((review) => (
                          <SwiperSlide key={review.id} className="swiper-slide">
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
                                  {isRTL ? review.reviewAr : review.reviewEn}
                                </h4>
                              </div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    )}
                  </div>
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
