import Layout from "@/components/layout/Layout";
import NewsList from "@/components/sections/NewsList";
export default function News(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News">
        <NewsList />
      </Layout>
    </>
  );
}
