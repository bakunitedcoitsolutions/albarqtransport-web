"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { en as enTranslations, ar as arTranslations } from "@/locales";

interface FaqItem {
  question: string;
  answer: string;
}

export default function Faq() {
  const { isRTL, t, language } = useLanguage();
  const [isAccordion, setIsAccordion] = useState<number | null>(1);

  const translations = language === "ar" ? arTranslations : enTranslations;
  const faqItems = (translations.faq?.faqs || []) as FaqItem[];
  const features = (translations.faq?.features || []) as Array<{
    title: string;
    description: string;
  }>;

  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => {
      // If clicking the same item, close it. Otherwise, open the clicked item.
      return prevState === key ? null : key;
    });
  };

  return (
    <>
      <section
        className="faq-section fix section-padding section-bg-2 bg-cover"
        style={{ backgroundImage: 'url("assets/img/faq/bg-shape.png")' }}
      >
        <div className="track-shape float-bob-x rtl:scale-x-[-1]! rtl:left-[5%]!">
          <img src="/assets/img/track.png" alt="img" />
        </div>
        <div className="container">
          <div className="faq-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <PreHeader text={t("faq.preHeader")} />
                    <h2
                      className="wow fadeInUp rtl:text-4xl! rtl:md:text-5xl! rtl:xl:text-6xl!"
                      data-wow-delay=".2s"
                    >
                      {t("faq.title")}
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!"
                    data-wow-delay=".4s"
                  >
                    {t("faq.description")}
                  </p>
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="icon-items wow fadeInUp"
                      data-wow-delay={index === 0 ? ".2s" : ".4s"}
                    >
                      <div className="icon">
                        <i className="fa-regular fa-check" />
                      </div>
                      <div className="content">
                        <h5 className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                          {feature.title}
                        </h5>
                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                          {feature.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-accordion">
                  <div className="accordion" id="accordion">
                    {faqItems.map((item, index) => {
                      const delay =
                        index === 0
                          ? ".1s"
                          : index === 1
                          ? ".3s"
                          : index === 2
                          ? ".5s"
                          : index === 3
                          ? ".6s"
                          : ".7s";
                      return (
                        <div
                          key={index}
                          className="accordion-item mb-3 wow fadeInUp"
                          data-wow-delay={delay}
                        >
                          <h5 className="accordion-header">
                            <button
                              onClick={() => handleAccordion(index + 1)}
                              className={
                                isAccordion === index + 1
                                  ? "accordion-button"
                                  : "accordion-button collapsed"
                              }
                              type="button"
                              aria-expanded={isAccordion === index + 1}
                              aria-controls={`faq${index + 1}`}
                            >
                              <span className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                                {item.question}
                              </span>
                            </button>
                          </h5>
                          <div
                            id={`faq${index + 1}`}
                            className={
                              isAccordion === index + 1
                                ? "accordion-collapse show"
                                : "accordion-collapse collapse"
                            }
                            style={{
                              display:
                                isAccordion === index + 1 ? "block" : "none",
                            }}
                            data-bs-parent="#accordion"
                          >
                            <div className="accordion-body rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                              {item.answer}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
