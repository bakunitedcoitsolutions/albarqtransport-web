import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
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
        <About showMoreButton={false} />
        <Achievements />
      </Layout>
    </>
  );
}
