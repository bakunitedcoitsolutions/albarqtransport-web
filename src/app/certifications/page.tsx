import Layout from "@/components/layout/Layout";
import { ALL_CERTIFICATES } from "@/utils";
import Link from "next/link";

export default function Certifications(): React.ReactElement {
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
              {ALL_CERTIFICATES.map((cert: any) => (
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
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
