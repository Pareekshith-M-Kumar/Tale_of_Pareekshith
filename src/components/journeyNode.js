export function JourneyNode(node){

return `

<div class="journey-node ${node.side}">

<div class="journey-circle">

${node.icon}

</div>

<div class="journey-card">

<h3>${node.title}</h3>

<p>${node.year}</p>

</div>

</div>

`;

}