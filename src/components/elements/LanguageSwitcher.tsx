"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({
  className = "",
}: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageChange = (newLanguage: "en" | "ar") => {
    setLanguage(newLanguage);
    setIsOpen(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`language-switcher ${className}`}>
      <div className="language-switcher__dropdown" ref={dropdownRef}>
        <button
          className={`language-switcher__button ${isOpen ? "active" : ""}`}
          type="button"
          aria-label="Language switcher"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <span className="language-switcher__current">
            {language === "en" ? "English" : "العربية"}
          </span>
          <i
            className={`fa-solid fa-chevron-down language-switcher__icon ${
              isOpen ? "rotated" : ""
            }`}
          ></i>
        </button>

        <div className={`language-switcher__menu ${isOpen ? "open" : ""}`}>
          <button
            className={`language-switcher__option ${
              language === "en" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("en")}
            type="button"
          >
            <span className="text">English</span>
            {language === "en" && (
              <i className="fa-solid fa-check language-switcher__check"></i>
            )}
          </button>

          <button
            className={`language-switcher__option ${
              language === "ar" ? "active" : ""
            }`}
            onClick={() => handleLanguageChange("ar")}
            type="button"
          >
            <span className="text">العربية</span>
            {language === "ar" && (
              <i className="fa-solid fa-check language-switcher__check"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
