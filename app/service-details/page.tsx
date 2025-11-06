import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import ServiceDetails1 from "../../src/components/sections/ServiceDetails1"
export default function ServicesDetails(): React.ReactElement {
	return (
		<>
			<Layout
				headerStyle={1}
				footerStyle={1}
				breadcrumbTitle="Services details"
			>
				<ServiceDetails1 />
				<Brand1 />
			</Layout>
		</>
	)
}
