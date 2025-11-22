"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { en as enTranslations, ar as arTranslations } from "@/locales";

export default function News1() {
  const { t, language } = useLanguage();
  const translations = language === "ar" ? arTranslations : enTranslations;
  const newsItems = ((translations as any).news?.items || []) as Array<{
    title: string;
    description: string;
    category?: string;
    author?: string;
  }>;

  return (
    <>
      <section className="news-section fix section-padding fix section-bg-2">
        <div className="shape-1 float-bob-y rtl:scale-x-[-1]! rtl:right-0! rtl:left-[unset]!">
          <img src="/assets/img/news/shape-1.png" alt="img" />
        </div>
        <div className="shape-2 float-bob-x rtl:scale-x-[-1]! rtl:left-[70px]! rtl:right-[unset]!">
          <img src="/assets/img/news/shape-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <PreHeader text={t("news.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-5xl!"
              data-wow-delay=".2s"
            >
              {t("news.title")}
            </h2>
          </div>
          <div className="row">
            {newsItems.length > 0 && (
              <>
                {/* Large News Box */}
                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                  <div
                    className="news-image-items bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/news/01.jpg")',
                    }}
                  >
                    <div className="news-content">
                      <h3 className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                        <Link href="/news-details">
                          {newsItems[0]?.title || t("news.items.0.title")}
                        </Link>
                      </h3>
                      <p className="text-white rtl:text-base! rtl:md:text-lg! rtl:xl:text-xl!">
                        {newsItems[0]?.description ||
                          t("news.items.0.description")}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Two Smaller News Boxes */}
                <div className="col-lg-6">
                  <div className="news-right-items">
                    {[0, 1].map((index) => {
                      const delay = index === 0 ? ".2s" : ".4s";
                      const imageIndex = index + 2; // 02.jpg, 03.jpg
                      const newsItem = newsItems[0];
                      return (
                        <div
                          key={index}
                          className="news-card-items wow fadeInUp "
                          data-wow-delay={delay}
                        >
                          <div className="news-content flex flex-1 flex-col items-start">
                            <h4 className="rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                              <Link href="/news-details">
                                {newsItem?.title || t("news.items.0.title")}
                              </Link>
                            </h4>
                            <p className="rtl:text-base! rtl:md:text-lg!">
                              {newsItem?.description ||
                                t("news.items.0.description")}
                            </p>
                            <Link
                              href="/news-details"
                              className="link-btn rtl:text-sm! rtl:md:text-base!"
                            >
                              {t("news.readMore")}{" "}
                              <i className="fa-regular fa-arrow-right-long rtl:rotate-180! rtl:mr-3!" />
                            </Link>
                          </div>
                          <div className="news-image ltr:mr-5! rtl:ml-5!">
                            <img
                              src={`/assets/img/news/0${imageIndex}.jpg`}
                              alt={newsItem?.title || t("news.items.0.title")}
                              className="w-24! h-24!"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-10! flex! justify-center! items-center!">
                  <Link
                    href="/news-grid"
                    className="theme-btn rtl:text-xl! rtl:md:text-2xl!"
                  >
                    {t("news.viewAllNews")}
                    <i
                      className={`fas fa-long-arrow-right rtl:rotate-180! rtl:mr-3!`}
                    />
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
