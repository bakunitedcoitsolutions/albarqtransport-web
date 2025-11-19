"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { en as enTranslations, ar as arTranslations } from "@/locales";

export default function Project1() {
  const { isRTL, t, language } = useLanguage();
  const translations = language === "ar" ? arTranslations : enTranslations;
  const projects = (translations.project?.projects || []) as Array<{
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
  return (
    <>
      <section
        className="project-section bg-white! fix section-padding"
        id="projects"
      >
        <div className="container">
          <div className="section-title text-center">
            <PreHeader text={t("project.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
            >
              {t("project.title")}
            </h2>
          </div>
        </div>
        <div className="container-fluid">
          <div className="project-wrapper">
            <div className="main-box">
              {projects.map((project, index) => {
                const delay = index * 0.2;
                const bgClass =
                  index === 0
                    ? ""
                    : index === 1
                    ? "bg-1"
                    : index === 2
                    ? "bg-2 active"
                    : index === 3
                    ? "bg-3"
                    : "bg-4";
                return (
                  <div
                    key={index}
                    className={`box ${bgClass} wow fadeInUp`}
                    data-wow-delay={delay > 0 ? `.${delay}s` : undefined}
                  >
                    <div className="project-content flex! justify-center!">
                      <h3 className="rtl:text-3xl!">
                        <a>{project.name}</a>
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
