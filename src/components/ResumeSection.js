export function ResumeSection() {

return `

<section class="resume-section">

    <div class="resume-header">

        <p>MY RESUME</p>

        <h2>Resume Castle</h2>

        <span>
            Everything about my education, skills and journey.
        </span>

    </div>

    <div class="resume-container">

        <iframe
            src="/resume.pdf"
            class="resume-viewer">
        </iframe>

    </div>

    <div class="resume-buttons">

        <a href="/resume.pdf"
           download
           class="gold-btn">

            Download Resume

        </a>

        <a href="/resume.pdf"
           target="_blank"
           class="outline-btn">

            Open Full Screen

        </a>

    </div>

</section>

`;

}