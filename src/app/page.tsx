import Layout from "@/components/layout/Layout";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import CtaBanner from "@/components/sections/CtaBanner";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import News from "@/components/sections/News";
import OurSkills from "@/components/sections/OurSkills";
import Equipment from "@/components/sections/Equipment";
import Service from "@/components/sections/Service";
import Materials from "@/components/sections/Materials";
import Testimonial from "@/components/sections/Testimonial";
import Certificates from "@/components/sections/Certificates";

export default function HomePage(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Hero />
        <About />
        <Service />
        <CtaBanner />
        <OurSkills />
        <Testimonial />
        <Equipment />
        <Faq />
        <Materials />
        <Contact />
        <News />
        <Clients />
        <Certificates />
      </Layout>
    </>
  );
}
