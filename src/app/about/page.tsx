import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Achievements from "@/components/sections/Achievements";
import Brand1 from "@/components/sections/Brand1";
import Team1 from "@/components/sections/Team1";
import Testimonial1 from "@/components/sections/Testimonial1";
export default function About(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About">
        <About1 />
        <Achievements />
        <Testimonial1 />
        <Team1 />
        <Brand1 />
      </Layout>
    </>
  );
}
