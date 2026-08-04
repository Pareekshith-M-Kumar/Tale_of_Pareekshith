export function ResumeHero(data){

return `

<section class="kingdom-hero">

<div class="hero-overlay"></div>

<div class="kingdom-content">

<p class="chapter">

${data.chapter}

</p>

<h1>

${data.title}

</h1>

<p class="subtitle">

${data.subtitle}

</p>

</div>

</section>

`;

}