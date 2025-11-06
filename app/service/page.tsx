import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import Service1 from "../../src/components/sections/Service1"
export default function Services(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Services">
				<Service1 />
				<Brand1 />
			</Layout>
		</>
	)
}
