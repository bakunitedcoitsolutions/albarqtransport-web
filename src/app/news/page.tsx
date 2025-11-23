import Layout from "@/components/layout/Layout";
import NewsSection from "@/components/sections/NewsSection";

export default function News(): React.ReactElement {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.news"
        breadcrumbTitle="menu.newsTitle"
      >
        <NewsSection />
      </Layout>
    </>
  );
}
