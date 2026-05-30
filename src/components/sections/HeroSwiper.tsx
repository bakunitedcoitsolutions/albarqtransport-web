"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGetHomeBanners } from "@/lib/db/services/banner/requests";
import { BannerInterface } from "@/lib/db/services/banner/banner.dto";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";

const getSwiperOptions = (isRTL: boolean) => ({
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 2,
  spaceBetween: 30,
  dir: isRTL ? "rtl" : "ltr",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 30 },
    575: { slidesPerView: 1, spaceBetween: 30 },
    767: { slidesPerView: 1, spaceBetween: 30 },
    991: { slidesPerView: 2, spaceBetween: 30 },
    1199: { slidesPerView: 2, spaceBetween: 30 },
    1350: { slidesPerView: 2, spaceBetween: 30 },
  },
});

export default function HeroSwiper(): React.ReactElement {
  const { isRTL } = useLanguage();
  const { data: bannersData, isLoading } = useGetHomeBanners();
  const swiperOptions = getSwiperOptions(isRTL);

  if (isLoading) {
    return (
      <div className="h-[80vh] lg:h-screen w-full -mt-1">
        <Skeleton height="100%" containerClassName="flex-1" />
      </div>
    );
  }

  if (!isLoading && (!bannersData || bannersData?.length === 0)) {
    return <></>;
  }

  const Data =
    bannersData
      ?.sort?.(
        (a: BannerInterface, b: BannerInterface) =>
          (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0),
      )
      ?.map?.((banner: BannerInterface) => ({
        id: banner?.id ?? 0,
        picture: banner?.picture ? getSignedUrl(banner?.picture) : "",
      })) ?? [];

  return (
    <Swiper
      key={isRTL ? "rtl" : "ltr"}
      {...swiperOptions}
      className="swiper-wrapper"
    >
      {Data.map((banner) => (
        <SwiperSlide key={banner.id} className="swiper-slide">
          <div className="hero-image">
            <img src={banner.picture} alt="banner" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
