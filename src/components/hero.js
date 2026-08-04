import heroBg from "../assets/hero/hero_bg.png";
import character from "../assets/hero/character.png";
import resume from "../assets/resume/resume.pdf";

export function Hero() {

    return `

<section class="hero">

    <img
        src="${heroBg}"
        class="hero-bg"
        alt="Background">
        
    <div class="hero-overlay"></div>
    <div class="hero-stars"></div>

    <div class="hero-wrapper">

        <div class="hero-left">

            <p class="hero-top">
                WELCOME TO MY WORLD
            </p>

            <h1>

                I DON'T JUST WRITE CODE,

                <span>I BUILD EXPERIENCES.</span>

            </h1>

            <p class="hero-text">
                Java Backend Engineer<br>
                AI Explorer<br>
                Cloud Enthusiast
            </p>

            <div class="hero-buttons">

                <button class="primary-btn">

                    <a href="#adventure-map" class="primary-btn">

    Begin Adventure

</a>

                </button>

                <a

href="${resume}"

download="Pareekshith_M_Kumar_Resume.pdf"

class="secondary-btn"

>

Download Resume

</a>

            </div>

        </div>

        <div class="hero-right">

            <img
                src="${character}"
                class="character"
                alt="Character">

        </div>

    </div>

</section>

`;

}