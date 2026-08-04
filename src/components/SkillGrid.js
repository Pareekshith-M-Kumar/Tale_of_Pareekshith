import { SkillCard } from "./SkillCard.js";

export function SkillGrid(skills){

    return `

<section class="java-skills">

<div class="java-title">

<p>MASTERED SKILLS</p>

<h2>Weapons & Tools</h2>

</div>

<div class="java-grid">

${skills.map(SkillCard).join("")}

</div>

</section>

`;

}