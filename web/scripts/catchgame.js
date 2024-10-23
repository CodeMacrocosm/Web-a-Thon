let basket = document.getElementById('basket');
let object = document.getElementById('object');
let scoreDisplay = document.getElementById('score');
let gameContainer = document.getElementById('gameContainer');
let score = 0;
let objectFallingSpeed = 2;
let gameWidth = gameContainer.offsetWidth;
let basketWidth = basket.offsetWidth;

window.addEventListener('keydown', function(event) {
    let basketLeft = basket.offsetLeft;
    if (event.key === 'ArrowLeft' && basketLeft > 0) {
        basket.style.left = (basketLeft - 20) + 'px';
    } else if (event.key === 'ArrowRight' && basketLeft < (gameWidth - basketWidth)) {
        basket.style.left = (basketLeft + 20) + 'px';
    }
});

function dropObject() {
    let objectLeft = Math.floor(Math.random() * (gameWidth - object.offsetWidth));
    object.style.left = objectLeft + 'px';
    object.style.top = '-30px';
    let fallingInterval = setInterval(function() {
        let objectTop = object.offsetTop;
        object.style.top = objectTop + objectFallingSpeed + 'px';
        let basketLeft = basket.offsetLeft;
        let basketTop = basket.offsetTop;
        if (objectTop + object.offsetHeight >= basketTop && 
            objectTop + object.offsetHeight <= basketTop + basket.offsetHeight &&
            objectLeft + object.offsetWidth >= basketLeft &&
            objectLeft <= basketLeft + basketWidth) {
            clearInterval(fallingInterval);
            score += 1;
            scoreDisplay.innerText = 'Score: ' + score;
            if (score % 10 === 0) {
                changeColors();
            }
            if (score % 10 === 0) {
                increaseSpeed();
            }
            dropObject();
        }
        if (objectTop > gameContainer.offsetHeight) {
            clearInterval(fallingInterval);
            alert('Game Over! Final Score: ' + score);
            resetGame();
        }
    }, 20);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColors() {
    const randomBasketColor = getRandomColor();
    const randomObjectColor = getRandomColor();
    const randomBorderColor = getRandomColor();
    basket.style.backgroundColor = randomBasketColor;
    object.style.backgroundColor = randomObjectColor;
    gameContainer.style.borderColor = randomBorderColor;
}

function increaseSpeed() {
    objectFallingSpeed += 0.5;
}

function resetGame() {
    score = 0;
    objectFallingSpeed = 3;
    scoreDisplay.innerText = 'Score: ' + score;
    dropObject();
}

dropObject();