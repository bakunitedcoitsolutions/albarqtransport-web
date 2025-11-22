"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { en as enTranslations, ar as arTranslations } from "@/locales";

export default function NewsSection() {
  const { t, language } = useLanguage();
  const translations = language === "ar" ? arTranslations : enTranslations;
  const newsItems = ((translations as any).news?.items || []) as Array<{
    title: string;
    description: string;
    category?: string;
    author?: string;
  }>;

  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className={"news-box-items mt-0"}>
                <div className="news-image">
                  <img src="/assets/img/news/01.jpg" alt="img" />
                  <img src="/assets/img/news/01.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <h4 className="rtl:text-xl! rtl:md:text-2xl!">
                    <a>{newsItems[index]?.title || t("news.items.0.title")}</a>
                  </h4>
                  <div className="author-items">
                    <Link href="/news-details" className="link-btn">
                      {t("news.readMore")}{" "}
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
