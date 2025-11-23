"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { en as enTranslations, ar as arTranslations } from "@/locales";

export default function NewsDetailsSection() {
  const { t, language } = useLanguage();
  const translations = language === "en" ? enTranslations : arTranslations;
  const posts = translations.news.details.sidebar.posts;

  return (
    <section className="news-standard fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-12 col-lg-8">
            <div className="blog-post-details">
              <div className="single-blog-post">
                <div
                  className="post-featured-thumb bg-cover"
                  style={{
                    backgroundImage: 'url("/assets/img/news/post-4.jpg")',
                  }}
                />
                <div className="post-content">
                  <h3 className="rtl:text-2xl! rtl:md:text-3xl! rtl:xl:text-4xl!">
                    {t("news.details.title")}
                  </h3>
                  <p className="mb-3 rtl:text-lg! rtl:md:text-xl!">
                    {t("news.details.paragraph1")}
                  </p>
                  <p className="mb-3 rtl:text-lg! rtl:md:text-xl!">
                    {t("news.details.paragraph2")}
                  </p>
                  <p className="rtl:text-lg! rtl:md:text-xl!">
                    {t("news.details.paragraph3")}
                  </p>
                  <div className="hilight-text mt-4 mb-4">
                    <p className="rtl:text-lg! rtl:md:text-xl!">
                      {t("news.details.highlightText")}
                    </p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={36}
                      height={36}
                      viewBox="0 0 36 36"
                      fill="none"
                    >
                      <path
                        d="M7.71428 20.0711H0.5V5.64258H14.9286V20.4531L9.97665 30.3568H3.38041L8.16149 20.7947L8.5233 20.0711H7.71428Z"
                        stroke="#F55B1F"
                      />
                      <path
                        d="M28.2846 20.0711H21.0703V5.64258H35.4989V20.4531L30.547 30.3568H23.9507L28.7318 20.7947L29.0936 20.0711H28.2846Z"
                        stroke="#F55B1F"
                      />
                    </svg>
                  </div>
                  <p className="mt-4 mb-5 rtl:text-lg! rtl:md:text-xl!">
                    {t("news.details.paragraph4")}
                  </p>
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="details-image">
                        <img src="/assets/img/news/post-5.jpg" alt="img" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="details-image">
                        <img src="/assets/img/news/post-6.jpg" alt="img" />
                      </div>
                    </div>
                  </div>
                  <p className="pt-5 rtl:text-lg! rtl:md:text-xl!">
                    {t("news.details.paragraph5")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="main-sidebar">
              <div className="single-sidebar-widget">
                <div className="wid-title">
                  <h3 className="rtl:text-xl! rtl:md:text-2xl!">
                    {t("news.details.sidebar.recentPost")}
                  </h3>
                </div>
                <div className="recent-post-area">
                  {posts.map((post: any, index: number) => (
                    <div key={index} className="recent-items">
                      <div className="recent-thumb">
                        <img
                          src={`/assets/img/news/pp${index + 2}.jpg`}
                          alt="img"
                        />
                      </div>
                      <div className="recent-content">
                        <ul>
                          <li>
                            <i className="fa-solid fa-calendar-days" />
                            {post.date}
                          </li>
                        </ul>
                        <h6 className="rtl:text-base! rtl:md:text-lg!">
                          <Link href="/news/1">{post.title}</Link>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
