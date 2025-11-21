"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";

interface OurSkillsProps {
  alt?: boolean;
}

export default function OurSkills({ alt }: OurSkillsProps): React.ReactElement {
  const { t, isRTL } = useLanguage();
  return (
    <>
      <section
        className={`skills-section bg-white! fix section-padding ${
          alt ? "section-bg-2" : " pt-0"
        }`}
      >
        <div className="shape-1 float-bob-x rtl:scale-x-[-1]! rtl:bottom-[15%]!">
          <img
            src={
              isRTL
                ? "/assets/img/skills/shape-2.png"
                : "/assets/img/skills/shape-1.png"
            }
            alt="img"
          />
        </div>
        <div className="shape-2 float-bob-y rtl:scale-x-[-1]! rtl:top-[40%]!">
          <img
            src={
              isRTL
                ? "/assets/img/skills/shape-1.png"
                : "/assets/img/skills/shape-2.png"
            }
            alt="img"
          />
        </div>
        <div className="container">
          <div className="skills-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-lg-7 wow fadeInUp" data-wow-delay=".2s">
                    <div className="skills-image">
                      <img
                        src="/assets/img/albarq/skills/skill-1.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div className="col-lg-5 wow fadeInUp" data-wow-delay=".4s">
                    <div className="skills-image lg:h-full!">
                      <img
                        src="/assets/img/albarq/skills/skill-2.jpg"
                        alt="img"
                        className="lg:h-full!"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="skill-content">
                  <div className="section-title">
                    <PreHeader text={t("skills.preHeader")} />
                    <h2
                      className="wow fadeInUp rtl:text-4xl! rtl:md:text-5xl! rtl:xl:text-6xl!"
                      data-wow-delay=".2s"
                    >
                      {t("skills.title")}
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 wow fadeInUp text-gray-500 rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!"
                    data-wow-delay=".4s"
                  >
                    {t("skills.description")}
                  </p>
                  {/* <div className="skill-feature-items">
                    <div
                      className="skill-feature wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <h3 className="box-title">Shipping</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: "85%",
                            animation:
                              "2.6s ease 0s 1 normal none running animate-positive",
                            opacity: 1,
                          }}
                        >
                          <div className="progress-value">
                            <span className="counter-number2">85</span>%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="skill-feature wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <h3 className="box-title">Managment</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: "90%",
                            animation:
                              "2.6s ease 0s 1 normal none running animate-positive",
                            opacity: 1,
                          }}
                        >
                          <div className="progress-value">
                            <span className="counter-number2">90</span>%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="skill-feature wow fadeInUp"
                      data-wow-delay=".2s"
                    >
                      <h3 className="box-title">Transport Management</h3>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          style={{
                            width: "75%",
                            animation:
                              "2.6s ease 0s 1 normal none running animate-positive",
                            opacity: 1,
                          }}
                        >
                          <div className="progress-value">
                            <span className="counter-number2">75</span>%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
