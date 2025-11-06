"use client";

import { useState } from "react";
import Link from "next/link";

interface Team2Props {
  alt?: boolean;
}

export default function Team2({ alt }: Team2Props): React.ReactElement {
  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <section
      className={`team-section section-padding  ${alt ? "" : "pt-0"}`}
      id="team"
    >
      <div className="shape-1 float-bob-y">
        <img src="/assets/img/team/shape-1.png" alt="img" />
      </div>
      <div className="shape-2">
        <img src="/assets/img/team/shape-2.png" alt="img" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">
            <i className="fa-regular fa-arrow-left-long" />
            our team members
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2 className="wow fadeInUp" data-wow-delay=".2s">
            Our Professional Team
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            onMouseEnter={() => handleAccordion(1)}
          >
            <div
              className={`team-box-items ${isAccordion === 1 ? "active" : ""}`}
            >
              <div className="social-icon d-grid align-items-center">
                <Link href="/#">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </div>
              <div className="team-image">
                <img src="/assets/img/team/05.jpg" alt="img" />
              </div>
              <div className="team-content">
                <h5>
                  <Link href="/team-details">Shikhon Islam</Link>
                </h5>
                <p>Sr. engineer</p>
                <Link href="/team-details" className="icon">
                  <i className="fa-solid fa-link" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            onMouseEnter={() => handleAccordion(2)}
            data-wow-delay=".2s"
          >
            <div
              className={`team-box-items ${isAccordion === 2 ? "active" : ""}`}
            >
              <div className="social-icon d-grid align-items-center">
                <Link href="/#">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </div>
              <div className="team-image">
                <img src="/assets/img/team/06.jpg" alt="img" />
              </div>
              <div className="team-content">
                <h5>
                  <Link href="/team-details">Jenny Wilson</Link>
                </h5>
                <p>Sr. engineer</p>
                <Link href="/team-details" className="icon">
                  <i className="fa-solid fa-link" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            onMouseEnter={() => handleAccordion(3)}
            data-wow-delay=".4s"
          >
            <div
              className={`team-box-items ${isAccordion === 3 ? "active" : ""}`}
            >
              <div className="social-icon d-grid align-items-center">
                <Link href="/#">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </div>
              <div className="team-image">
                <img src="/assets/img/team/07.jpg" alt="img" />
              </div>
              <div className="team-content">
                <h5>
                  <Link href="/team-details">Kawser Ahmed</Link>
                </h5>
                <p>Sr. engineer</p>
                <Link href="/team-details" className="icon">
                  <i className="fa-solid fa-link" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
            onMouseEnter={() => handleAccordion(4)}
            data-wow-delay=".6s"
          >
            <div
              className={`team-box-items ${isAccordion === 4 ? "active" : ""}`}
            >
              <div className="social-icon d-grid align-items-center">
                <Link href="/#">
                  <i className="fab fa-linkedin-in" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-twitter" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-instagram" />
                </Link>
                <Link href="/#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </div>
              <div className="team-image">
                <img src="/assets/img/team/08.jpg" alt="img" />
              </div>
              <div className="team-content">
                <h5>
                  <Link href="/team-details">Ronald Richards</Link>
                </h5>
                <p>Sr. engineer</p>
                <Link href="/team-details" className="icon">
                  <i className="fa-solid fa-link" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
