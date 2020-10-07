const quest = document.getElementById('question');
const button = document.getElementById('button');

function changeColor() {
    quest.classList.add('blue');
}

button.addEventListener('click', changeColor);