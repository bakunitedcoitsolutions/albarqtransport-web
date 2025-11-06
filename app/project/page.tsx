import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import Project1 from "../../src/components/sections/Project1"
export default function Project(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
				<Project1 />
				<Brand1 />
			</Layout>
		</>
	)
}
