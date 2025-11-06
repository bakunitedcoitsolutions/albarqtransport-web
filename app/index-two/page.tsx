import Layout from "../../src/components/layout/Layout"
import About2 from "../../src/components/sections/About2"
import Achivements from "../../src/components/sections/Achivements"
import Brand2 from "../../src/components/sections/Brand2"
import CtaBanner2 from "../../src/components/sections/CtaBanner2"
import Hero3 from "../../src/components/sections/Hero3"
import News2 from "../../src/components/sections/News2"
import Pricing from "../../src/components/sections/Pricing"
import Project2 from "../../src/components/sections/Project2"
import Service2 from "../../src/components/sections/Service2"
import Team2 from "../../src/components/sections/Team2"
import Testimonial2 from "../../src/components/sections/Testimonial2"
export default function HomeTwo(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={4} footerStyle={2} breadcrumbTitle="">
				<Hero3 />
				<About2 />
				<Service2 />
				<Brand2 />
				<Project2 />
				<Team2 />
				<Pricing />
				<CtaBanner2 />
				<Achivements />
				<Testimonial2 />
				<News2 />
			</Layout>
		</>
	)
}
