export function IslandCard(island){

return `
<a
href="${island.link}"
class="island-card island-${island.id}"
>

<img
src="${island.image}"
alt="${island.title}"
loading="lazy"
decoding="async"
>

<div class="island-info">

<h3>${island.title}</h3>

<p>${island.year}</p>

<span>${island.description}</span>

</div>

</a>

`;

}