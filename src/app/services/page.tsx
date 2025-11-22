import Layout from "@/components/layout/Layout";
import AllServices from "@/components/sections/AllServices";
export default function Services(): React.ReactElement {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.services"
        breadcrumbTitle="menu.servicesTitle"
      >
        <AllServices />
      </Layout>
    </>
  );
}
