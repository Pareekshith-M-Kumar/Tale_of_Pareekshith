import { Navbar } from "./navbar.js";
import { KingdomHero } from "./KingdomHero.js";
import { SkillGrid } from "./SkillGrid.js";
import { FeaturedProject } from "./FeaturedProject.js";
import { ReturnMap } from "./ReturnMap.js";
import { Footer } from "./Footer.js";

export function KingdomPage(data){

return `

${Navbar()}

${KingdomHero(data)}

${SkillGrid(data.skills)}

${FeaturedProject(data.project)}

${ReturnMap()}

${Footer()}

`;

}