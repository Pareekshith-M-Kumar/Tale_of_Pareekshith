import { Navbar } from "../components/navbar.js";
import { ResumeSection } from "../components/ResumeSection.js";
import { Footer } from "../components/Footer.js";

export function ResumePage(){

return `

${Navbar()}

${ResumeSection()}

${Footer()}

`;

}