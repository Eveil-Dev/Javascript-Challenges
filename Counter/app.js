const buttons = document.querySelectorAll('.btn');
const numberPlace = document.getElementById('number-place')

let currentNumber = 0;

buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const button = e.currentTarget;
        

        if(button.classList.contains('decrease')){
            currentNumber--;
        }else if(button.classList.contains('increase')){
            currentNumber++;
        }else if(button.classList.contains('reset')){
            currentNumber = 0;
        }

        if(currentNumber < 0){
            numberPlace.style.color = '#ae2012';
        }else if(currentNumber == 0){
            numberPlace.style.color = '#ee9b00'
        }else if(currentNumber > 0){
            numberPlace.style.color = '#0a9396';
        }

        numberPlace.textContent = currentNumber;
    });
});