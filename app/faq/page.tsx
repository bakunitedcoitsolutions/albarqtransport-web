import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import Faq from "../../src/components/sections/Faq"
export default function FaqPage(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="faq">
				<Faq />
				<Brand1 />
			</Layout>
		</>
	)
}
