const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const randomBtn = document.querySelector('.random-btn');
const colorPlace = document.getElementById('color');

randomBtn.addEventListener('click', function(){
    let hexColor = '#';

    for(let i = 0; i < 6; i++){
        let number = getRandomNumber();
        hexColor += hex[number];
    }
    
    colorPlace.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

});

function getRandomNumber(){
    const randomNumber = Math.round(Math.random() * (hex.length -1));
    return randomNumber;
}