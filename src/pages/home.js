import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";
import { WorldMap } from "../components/WorldMap.js";
import { ContactCamp } from "../components/ContactCamp.js";
import { Footer } from "../components/Footer.js";

export function Home() {

return `

${Navbar()}

${Hero()}

${WorldMap()}

${ContactCamp()}

${Footer()}

`;

}