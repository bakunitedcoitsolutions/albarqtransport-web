import Layout from "@/components/layout/Layout";
import About1 from "@/components/sections/About1";
import Brand1 from "@/components/sections/Brand1";
import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/sections/CtaBanner";
import Faq from "@/components/sections/Faq";
import Hero1 from "@/components/sections/Hero1";
import News1 from "@/components/sections/News1";
import OurSkills from "@/components/sections/OurSkills";
import Project1 from "@/components/sections/Project1";
import Service1 from "@/components/sections/Service1";
import Team1 from "@/components/sections/Team1";
import Testimonial1 from "@/components/sections/Testimonial1";
export default function HomeOne(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="">
        <Hero1 />
        <About1 />
        <Service1 />
        <CtaBanner />
        <OurSkills />
        <Testimonial1 />
        <Project1 />
        <Faq />
        <Team1 />
        <Contact />
        <News1 />
        <Brand1 />
      </Layout>
    </>
  );
}
