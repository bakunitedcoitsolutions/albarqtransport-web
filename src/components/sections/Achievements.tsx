"use client";

import Image from "next/image";
import PreHeader from "../elements/PreHeader";
import Counter1 from "./Counter1";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Achievements() {
  const { isRTL, t } = useLanguage();

  return (
    <>
      <section
        className="achievements-section fix section-bg-2 section-padding bg-cover"
        style={{
          backgroundImage: 'url("assets/img/achievements-bg-shape.png")',
        }}
      >
        <div className="container">
          <div className="achievements-wrapper">
            <div className="row g-4 justify-content-between">
              <div className="col-xxl-6 col-xl-7 col-lg-8">
                <div className="achievements-content">
                  <div className="section-title">
                    <PreHeader
                      theme="theme"
                      text={t("achievements.preHeader")}
                    />
                    <h2
                      className="wow fadeInUp rtl:text-xl! rtl:md:text-3xl! rtl:xl:text-6xl!"
                      data-wow-delay=".2s"
                    >
                      {t("achievements.title")}
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                    {t("achievements.description")}
                  </p>
                  <Counter1 />
                </div>
              </div>
              <div
                className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="achievements-image">
                  <img src="/assets/img/albarq/banner/banner-2.jpg" alt="img" />
                  <div className="achievements-image-2 float-bob-y hidden lg:block">
                    <Image
                      alt="img"
                      width={238}
                      height={343}
                      src="/assets/img/albarq/skills/skill-2.jpg"
                      className="max-w-[238px] max-h-[343px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
