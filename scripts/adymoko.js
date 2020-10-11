

const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

alo=()=> alert("Thanks for checking this out!");
alo2=()=> p2.classList.toggle("purple");

alo1=()=> {
p1.innerHTML="My first experience with coding was at school. It was taught horribly (Pascal language) and I didn't understand anything (we were coding on paper and rarely touched a computer, bleahh!). After about 10 years I found this web design thing and loved how easy you could build something tangible.";}

p1.addEventListener(`mouseover`, alo1);
p2.addEventListener(`mouseover`, alo2);

