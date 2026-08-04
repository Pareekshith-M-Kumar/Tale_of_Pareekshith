export function ProjectCard(project){

return `

<div class="project-card">

    <div class="project-image">

        ${project.icon}

    </div>

    <h3>

        ${project.title}

    </h3>

    <p>

        ${project.description}

    </p>

    <div class="project-tech">

        ${project.tech.map(skill=>`<span>${skill}</span>`).join("")}

    </div>

    <div class="project-links">

        <a href="${project.github}">

            GitHub

        </a>

        <a href="${project.demo}">

            Demo

        </a>

    </div>

</div>

`;

}