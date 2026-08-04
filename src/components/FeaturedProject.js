export function FeaturedProject(project){

return `

<section class="java-project">

<div class="project-content">

<div class="project-left">

<p>FEATURED PROJECT</p>

<h2>${project.title}</h2>

<span>

${project.description}

</span>

<ul>

${project.tech.map(t=>`
<li>✓ ${t}</li>
`).join("")}

</ul>

<div class="project-buttons">

<a href="${project.github}" class="gold-btn">

View Code

</a>

</div>

</div>

<div class="project-right">

<div class="project-image">

${project.icon}

</div>

</div>

</div>

</section>

`;

}