"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { en as enTranslations, ar as arTranslations } from "@/locales";

export type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation data from JSON files
const translations = {
  en: enTranslations,
  ar: arTranslations,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // const [language, setLanguageState] = useState<Language>("ar");
  // const [isRTL, setIsRTL] = useState(true);
  const [language, setLanguageState] = useState<Language>("en");
  const [isRTL, setIsRTL] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
        setLanguageState(savedLanguage);
        setIsRTL(savedLanguage === "ar");
      } else {
        // Default to Arabic if no saved language
        // setLanguageState("ar");
        // setIsRTL(true);
        // // Default to English if no saved language
        setLanguageState("en");
        setIsRTL(false);
      }
    }
  }, []);

  // Update RTL state when language changes
  useEffect(() => {
    setIsRTL(language === "ar");

    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      // Update document direction and lang attribute
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = language;

      // Update body class for RTL styling and font
      if (language === "ar") {
        document.body.classList.add("rtl");
        document.body.classList.add("font-arabic");
        document.body.classList.remove("font-latin");
      } else {
        document.body.classList.remove("rtl");
        document.body.classList.add("font-latin");
        document.body.classList.remove("font-arabic");
      }
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Check if we're in the browser environment
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // Helper function to get nested values from object using dot notation
  const getNestedValue = (obj: any, path: string): string => {
    return path.split(".").reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  };

  const t = (key: string): string => {
    const translation = getNestedValue(translations[language], key);
    return translation || key;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    isRTL,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
