"use client";
// import "swiper/css"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGetAllClients } from "@/lib/db/services/client/requests";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";
import Image from "next/image";
import Link from "next/link";
import PreHeader from "../elements/PreHeader";

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
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
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

interface ClientProps {
  alt?: boolean;
}

export default function Clients({
  alt,
}: ClientProps): React.ReactElement | null {
  const { isRTL, t } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);
  const { data: clientsData, isLoading } = useGetAllClients();

  if (!isLoading && (!clientsData || clientsData?.length === 0)) {
    return null;
  }

  const activeClients =
    clientsData && clientsData.length > 0
      ? [...clientsData].sort(
          (a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0),
        )
      : [];

  return (
    <>
      <div
        className={`brand-section fix section-padding ${
          alt ? "pt-0 section-bg-2" : ""
        }`}
      >
        <div className="container text-center">
          <div className="section-title">
            <PreHeader text={t("clients.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-4xl! rtl:md:text-5xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
            >
              {t("clients.trustedPartner")}
            </h2>
          </div>
        </div>
        <div className="container mt-10!">
          <div className="swiper brand-slider">
            {isLoading ? (
              <div className="w-full flex items-center justify-center p-5">
                <Skeleton
                  height="100px"
                  containerClassName="w-full max-w-[1200px]"
                />
              </div>
            ) : (
              <Swiper
                key={isRTL ? "rtl" : "ltr"}
                {...swiperOptions}
                className="swiper-wrapper"
              >
                {activeClients.map((client) => {
                  const clientName = isRTL ? client.nameAr : client.nameEn;
                  const imageUrl = client.logo ? getSignedUrl(client.logo) : "";
                  return (
                    <SwiperSlide key={client.id} className="swiper-slide">
                      <div className="brand-image center flex items-center justify-center">
                        <Link
                          href={client.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <Image
                            src={imageUrl}
                            alt={clientName}
                            width={180}
                            height={120}
                            className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                            style={{ objectFit: "contain" }}
                          />
                        </Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
