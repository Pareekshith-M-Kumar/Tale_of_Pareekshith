export function ResumeViewer(data){

return `

<section class="resume-viewer">

<div class="resume-box">

<iframe

src="${data.resume}"

title="Resume"

></iframe>

</div>

<div class="resume-actions">

<a href="${data.resume}" download>

Download Resume

</a>

<a href="${data.resume}" target="_blank">

Open Full Screen

</a>

</div>

</section>

`;

}