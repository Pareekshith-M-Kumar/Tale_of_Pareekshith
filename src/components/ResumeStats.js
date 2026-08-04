export function ResumeStats(stats){

return `

<section class="resume-stats">

${stats.map(stat=>`

<div class="resume-card">

<h3>

${stat.value}

</h3>

<p>

${stat.title}

</p>

</div>

`).join("")}

</section>

`;

}