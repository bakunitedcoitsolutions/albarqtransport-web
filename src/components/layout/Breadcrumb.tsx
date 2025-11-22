import Link from "next/link";
import { BreadcrumbProps } from "../../types";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Breadcrumb({
  breadcrumbText,
  breadcrumbTitle,
}: BreadcrumbProps) {
  const { t } = useLanguage();
  return (
    <>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/breadcrumb-bg.jpg")' }}
      >
        <div className="shape-image float-bob-y">
          <img src="/assets/img/vector.png" alt="img" />
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1
                  className="wow fadeInUp rtl:text-4xl! rtl:md:text-5xl! rtl:xl:text-7xl!"
                  data-wow-delay=".3s"
                >
                  {t(breadcrumbTitle)}
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp rtl:text-xl! rtl:md:text-2xl! rtl:lg:text-3xl!"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href="/">{t("menu.home")}</Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>{t(breadcrumbText)}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
