import { ProjectCard } from "./ProjectCard.js";

export function ProjectsGrid(projects){

return `

<section class="projects-grid-section">

<div class="java-title">

<p>PROJECT ARCHIVE</p>

<h2>Other Adventures</h2>

</div>

<div class="projects-grid">

${projects.map(ProjectCard).join("")}

</div>

</section>

`;

}