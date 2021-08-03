const colors = ['red', 'blue', 'yellow', '#8431CC', 'rgb(49, 204, 85)'];

const randomBtn = document.querySelector('.random-btn');
const colorPlace = document.getElementById('color');

randomBtn.addEventListener('click', function(){
    const number = getRandomNumber();
    colorPlace.textContent = colors[number];
    document.body.style.backgroundColor = colors[number];

});

function getRandomNumber(){
    const randomNumber = Math.round(Math.random() * (colors.length -1));
    return randomNumber;
}