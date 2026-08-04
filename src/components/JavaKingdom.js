import { javaSkills } from "../data/javaData.js";
import { JavaSkillCard } from "./JavaSkillCard.js";

export function JavaKingdom(){

return `

<section class="java-kingdom">

<div class="java-title">

<p>CHAPTER III</p>

<h2>JAVA KINGDOM</h2>

<span>
Where backend engineering became my strongest weapon.
</span>

</div>

<div class="java-grid">

${javaSkills.map(JavaSkillCard).join("")}

</div>

</section>

`;

}