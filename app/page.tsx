import Layout from "../src/components/layout/Layout";
import About1 from "../src/components/sections/About1";
import Brand1 from "../src/components/sections/Brand1";
import Contact from "../src/components/sections/Contact";
import CtaBanner from "../src/components/sections/CtaBanner";
import Faq from "../src/components/sections/Faq";
import Hero1 from "../src/components/sections/Hero1";
import News1 from "../src/components/sections/News1";
import OurSkills from "../src/components/sections/OurSkills";
import Project1 from "../src/components/sections/Project1";
import Service1 from "../src/components/sections/Service1";
import Team1 from "../src/components/sections/Team1";
import Testimonial1 from "../src/components/sections/Testimonial1";

export default function Home(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
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
