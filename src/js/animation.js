export function initReveal(){

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.classList.add("reveal");

observer.observe(section);

});

}