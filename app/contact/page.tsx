import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import ContactInfo from "../../src/components/sections/contact/ContactInfo"
import ContactInfo2 from "../../src/components/sections/contact/ContactInfo2"
import ContactSection from "../../src/components/sections/contact/ContactSection"

export default function Contact(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
				<ContactInfo />
				<ContactSection />
				<ContactInfo2 />
				<Brand1 />
			</Layout>
		</>
	)
}
