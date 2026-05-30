"use client";

import Layout from "@/components/layout/Layout";
import { ALL_CERTIFICATES } from "@/utils";
import Link from "next/link";
import { useGetAllCertificates } from "@/lib/db/services/certificate/requests";
import { getSignedUrl } from "@/utils/storage";
import Skeleton from "@/components/ui/Skeleton";

export default function Certifications(): React.ReactElement {
  const { data: certsData, isLoading } = useGetAllCertificates();

  const hasCertsInDb = certsData && certsData.length > 0;
  const sortedCertificates = hasCertsInDb
    ? [...certsData].sort((a, b) => (a.displayOrderKey ?? 0) - (b.displayOrderKey ?? 0))
    : [];

  const renderSkeletons = () => {
    return Array.from({ length: 4 }).map((_, index) => (
      <div key={`skeleton-${index}`}>
        <div className="certificate-item overflow-hidden bg-white rounded-lg shadow-md aspect-[4/3] flex items-center justify-center p-4">
          <Skeleton className="rounded-md" containerClassName="w-full h-full" />
        </div>
      </div>
    ));
  };

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.certifications"
        breadcrumbTitle="menu.certificationsTitle"
      >
        <section className="bg-gray-100 pt-[80px]! pb-[60px]!">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {isLoading ? (
                renderSkeletons()
              ) : hasCertsInDb ? (
                sortedCertificates.map((cert) => {
                  const imageUrl = cert.certificateImage ? getSignedUrl(cert.certificateImage) : "";
                  const pdfUrl = cert.certificatePdf ? getSignedUrl(cert.certificatePdf) : "#";
                  return (
                    <div key={cert.id}>
                      <div className="certificate-item">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={`Certificate ${cert.id}`}
                            className="w-full h-auto rounded-lg shadow-md"
                          />
                        )}
                        <div className="certificate-overlay"></div>
                        <div className="certificate-icon-wrapper">
                          <Link href={pdfUrl} target="_blank">
                            <i className="fa-solid fa-link"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                ALL_CERTIFICATES.map((cert: any) => (
                  <div key={cert.id}>
                    <div className="certificate-item">
                      <img
                        src={cert.image}
                        alt={`Certificate ${cert.id}`}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                      <div className="certificate-overlay"></div>
                      <div className="certificate-icon-wrapper">
                        <Link href={cert.link} target="_blank">
                          <i className="fa-solid fa-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
