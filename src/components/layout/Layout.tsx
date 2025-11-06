"use client";

import { useEffect, useState } from "react";
import { LayoutProps } from "../../types";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Header1 from "./header/Header1";
import Header2 from "./header/Header2";
import Header3 from "./header/Header3";
import Header4 from "./header/Header4";
import Offcanvas from "./Offcanvas";
import Search from "./Search";

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false);
  // MobileMenu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  // OffCanvas
  const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
  const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

  // Search
  const [isSearch, setSearch] = useState<boolean>(false);
  const handleSearch = () => setSearch(!isSearch);

  useEffect(() => {
    const WOW = require("wowjs") as any;
    const wowInstance = new WOW.WOW({
      live: false,
    });
    window.wow = wowInstance;
    wowInstance.init();

    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="top" />
      {/* <LinkddClassBody /> */}
      <div className="mouse-cursor cursor-outer" />
      <div className="mouse-cursor cursor-inner" />

      <Offcanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />

      {!headerStyle && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      )}
      {headerStyle == 1 ? (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}
      {headerStyle == 2 ? (
        <Header2
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}
      {headerStyle == 3 ? (
        <Header3
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}
      {headerStyle == 4 ? (
        <Header4
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
          isSearch={isSearch}
          handleSearch={handleSearch}
        />
      ) : null}
      <Search isSearch={isSearch} handleSearch={handleSearch} />

      <main className="main">
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {children}
      </main>

      {!footerStyle && <Footer1 />}
      {footerStyle == 1 ? <Footer1 /> : null}
      {footerStyle == 2 ? <Footer2 /> : null}

      <BackToTop target="#top" />
    </>
  );
}
