import Layout from "@/components/layout/Layout";
import Brand1 from "@/components/sections/Brand1";
import Equipment from "@/components/sections/Equipment";
export default function Project(): React.ReactElement {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
        <Equipment />
        <Brand1 />
      </Layout>
    </>
  );
}
