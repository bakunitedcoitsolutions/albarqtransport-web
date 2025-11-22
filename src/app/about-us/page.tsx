import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Achievements from "@/components/sections/Achievements";
export default function AboutUsPage(): React.ReactElement {
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.aboutUs"
        breadcrumbTitle="menu.aboutUsTitle"
      >
        <About1 showMoreButton={false} />
        <Achievements />
      </Layout>
    </>
  );
}
