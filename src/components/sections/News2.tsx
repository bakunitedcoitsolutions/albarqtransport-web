"use client";

import { useState } from "react";
import Link from "next/link";

export default function News2() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <section className="news-section fix section-padding pt-0" id="blog">
        <div className="shape-3 float-bob-y">
          <img src="/assets/img/news/shape-3.png" alt="img" />
        </div>
        <div className="shape-4 float-bob-y">
          <img src="/assets/img/news/shape-4.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <h6 className="wow fadeInUp">
                <i className="fa-regular fa-arrow-left-long" />
                Blog &amp; News
                <i className="fa-regular fa-arrow-right-long" />
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Latest News &amp; Blog
              </h2>
            </div>
            <Link
              href="/news-grid"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              View all post <i className="fa-regular fa-arrow-right" />
            </Link>
          </div>
          <div className="row">
            <div
              onClick={() => handleIndex(1)}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div
                className={
                  activeIndex === 1 ? "news-box-items active" : "news-box-items"
                }
              >
                <div className="news-image">
                  <img src="/assets/img/news/04.jpg" alt="img" />
                  <img src="/assets/img/news/04.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul className="post-list">
                    <li>Construction</li>
                    <li>07 July 2024</li>
                  </ul>
                  <h4>
                    <Link href="/news-details">
                      Latest Work Was Disapproved by the Supervisor.
                    </Link>
                  </h4>
                  <div className="author-items">
                    <div className="author-info">
                      <img src="/assets/img/news/author-1.png" alt="img" />
                      <div className="content">
                        <h6>Admin</h6>
                        <p>Guy Hawkins</p>
                      </div>
                    </div>
                    <Link href="/news-details" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleIndex(2)}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div
                className={
                  activeIndex === 2 ? "news-box-items active" : "news-box-items"
                }
              >
                <div className="news-image">
                  <img src="/assets/img/news/05.jpg" alt="img" />
                  <img src="/assets/img/news/05.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul className="post-list">
                    <li>Building</li>
                    <li>07 July 2024</li>
                  </ul>
                  <h4>
                    <Link href="/news-details">
                      Manager Disapproved of the Most Recent Work.
                    </Link>
                  </h4>
                  <div className="author-items">
                    <div className="author-info">
                      <img src="/assets/img/news/author-2.png" alt="img" />
                      <div className="content">
                        <h6>Admin</h6>
                        <p>Guy Hawkins</p>
                      </div>
                    </div>
                    <Link href="/news-details" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => handleIndex(3)}
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div
                className={
                  activeIndex === 3 ? "news-box-items active" : "news-box-items"
                }
              >
                <div className="news-image">
                  <img src="/assets/img/news/06.jpg" alt="img" />
                  <img src="/assets/img/news/06.jpg" alt="img" />
                </div>
                <div className="news-content">
                  <ul className="post-list">
                    <li>Industry</li>
                    <li>07 July 2024</li>
                  </ul>
                  <h4>
                    <Link href="/news-details">
                      Manager Found Latest Work Unsatisfactory.
                    </Link>
                  </h4>
                  <div className="author-items">
                    <div className="author-info">
                      <img src="/assets/img/news/author-3.png" alt="img" />
                      <div className="content">
                        <h6>Admin</h6>
                        <p>Guy Hawkins</p>
                      </div>
                    </div>
                    <Link href="/news-details" className="link-btn">
                      Read More <i className="fa-solid fa-arrow-right" />
                    </Link>
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
