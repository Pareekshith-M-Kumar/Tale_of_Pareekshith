import { aiSkills } from "../data/aiSkills.js";

export function AIGrid(){

return `

<section class="skill-grid">

${aiSkills.map(skill=>`

<div class="java-card reveal">

<div class="icon">${skill.icon}</div>

<h3>${skill.title}</h3>

<p>${skill.text}</p>

</div>

`).join("")}

</section>

`;

}