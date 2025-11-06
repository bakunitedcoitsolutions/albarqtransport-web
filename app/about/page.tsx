import Layout from "../../src/components/layout/Layout"
import About1 from "../../src/components/sections/About1"
import Achivements from "../../src/components/sections/Achivements"
import Brand1 from "../../src/components/sections/Brand1"
import Team1 from "../../src/components/sections/Team1"
import Testimonial1 from "../../src/components/sections/Testimonial1"
export default function About(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About">
				<About1 />
				<Achivements />
				<Testimonial1 />
				<Team1 />
				<Brand1 />
			</Layout>
		</>
	)
}
