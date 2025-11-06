import Layout from "../../src/components/layout/Layout"
import Brand1 from "../../src/components/sections/Brand1"
import ProjectDetails from "../../src/components/sections/ProjectDetails"
export default function ProjectDetailsPage(): React.ReactElement {
	return (
		<>
			<Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project Details">
				<ProjectDetails />
				<Brand1 />
			</Layout>
		</>
	)
}
