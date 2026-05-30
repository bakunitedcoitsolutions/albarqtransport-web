"use client";

// import "swiper/css";
import Link from "next/link";
// Note: react-modal-video CSS should be imported in app/layout.tsx if needed
// import "react-modal-video/css/modal-video.css";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSwiper from "./HeroSwiper";
import { useGetLatestVideo } from "@/lib/db/services/video/requests";
import { getYoutubeId } from "@/utils/helper";

export default function Hero(): React.ReactElement {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isRTL, t } = useLanguage();
  const { data: latestVideo } = useGetLatestVideo();
  return (
    <>
      <section className="hero-section hero-1 fix section-padding">
        <div className="line-shape">
          <img src="/assets/img/hero/line-shape.png" alt="img" />
        </div>
        <div className="container-fluid">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="hero-content bg-theme2!">
                <div className="vector-shape">
                  <img src="/assets/img/hero/vector.png" alt="img" />
                </div>
                <div className="vector-shape-2">
                  <img src="/assets/img/hero/vector-2.png" alt="img" />
                </div>
                <h1
                  className="wow fadeInUp text-2xl! md:text-4xl! xl:text-6xl! rtl:text-4xl! md:rtl:text-6xl! rtl:xl:text-8xl!"
                  data-wow-delay=".3s"
                  dangerouslySetInnerHTML={{ __html: t("hero.title") }}
                />
                <p
                  className="wow fadeInUp text-base! md:text-lg! xl:text-xl! rtl:text-lg! md:rtl:text-2xl! rtl:xl:text-3xl!"
                  data-wow-delay=".5s"
                >
                  {t("hero.description")}
                </p>
                <div className="hero-button">
                  <Link
                    href="/services"
                    className="theme-btn bg-white wow fadeInUp text-sm! md:text-base! xl:text-lg! rtl:text-xl! rtl:md:text-2xl! rtl:px-3xl! rtl:md:px-5! rtl:py-4! rtl:md:py-5!"
                    data-wow-delay=".3s"
                  >
                    {t("hero.exploreMore")}
                    <i
                      className={`fa-regular fa-arrow-right rtl:rotate-180! rtl:pl-5!`}
                    />
                  </Link>
                  {!!latestVideo?.videoLink &&
                    !!getYoutubeId(latestVideo?.videoLink) && (
                      <span
                        className="button-text wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <a
                          onClick={() => setOpen(true)}
                          className="video-btn video-popup"
                        >
                          <i className="fa-solid fa-play rtl:rotate-180!" />
                        </a>
                        <span className="ms-3 d-line rtl:text-xl! rtl:mr-5!">
                          {t("hero.play")}
                        </span>
                      </span>
                    )}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-items">
                <div className="swiper hero-slider">
                  <HeroSwiper />
                  <div className="array-button">
                    <button className="array-prevs h1p direction-ltr">
                      <span className="rtl:rotate-180">
                        <img src="/assets/img/hero/prev.png" alt="img" />
                      </span>
                      {t("hero.previous")}
                    </button>
                    <button className="array-prevs h1p direction-ltr">
                      {t("hero.next")}
                      <span className="rotate-180 rtl:rotate-0">
                        <img src="/assets/img/hero/prev.png" alt="img" />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {!!latestVideo?.videoLink && !!getYoutubeId(latestVideo?.videoLink) && (
        <ModalVideo
          channel="youtube"
          // @ts-ignore
          autoplay
          isOpen={isOpen}
          videoId={getYoutubeId(latestVideo?.videoLink) ?? ""}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
