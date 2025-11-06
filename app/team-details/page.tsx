import Layout from "../../src/components/layout/Layout"
import TeamDetails1 from "../../src/components/sections/TeamDetails1"
import BrandSlider from "../../src/components/sections/BrandSlider"

export default function TeamDetails(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="team details">
				<TeamDetails1 />
				<BrandSlider />
			</Layout>
		</>
	)
}
