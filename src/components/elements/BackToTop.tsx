"use client";

import { useEffect, useState } from "react";
import { BackToTopProps } from "../../types";

export default function BackToTop({ target }: BackToTopProps) {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {hasScrolled && (
        <button id="back-top" className="back-to-top" onClick={handleClick}>
          <i className="fa-regular fa-arrow-up" />
        </button>
      )}
    </>
  );
}
