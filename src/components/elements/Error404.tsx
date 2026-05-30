"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface Error404Props {
  title?: string;
  message?: string;
  btnText?: string;
  btnLink?: string;
}

export default function Error404({
  title,
  message,
  btnText,
  btnLink = "/",
}: Error404Props): React.ReactElement {
  const { isRTL } = useLanguage();

  const defaultTitle = isRTL ? "الصفحة غير موجودة" : "Page not found";
  const defaultMessage = isRTL
    ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها."
    : "The page you are looking for does not exist or has been moved.";
  const defaultBtnText = isRTL ? "العودة للرئيسية" : "Back to Home";

  return (
    <section className="Error-section section-padding fix bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items text-center">
              <div className="error-image wow fadeInUp mb-8" data-wow-delay=".3s">
                <img src="/assets/img/404.png" alt="404" className="mx-auto" />
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".5s">
                <span>Oops!</span> {title || defaultTitle}
              </h2>
              <p className="wow fadeInUp mt-4 mb-8 text-gray-500 max-w-md mx-auto" data-wow-delay=".7s">
                {message || defaultMessage}
              </p>
              <Link
                href={btnLink}
                className="theme-btn wow fadeInUp"
                data-wow-delay=".8s"
              >
                {btnText || defaultBtnText}
                <i className="fa-regular fa-arrow-right rtl:rotate-180! ltr:ml-2! rtl:mr-2!" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
