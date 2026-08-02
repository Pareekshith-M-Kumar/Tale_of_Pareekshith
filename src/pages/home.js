import { Navbar } from "../components/navbar.js";
import { Hero } from "../components/hero.js";
import { Journey } from "../components/journey.js";
import { JourneyMap } from "../components/journeyMap.js";

export function Home() {
  return `
    ${Navbar()}
    ${Hero()}
    ${Journey()}
    ${JourneyMap()}
  `;
}