"use client";

import Link from "next/link";

import { truncateText, createSlug } from "@/utils/helper";
import PreHeader from "../elements/PreHeader";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGetHomeBlogs } from "@/lib/db/services/blog/requests";

export default function News1() {
  const { isRTL, t } = useLanguage();
  const { data: blogsData, isLoading } = useGetHomeBlogs();

  if (isLoading) {
    return (
      <section className="news-section fix section-padding fix section-bg-2">
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
          <div className="row g-4 mt-5">
            <div className="col-lg-6">
              <Skeleton height="380px" containerClassName="w-full" />
            </div>
            <div className="col-lg-6 flex flex-col gap-4">
              <Skeleton
                height="180px"
                containerClassName="w-full animate-pulse"
              />
              <Skeleton
                height="180px"
                containerClassName="w-full animate-pulse"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!isLoading && (!blogsData || blogsData?.length === 0)) {
    return null;
  }

  const blogs =
    blogsData && blogsData.length > 0
      ? [...blogsData].sort(
          (a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0),
        )
      : [];

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
            {blogs.length > 0 && (
              <>
                {/* Large News Box */}
                {blogs[0] && (
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                    <div
                      className="news-image-items bg-cover"
                      style={{
                        backgroundImage: `url(${blogs[0].mainImage ? getSignedUrl(blogs[0].mainImage) : "assets/img/news/01.jpg"})`,
                      }}
                    >
                      <div className="news-content">
                        <h3 className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                          <Link
                            href={`/news/${createSlug(blogs[0].titleEn, blogs[0].id)}`}
                          >
                            {isRTL ? blogs[0].titleAr : blogs[0].titleEn}
                          </Link>
                        </h3>
                        <p className="text-white rtl:text-base! rtl:md:text-lg! rtl:xl:text-xl!">
                          {truncateText(
                            isRTL
                              ? blogs[0].descriptionAr1 || ""
                              : blogs[0].descriptionEn1 || "",
                            200,
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* Two Smaller News Boxes */}
                <div className="col-lg-6">
                  <div className="news-right-items">
                    {[1, 2].map((blogIndex) => {
                      const blogItem = blogs[blogIndex];
                      if (!blogItem) return null;
                      const delay = blogIndex === 1 ? ".2s" : ".4s";
                      const title = isRTL ? blogItem.titleAr : blogItem.titleEn;
                      const description = isRTL
                        ? blogItem.descriptionAr1
                        : blogItem.descriptionEn1;
                      const image = blogItem.mainImage
                        ? getSignedUrl(blogItem.mainImage)
                        : `/assets/img/news/0${blogIndex + 1}.jpg`;
                      return (
                        <div
                          key={blogItem.id}
                          className="news-card-items wow fadeInUp "
                          data-wow-delay={delay}
                        >
                          <div className="news-content flex flex-1 flex-col items-start">
                            <h4 className="rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                              <Link
                                href={`/news/${createSlug(blogItem.titleEn, blogItem.id)}`}
                              >
                                {title}
                              </Link>
                            </h4>
                            <p className="rtl:text-base! rtl:md:text-lg!">
                              {truncateText(description || "", 170)}
                            </p>
                            <Link
                              href={`/news/${createSlug(blogItem.titleEn, blogItem.id)}`}
                              className="link-btn rtl:text-sm! rtl:md:text-base!"
                            >
                              {t("news.readMore")}{" "}
                              <i className="fa-regular fa-arrow-right-long rtl:rotate-180! rtl:mr-3!" />
                            </Link>
                          </div>
                          <div className="news-image ltr:mr-5! rtl:ml-5!">
                            <img
                              src={image}
                              alt={title}
                              className="w-24! h-24! object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-10! flex! justify-center! items-center!">
                  <Link
                    href="/news"
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
