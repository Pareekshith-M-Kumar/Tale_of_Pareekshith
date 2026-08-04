import { Navbar } from "../components/navbar.js";
import { ProjectsHero } from "../components/ProjectsHero.js";
import { FeaturedProject } from "../components/FeaturedProject.js";
import { ProjectIslandGrid } from "../components/ProjectIslandGrid.js";
import { ReturnMap } from "../components/ReturnMap.js";

import { projectsData } from "../data/projectsData.js";

export function ProjectsPage(){

return `

${Navbar()}

${ProjectsHero(projectsData)}

${FeaturedProject(projectsData.featured)}

${ProjectIslandGrid(projectsData.projects)}

${ReturnMap()}

`;

}