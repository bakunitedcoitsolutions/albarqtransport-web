import Layout from "@/components/layout/Layout";
import About2 from "@/components/sections/About2";
import Achievements from "@/components/sections/Achievements";
import Brand2 from "@/components/sections/Brand2";
import CtaBanner2 from "@/components/sections/CtaBanner2";
import Hero2 from "@/components/sections/Hero2";
import News2 from "@/components/sections/News2";
import Pricing from "@/components/sections/Pricing";
import Project2 from "@/components/sections/Project2";
import Service2 from "@/components/sections/Service2";
import Team2 from "@/components/sections/Team2";
import Testimonial2 from "@/components/sections/Testimonial2";
export default function Home2(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Hero2 />
        <About2 />
        <Service2 />
        <Brand2 />
        <Project2 />
        <Team2 />
        <Pricing />
        <CtaBanner2 />
        <Achievements />
        <Testimonial2 />
        <News2 />
      </Layout>
    </>
  );
}
