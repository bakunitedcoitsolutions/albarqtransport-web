import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import OurSkills from "../../src/components/sections/OurSkills"
import Pricing from "../../src/components/sections/Pricing"
export default function PricingPage(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="pricing">
				<Pricing />
				<OurSkills alt />
				<Brand1 alt />
			</Layout>
		</>
	)
}
