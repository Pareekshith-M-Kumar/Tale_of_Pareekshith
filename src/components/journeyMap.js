import { journeyData } from "../data/journeyData.js";
import { JourneyNode } from "./journeyNode.js";

export function JourneyMap(){

return `

<section class="journey-map">

<div class="journey-title">

<p>CHAPTERS</p>

<h2>THE ADVENTURE MAP</h2>

</div>

<div class="journey-line">

${journeyData.map(JourneyNode).join("")}

</div>

</section>

`;

}