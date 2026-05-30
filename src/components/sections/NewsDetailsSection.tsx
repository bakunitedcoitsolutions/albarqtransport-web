"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useParams } from "next/navigation";
import { useGetAllBlogs } from "@/lib/db/services/blog/requests";
import { getSignedUrl } from "@/utils/storage";
import { createSlug, extractIdFromSlug } from "@/utils/helper";
import Preloader from "@/components/elements/Preloader";
import Error404 from "@/components/elements/Error404";

export default function NewsDetailsSection() {
  const { t, isRTL, language } = useLanguage();
  const { slug } = useParams();
  const blogId = extractIdFromSlug(slug as string);
  const { data: blogs, isLoading } = useGetAllBlogs();

  if (isLoading) return <Preloader />;

  const blog = blogs?.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <Error404
        title={isRTL ? "المقال غير موجود" : "Blog not found"}
        message={
          isRTL
            ? "المقال الذي تبحث عنه غير موجود أو تم حذفه."
            : "The blog article you are looking for does not exist or has been removed."
        }
        btnText={isRTL ? "العودة للأخبار" : "Back to News"}
        btnLink="/news"
      />
    );
  }

  let formattedDate = "";
  try {
    const parsedDate = new Date(blog.date);
    if (blog.date && !isNaN(parsedDate.getTime())) {
      formattedDate = new Intl.DateTimeFormat(language, {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(parsedDate);
    } else {
      formattedDate = blog.date || "";
    }
  } catch (e) {
    formattedDate = blog.date || "";
  }

  // Determine localized content
  const title = isRTL ? blog.titleAr : blog.titleEn;
  const type = isRTL ? blog.typeAr : blog.typeEn;
  const descHeading1 = isRTL
    ? blog.descriptiveHeadingAr1
    : blog.descriptiveHeadingEn1;
  const description1 = isRTL ? blog.descriptionAr1 : blog.descriptionEn1;
  const descHeading2 = isRTL
    ? blog.descriptiveHeadingAr2
    : blog.descriptiveHeadingEn2;
  const description2 = isRTL ? blog.descriptionAr2 : blog.descriptionEn2;
  const testimonial = isRTL ? blog.testimonialAr : blog.testimonialEn;
  const reviewerName = isRTL ? blog.reviewerNameAr : blog.reviewerNameEn;

  // Recent posts
  const recentPosts =
    blogs
      ?.filter((b) => b.id !== blog.id && b.isActive)
      .sort((a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0))
      .slice(0, 3) || [];

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
                    backgroundImage: `url(${blog.mainImage ? getSignedUrl(blog.mainImage) : "/assets/img/news/post-4.jpg"})`,
                  }}
                />
                <div className="post-content">
                  <span className="post-date text-primary font-semibold mb-2 block rtl:text-lg!">
                    {formattedDate} {type ? `• ${type}` : ""}
                  </span>

                  <h3 className="rtl:text-2xl! rtl:md:text-3xl! rtl:xl:text-4xl! font-bold mb-4">
                    {title}
                  </h3>

                  {descHeading1 && (
                    <h4 className="rtl:text-xl! rtl:md:text-2xl! font-bold mt-4 mb-2 text-gray-800">
                      {descHeading1}
                    </h4>
                  )}

                  {description1 && (
                    <p className="mb-4 rtl:text-lg! rtl:md:text-xl! text-gray-600 leading-relaxed whitespace-pre-line">
                      {description1}
                    </p>
                  )}

                  {testimonial && (
                    <div className="hilight-text mt-4 mb-4">
                      <p className="rtl:text-lg! rtl:md:text-xl! italic font-medium">
                        "{testimonial}"
                      </p>
                      {reviewerName && (
                        <span className="block mt-2 text-sm text-gray-500 font-bold rtl:text-base!">
                          — {reviewerName}
                        </span>
                      )}
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
                  )}

                  {descHeading2 && (
                    <h4 className="rtl:text-xl! rtl:md:text-2xl! font-bold mt-6 mb-2 text-gray-800">
                      {descHeading2}
                    </h4>
                  )}

                  {description2 && (
                    <p className="mb-4 rtl:text-lg! rtl:md:text-xl! text-gray-600 leading-relaxed whitespace-pre-line">
                      {description2}
                    </p>
                  )}

                  {(blog.picture2 || blog.picture3) && (
                    <div className="row g-4 mt-2 mb-4">
                      {blog.picture2 && (
                        <div className={blog.picture3 ? "col-lg-6" : "col-12"}>
                          <div className="details-image overflow-hidden rounded-lg shadow-sm">
                            <img
                              src={getSignedUrl(blog.picture2)}
                              alt="detail-img-1"
                              className="w-full object-cover max-h-[300px]"
                            />
                          </div>
                        </div>
                      )}
                      {blog.picture3 && (
                        <div className={blog.picture2 ? "col-lg-6" : "col-12"}>
                          <div className="details-image overflow-hidden rounded-lg shadow-sm">
                            <img
                              src={getSignedUrl(blog.picture3)}
                              alt="detail-img-2"
                              className="w-full object-cover max-h-[300px]"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
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
                  {recentPosts.map((post) => {
                    const postTitle = isRTL ? post.titleAr : post.titleEn;
                    const postImage = post.mainImage
                      ? getSignedUrl(post.mainImage)
                      : `/assets/img/news/pp${(post.id % 3) + 2}.jpg`;
                    const postLink = `/news/${createSlug(post.titleEn, post.id)}`;
                    return (
                      <div key={post.id} className="recent-items">
                        <div className="recent-thumb overflow-hidden rounded max-w-20! max-h-20!">
                          <img
                            src={postImage}
                            alt={postTitle}
                            className="w-full h-full"
                          />
                        </div>
                        <div className="recent-content">
                          <h6 className="rtl:text-base! rtl:md:text-lg!">
                            <Link href={postLink}>{postTitle}</Link>
                          </h6>
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
  );
}
