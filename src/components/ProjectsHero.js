export function ProjectsHero(data){

return `

<section class="projects-hero">

    <div class="projects-overlay"></div>

    <div class="projects-content">

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