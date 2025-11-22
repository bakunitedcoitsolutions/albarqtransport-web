"use client";

import { useState } from "react";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/css/modal-video.css";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import Link from "next/link";

export default function About1({
  showMoreButton = true,
}: {
  showMoreButton?: boolean;
}) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isRTL, t } = useLanguage();
  return (
    <>
      <section className="about-section fix section-padding" id="about">
        <div className="about-shape-1 float-bob-x rtl:scale-x-[-1]! rtl:right-0! rtl:bottom-0! rtl:top-[unset]!">
          <img
            src={
              isRTL
                ? "/assets/img/about/about-shape-2.png"
                : "/assets/img/about/about-shape-1.png"
            }
            alt="img"
          />
        </div>
        <div className="about-shape-2 float-bob-x rtl:top-0! rtl:left-[120px]!">
          <img
            src={
              isRTL
                ? "/assets/img/about/about-shape-1.png"
                : "/assets/img/about/about-shape-2.png"
            }
            alt="img"
          />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image">
                  <img
                    src="/assets/img/albarq/team/Mahmood-Ahmad-CEO.webp"
                    alt="Mahmood Ahmad CEO"
                    className="wow fadeInLeft"
                    data-wow-delay=".2s"
                  />
                  <div
                    className="about-image-2 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img
                      src="/assets/img/albarq/about/about-video-cover.jpg"
                      alt="About Video Cover"
                      className="h-40! md:h-56!"
                    />
                    <div className="video-box">
                      <a
                        onClick={() => setOpen(true)}
                        className="video-btn video-popup"
                      >
                        <i className="fas fa-play" />
                      </a>
                    </div>
                  </div>
                  <div className="about-line-shape">
                    <img src="/assets/img/about/about-shape-3.png" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <PreHeader text={t("about.preHeader")} />
                    <h2
                      className="wow fadeInUp rtl:text-xl! rtl:md:text-3xl! rtl:xl:text-6xl!"
                      data-wow-delay=".2s"
                    >
                      {t("about.title")}
                    </h2>
                  </div>

                  {/* CEO Section */}
                  <div
                    className="ceo-section wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <div className="ceo-info-card bg-linear-to-r! from-theme2/20! via-theme2/10! to-theme/20! p-4! md:p-5! rounded-lg! mt-4! md:mt-0! mb-4! border! border-theme2/30! shadow-sm!">
                      <div className="flex items-start gap-3">
                        <div className="ceo-icon-wrapper w-12 h-12 md:w-14 md:h-14 bg-theme rounded-full flex items-center justify-center shrink-0">
                          <i className="fa-solid fa-crown text-white! text-lg! md:text-xl!" />
                        </div>
                        <div className="flex-1!">
                          <h3 className="m-0! text-theme! font-bold! rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-4xl!">
                            {t("about.ceo.name")}
                          </h3>
                          <p className="m-0! mt-1! text-black! rtl:text-base! rtl:md:text-lg! rtl:xl:text-xl!">
                            {t("about.ceo.title")}
                          </p>
                          <p className="m-0! mt-1! text-gray-600! rtl:text-sm! rtl:md:text-base! rtl:xl:text-lg!">
                            {t("about.ceo.company")}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3! mb-0! text-black! rtl:text-base! rtl:md:text-xl!">
                        {t("about.ceo.bio")}
                      </p>
                    </div>
                  </div>

                  {/* Company Description */}
                  <p
                    className="mt-4! mt-md-0 text-black wow fadeInUp rtl:text-lg! rtl:md:text-xl!"
                    data-wow-delay=".4s"
                  >
                    {t("about.companyDescription")}
                  </p>

                  {/* Key Points */}
                  <div
                    className="row g-3! mt-4! wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    {[
                      "keyPoint1",
                      "keyPoint2",
                      "keyPoint3",
                      "keyPoint4",
                      "keyPoint5",
                      "keyPoint6",
                    ].map((key) => (
                      <div key={key} className="col-md-6 mb-3">
                        <div className="key-point-item flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                          <div className="icon-wrapper w-8 h-8 bg-theme rounded-full flex items-center justify-center shrink-0">
                            <i className="fa-solid fa-check text-white! text-sm!" />
                          </div>
                          <span className="text-black! font-semibold! rtl:text-base! rtl:md:text-lg! rtl:xl:text-2xl!">
                            {t(`about.${key}`)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {showMoreButton && (
                    <div className="mt-4! wow fadeInUp" data-wow-delay=".6s">
                      <Link
                        href="/about-us"
                        className="theme-btn rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!"
                      >
                        {t("about.learnMore")}{" "}
                        <i
                          className={`fa-regular fa-arrow-right rtl:rotate-180! rtl:mr-3!`}
                        />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 1 }}
        isOpen={isOpen}
        videoId="JXMWOmuR1hU"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
