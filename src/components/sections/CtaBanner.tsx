"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function CtaBanner() {
  const { t } = useLanguage();
  return (
    <>
      <section className="cta-banner-section bg-white! section-padding">
        <div className="container">
          <div
            className="cta-banner-wrapper fix bg-cover"
            style={{ backgroundImage: 'url("assets/img/cta-bg.jpg")' }}
          >
            <h2
              className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
              dangerouslySetInnerHTML={{ __html: t("cta.title") }}
            />
            <div
              className="theme-btn bg-white wow fadeInUp cursor-pointer! flex! items-center! justify-center! text-sm! md:text-base! xl:text-lg! rtl:text-xl! rtl:md:text-2xl!"
              data-wow-delay=".6s"
              onClick={() => {
                window?.open?.("/assets/pdf/profile.pdf", "_blank");
              }}
            >
              {t("cta.viewProfile")}
              <i
                className={`fa-regular fa-arrow-right rtl:rotate-180! rtl:mr-3!`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
