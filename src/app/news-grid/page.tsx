import Layout from "@/components/layout/Layout";
import NewsSection from "@/components/sections/NewsSection";
export default function NewsGrid(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News Grid">
        <NewsSection />
      </Layout>
    </>
  );
}
