"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { useGetAllBlogs } from "@/lib/db/services/blog/requests";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";
import { createSlug } from "@/utils/helper";

export default function NewsSection() {
  const { isRTL, t } = useLanguage();
  const { data: blogsData, isLoading } = useGetAllBlogs();

  const hasBlogsInDb = blogsData && blogsData.length > 0;
  const sortedBlogs = hasBlogsInDb
    ? [...blogsData].sort(
        (a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0),
      )
    : [];

  const renderSkeletons = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div key={`skeleton-${index}`} className="col-xl-4 col-lg-6 col-md-6">
        <div className="news-box-items mt-0">
          <div className="news-image aspect-4/3 w-full bg-slate-200">
            <Skeleton
              className="rounded-t-lg"
              containerClassName="w-full h-full"
            />
          </div>
          <div className="news-content p-6">
            <div className="flex flex-col gap-2">
              <Skeleton className="rounded" containerClassName="w-3/4 h-6" />
              <Skeleton className="rounded" containerClassName="w-1/2 h-5" />
            </div>
            <div className="author-items mt-4">
              <Skeleton className="rounded" containerClassName="w-24 h-5" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  if (!isLoading && !hasBlogsInDb) {
    return null;
  }

  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          {isLoading
            ? renderSkeletons()
            : sortedBlogs.map((blog, index) => {
                const title = isRTL ? blog.titleAr : blog.titleEn;
                const imageUrl = blog.mainImage
                  ? getSignedUrl(blog.mainImage)
                  : `/assets/img/news/0${(index % 3) + 1}.jpg`;
                const blogLink = `/news/${createSlug(blog.titleEn, blog.id)}`;
                return (
                  <div
                    key={blog.id}
                    className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={`${((index % 3) + 1) * 0.2}s`}
                  >
                    <div className="news-box-items mt-0">
                      <div className="news-image">
                        <img src={imageUrl} alt={title} />
                        <img src={imageUrl} alt={title} />
                      </div>
                      <div className="news-content">
                        <h4 className="rtl:text-xl! rtl:md:text-2xl!">
                          <Link href={blogLink}>{title}</Link>
                        </h4>
                        <div className="author-items">
                          <Link href={blogLink} className="link-btn">
                            {t("news.readMore")}{" "}
                            <i className="fa-solid fa-arrow-right rtl:rotate-180!" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}
