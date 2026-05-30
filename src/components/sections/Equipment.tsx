"use client";

import { useEffect } from "react";
import PreHeader from "../elements/PreHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGetActiveFleet } from "@/lib/db/services/fleet/requests";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";

export default function Equipment() {
  const { isRTL, t } = useLanguage();
  const { data: fleetData, isLoading } = useGetActiveFleet();

  const activeFleet = fleetData && fleetData.length > 0
    ? [...fleetData].sort((a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0))
    : [];

  useEffect(() => {
    if (activeFleet.length === 0) return;

    const mainBoxes = document.querySelectorAll(".main-box, .box");
    const getSlide = mainBoxes.length - 1;
    const slideCal = 100 / getSlide + "%";

    const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLElement>;
    boxes.forEach((box) => {
      box.style.width = slideCal;
    });

    const handleMouseEnter = (event: Event) => {
      boxes.forEach((b) => b.classList.remove("active"));
      (event.currentTarget as HTMLElement).classList.add("active");
    };

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", handleMouseEnter);
    });

    // Cleanup event listeners when component unmounts
    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, [activeFleet]);

  if (isLoading) {
    return (
      <section className="project-section bg-white! fix section-padding" id="equipment">
        <div className="container">
          <div className="section-title text-center">
            <PreHeader text={t("equipment.preHeader")} />
            <h2 className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!" data-wow-delay=".2s">
              {t("equipment.title")}
            </h2>
          </div>
          <div className="w-full mt-5 flex justify-center items-center">
            <Skeleton height="350px" containerClassName="w-full max-w-[1200px]" />
          </div>
        </div>
      </section>
    );
  }

  if (!isLoading && (!fleetData || fleetData?.length === 0)) {
    return null;
  }

  return (
    <>
      <section
        className="project-section bg-white! fix section-padding"
        id="equipment"
      >
        <div className="container">
          <div className="section-title text-center">
            <PreHeader text={t("equipment.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
            >
              {t("equipment.title")}
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="project-wrapper">
            <div className="main-box">
              {activeFleet.map((item, index) => {
                const delay = index * 0.2;
                const image = item.image ? getSignedUrl(item.image) : "/assets/img/albarq/equipment/eq-2.jpeg";
                return (
                  <div
                    key={item.id}
                    className="box wow fadeInUp bg-cover! bg-center! bg-no-repeat!"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    data-wow-delay={delay > 0 ? `.${delay}s` : undefined}
                  >
                    <div className="project-content flex! justify-center!">
                      <h3 className="rtl:text-3xl!">
                        <a>{isRTL ? item.nameAr : item.nameEn}</a>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
