import { ProjectCard } from "./ProjectCard.js";

export function ProjectIslandGrid(projects){

return `

<section class="projects-island">

<div class="projects-title">

<p>OTHER PROJECTS</p>

<h2>More Adventures</h2>

</div>

<div class="projects-grid">

${projects.map(ProjectCard).join("")}

</div>

</section>

`;

}