"use client";

import Link from "next/link";
import { OffcanvasProps } from "../../types";
import MobileMenu from "./MobileMenu";

export default function Offcanvas({
  isOffCanvas,
  handleOffCanvas,
}: OffcanvasProps) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={handleOffCanvas}>
                    <i className="fa-regular fa-xmark" />
                  </button>
                </div>
              </div>
              <div className="offcanvas__content-inner">
                <div className="offcanvas__menu">
                  <MobileMenu />
                </div>
                <div className="offcanvas__contact mb-30">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <i className="fa-regular fa-phone" />
                      <Link href="tel:+1234567890">+123 456 7890</Link>
                    </li>
                    <li>
                      <i className="fa-regular fa-envelope" />
                      <Link href="mailto:info@example.com">
                        info@example.com
                      </Link>
                    </li>
                    <li>
                      <i className="fa-regular fa-location-dot" />
                      <span>123 Street, New York, USA</span>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas__social">
                  <h4>Follow Us</h4>
                  <ul>
                    <li>
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <i className="fa-brands fa-youtube" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
