import "./css/style.css";

import { Home } from "./pages/home.js";
import { JavaPage } from "./pages/javaPage.js";
import { AIPage } from "./pages/aiPage.js";
import { CloudPage } from "./pages/cloudPage.js";
import { ProjectsPage } from "./pages/projectsPage.js";
import { ResumePage } from "./pages/resumePage.js";
import { initReveal } from "./js/animation.js";

function render() {

    const route = window.location.hash || "#/";

    let html = "";

    switch(route){

        case "#/java":
            html = JavaPage();
            break;

        case "#/ai":
            html = AIPage();
            break;

        case "#/cloud":
            html = CloudPage();
            break;

        case "#/projects":
            html = ProjectsPage();
            break;
        case "#/resume":
            html = ResumePage();
            break;

        default:
            html = Home();

    }

    document.querySelector("#app").innerHTML = html;
    initReveal();

}

window.addEventListener("hashchange", render);

render();