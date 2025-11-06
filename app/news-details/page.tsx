import Layout from "../../src/components/layout/Layout"
import NewsDetailsSection from "../../src/components/sections/NewsDetailsSection"
export default function NewsDetails(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="News Details">
				<NewsDetailsSection />
			</Layout>
		</>
	)
}
