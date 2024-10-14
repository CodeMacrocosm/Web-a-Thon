const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const container = document.querySelector(".container");

h1.addEventListener("mouseover",()=>{
    container.style.backgroundColor='white';
})

h1.addEventListener("mouseleave",()=>{
    container.style.backgroundColor='aqua';
})

p.addEventListener("mouseover",()=>{
    container.style.backgroundColor='grey';
})

p.addEventListener("mouseleave",()=>{
    container.style.backgroundColor='aqua';
})