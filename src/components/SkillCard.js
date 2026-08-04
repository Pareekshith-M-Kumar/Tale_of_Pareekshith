export function SkillCard(skill){

return `

<div class="java-card">

    <div class="java-icon">

        ${skill.icon}

    </div>

    <h3>${skill.title}</h3>

    <p>${skill.description}</p>

</div>

`;

}