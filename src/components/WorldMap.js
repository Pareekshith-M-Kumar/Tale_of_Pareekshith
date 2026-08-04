import { world } from "../data/worldData.js";
import { IslandCard } from "./IslandCard.js";

export function WorldMap(){

return `

<section id="adventure-map" class="world-map">

<div class="world-title">

<p>YOUR JOURNEY</p>

<h2>The Adventure Map</h2>

<span>Every chapter forged a new skill.</span>

</div>

<div class="world-grid">
<svg class="journey-path" viewBox="0 0 1400 1900">
<!-- Beginning → Academy -->
<path
d="M300 180 C520 250,820 280,1080 420"
/>

<!-- Academy → Java -->
<path
d="M1080 420 C1040 560,760 650,420 760"
/>

<!-- Java → AI -->
<path
d="M420 760 C520 900,760 920,980 900"
/>

<!-- AI → Cloud -->
<path
d="M980 900 C900 1080,650 1160,330 1260"
/>

<!-- Cloud → Projects -->
<path
d="M330 1260 C520 1450,860 1500,1090 1580"
/>

<!-- Projects → Resume -->
<path
d="M1090 1580 C1040 1780,860 1880,700 2000"
/>
</svg>
${world.map(IslandCard).join("")}

</div>

</section>

`;

}