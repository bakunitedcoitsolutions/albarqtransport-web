"use client";

import Layout from "@/components/layout/Layout";
import { ALL_CLIENTS } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGetAllClients } from "@/lib/db/services/client/requests";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";

export default function OurClients(): React.ReactElement {
  const { isRTL, t } = useLanguage();
  const { data: clientsData, isLoading } = useGetAllClients();

  const hasClientsInDb = clientsData && clientsData.length > 0;
  const sortedClients = hasClientsInDb
    ? [...clientsData].sort((a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0))
    : [];

  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <div key={`skeleton-${index}`} className="col-xl-4 col-lg-4 col-md-6">
        <div className="mb-8 h-[400px]">
          <div className="bg-white shadow-md p-8 h-full flex flex-col items-center justify-center border border-gray-100 rounded-md">
            {/* Logo Container Skeleton */}
            <div className="w-full h-40 md:h-44 flex items-center justify-center mb-6">
              <Skeleton className="rounded-md" containerClassName="w-3/4 h-3/4" />
            </div>

            {/* Divider Skeleton */}
            <div className="w-20 h-1 bg-slate-200 mb-4 shrink-0"></div>

            {/* Company Name Skeleton */}
            <div className="w-full shrink-0 min-h-[56px] flex flex-col items-center justify-center gap-2">
              <Skeleton className="rounded-md" containerClassName="w-2/3 h-5" />
              <Skeleton className="rounded-md" containerClassName="w-1/2 h-4" />
            </div>

            {/* Badge Skeleton */}
            <div className="mt-4 shrink-0">
              <Skeleton className="rounded" containerClassName="w-24 h-6" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.ourClients"
        breadcrumbTitle="menu.ourClientsTitle"
      >
        <section className="bg-gray-100 pt-20! pb-[60px]!">
          <div className="container">
            <div className="row">
              {isLoading ? (
                renderSkeletons()
              ) : hasClientsInDb ? (
                sortedClients.map((client, index) => {
                  const clientName = isRTL ? client.nameAr : client.nameEn;
                  const imageUrl = client.logo ? getSignedUrl(client.logo) : "";
                  return (
                    <div
                      key={client.id}
                      className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${(index + 1) * 100}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="mb-8 group h-[400px]">
                        <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col items-center justify-center border border-gray-100 hover:border-red-200 group-hover:-translate-y-2">
                          {/* Logo Container */}
                          <div className="w-full h-40 md:h-44 flex items-center justify-center mb-6 relative overflow-hidden shrink-0">
                            {imageUrl && (
                              <Image
                                src={imageUrl}
                                alt={clientName}
                                className="max-w-full max-h-full object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                                width={280}
                                height={176}
                                style={{ objectFit: "contain" }}
                              />
                            )}
                          </div>

                          {/* Divider */}
                          <div className="w-20 h-1 bg-primary! mb-4 group-hover:w-28 transition-all duration-300 shrink-0"></div>

                          {/* Company Name */}
                          <h3
                            className={`font-bold text-gray-800 text-center group-hover:text-primary! transition-colors duration-300 cursor-pointer shrink-0 min-h-[56px] flex items-center rtl:text-2xl! rtl:md:text-3xl! ${
                              !isRTL ? "text-lg" : ""
                            }`}
                          >
                            <Link
                              href={client.link || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group-hover:text-theme2! transition-colors duration-300"
                            >
                              {clientName}
                            </Link>
                          </h3>

                          {/* Badge */}
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                            <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rtl:text-sm!">
                              {t("clients.trustedPartner")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                ALL_CLIENTS.map((client, index) => {
                  const clientName = t(client.translationKey);
                  return (
                    <div
                      key={client.id}
                      className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                      data-wow-delay={`${(index + 1) * 100}ms`}
                      data-wow-duration="1500ms"
                    >
                      <div className="mb-8 group h-[400px]">
                        <div className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 p-8 h-full flex flex-col items-center justify-center border border-gray-100 hover:border-red-200 group-hover:-translate-y-2">
                          {/* Logo Container */}
                          <div className="w-full h-40 md:h-44 flex items-center justify-center mb-6 relative overflow-hidden shrink-0">
                            <Image
                              src={client.image}
                              alt={clientName}
                              className="max-w-full max-h-full object-contain opacity-80 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
                              width={280}
                              height={176}
                              style={{ objectFit: "contain" }}
                            />
                          </div>

                          {/* Divider */}
                          <div className="w-20 h-1 bg-primary! mb-4 group-hover:w-28 transition-all duration-300 shrink-0"></div>

                          {/* Company Name */}
                          <h3
                            className={`font-bold text-gray-800 text-center group-hover:text-primary! transition-colors duration-300 cursor-pointer shrink-0 min-h-[56px] flex items-center rtl:text-2xl! rtl:md:text-3xl! ${
                              !isRTL ? "text-lg" : ""
                            }`}
                          >
                            <Link
                              href={client.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group-hover:text-theme2! transition-colors duration-300"
                            >
                              {clientName}
                            </Link>
                          </h3>

                          {/* Badge */}
                          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                            <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rtl:text-sm!">
                              {t("clients.trustedPartner")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
