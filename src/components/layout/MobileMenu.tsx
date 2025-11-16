"use client";

import { useState } from "react";
import Link from "next/link";

const menuLinks = [
  {
    href: "/",
    name: "Home",
    navItemClass: "active menu-thumb",
  },
  {
    href: "/about",
    name: "About Us",
    navItemClass: "has-dropdown",
    submenu: [
      {
        href: "/about/our-company",
        name: "Our Company",
      },
      {
        href: "/about/our-clients",
        name: "Our Clients",
      },
    ],
  },
  {
    href: "/services",
    name: "Services",
    submenu: [
      {
        href: "/services/water",
        name: "Water",
      },
      {
        href: "/services/transportation",
        name: "Transportation",
      },
      {
        href: "/services/lowbed",
        name: "Lowbed",
      },
    ],
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/certificates",
    name: "Certificates",
  },
  {
    href: "/contact-us",
    name: "Contact Us",
  },
];

export default function MobileMenu() {
  const [isAccordion, setIsAccordion] = useState(0);

  const handleAccordion = (key: any) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          {/* <Link
            href="/#nav"
            className="meanmenu-reveal"
            style={{ right: 0, left: "auto", display: "inline" }}
          >
            <span>
              <span>
                <span />
              </span>
            </span>
          </Link> */}
          <nav className="mean-nav">
            <ul>
              <li className="active d-xl-none">
                <Link href="/">Home</Link>
              </li>
              <li className="has-dropdown ">
                <Link href="/team" className="border-none">
                  About Us
                  <i className="fa-regular fa-plus" />
                </Link>
                <ul
                  className="submenu"
                  style={{ display: `${isAccordion == 1 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/about/our-company">Our Company</Link>
                  </li>
                  <li>
                    <Link href="/about/our-clients">Our Clients</Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  onClick={() => handleAccordion(1)}
                  style={{ fontSize: 18 }}
                >
                  <i className="far fa-plus" />
                </a>
              </li>
              <li className="has-dropdown">
                <Link href="/news">
                  Services
                  <i className="fa-regular fa-plus" />
                </Link>
                <ul
                  className="submenu"
                  style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}
                >
                  <li>
                    <Link href="/services/water">Water</Link>
                  </li>
                  <li>
                    <Link href="/services/transportation">Transportation</Link>
                  </li>
                  <li>
                    <Link href="/services/lowbed">Lowbed</Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  onClick={() => handleAccordion(2)}
                  style={{ fontSize: 18 }}
                >
                  <i className="far fa-plus" />
                </a>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/certificates">Certificates</Link>
              </li>
              <li className="mean-last">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
