"use client";

import CounterNumber from "../elements/CounterNumber";
import { useLanguage } from "@/contexts/LanguageContext";

interface CounterItem {
  icon: string;
  value: number | string;
  suffix?: string;
  translationKey: string;
  delay: string;
  useCounter?: boolean;
}

export default function Counter1() {
  const { t } = useLanguage();

  const counterItems: CounterItem[] = [
    {
      icon: "/assets/img/icon/11.svg",
      value: "2004",
      translationKey: "achievements.counter.established",
      delay: ".2s",
      useCounter: false,
    },
    {
      icon: "/assets/img/icon/12.svg",
      value: 20,
      suffix: "+",
      translationKey: "achievements.counter.yearsExperience",
      delay: ".4s",
      useCounter: true,
    },
    {
      icon: "/assets/img/icon/13.svg",
      value: 200,
      suffix: "+",
      translationKey: "achievements.counter.projects",
      delay: ".2s",
      useCounter: true,
    },
    {
      icon: "/assets/img/icon/14.svg",
      value: "100%",
      translationKey: "achievements.counter.commitment",
      delay: ".4s",
      useCounter: false,
    },
  ];

  return (
    <div className="row">
      {counterItems.map((item, index) => (
        <div
          key={index}
          className="col-lg-6 col-md-6 wow fadeInUp"
          data-wow-delay={item.delay}
        >
          <div className="counter-items">
            <div className="content">
              <div className="icon flex justify-center items-center">
                <img src={item.icon} alt="img" />
              </div>
              <h2>
                <span className="count">
                  {item.useCounter && typeof item.value === "number" ? (
                    <CounterNumber count={item.value} />
                  ) : (
                    item.value
                  )}
                </span>
                {item.suffix && item.suffix}
              </h2>
              <p className="rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                {t(item.translationKey)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
