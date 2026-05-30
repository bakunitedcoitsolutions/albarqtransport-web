import Layout from "@/components/layout/Layout";
import NewsDetailsSection from "@/components/sections/NewsDetailsSection";

export default function NewsDetails(): React.ReactElement {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText={"news.breadcrumbText"}
        breadcrumbTitle={"news.newsTitle"}
      >
        <NewsDetailsSection />
      </Layout>
    </>
  );
}
