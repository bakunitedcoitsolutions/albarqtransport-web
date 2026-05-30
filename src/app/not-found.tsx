import Layout from "@/components/layout/Layout";
import Error404 from "@/components/elements/Error404";

export default function NotFoundPage(): React.ReactElement {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <Error404 />
    </Layout>
  );
}
