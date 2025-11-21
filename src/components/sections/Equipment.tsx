"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { en as enTranslations, ar as arTranslations } from "@/locales";

export default function Equipment() {
  const { isRTL, t, language } = useLanguage();
  const translations = language === "ar" ? arTranslations : enTranslations;
  const equipment = ((translations as any).equipment?.items || []) as Array<{
    name: string;
  }>;
  useEffect(() => {
    const mainBoxes = document.querySelectorAll(".main-box, .box");
    const getSlide = mainBoxes.length - 1;
    const slideCal = 100 / getSlide + "%";

    const boxes = document.querySelectorAll(".box") as NodeListOf<HTMLElement>;
    boxes.forEach((box) => {
      box.style.width = slideCal;
    });

    boxes.forEach((box) => {
      box.addEventListener("mouseenter", () => {
        boxes.forEach((b) => b.classList.remove("active"));
        box.classList.add("active");
      });
    });

    // Cleanup event listeners when component unmounts
    return () => {
      boxes.forEach((box) => {
        box.removeEventListener("mouseenter", () => {
          boxes.forEach((b) => b.classList.remove("active"));
          box.classList.add("active");
        });
      });
    };
  }, []);

  const equipmentImages = [
    "/assets/img/albarq/equipment/dump-truck.jpg",
    "/assets/img/albarq/equipment/water-tanker.jpg",
    "/assets/img/albarq/equipment/low-bed.jpg",
    "/assets/img/albarq/equipment/flat-bed.jpg",
    "/assets/img/albarq/equipment/excavator.jpg",
  ];

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
              {equipment.map((item, index) => {
                const delay = index * 0.2;
                const image = equipmentImages[index] || equipmentImages[0];
                return (
                  <div
                    key={index}
                    className="box wow fadeInUp bg-cover! bg-center! bg-no-repeat!"
                    style={{
                      backgroundImage: `url(${image})`,
                    }}
                    data-wow-delay={delay > 0 ? `.${delay}s` : undefined}
                  >
                    <div className="project-content flex! justify-center!">
                      <h3 className="rtl:text-3xl!">
                        <a>{item.name}</a>
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
