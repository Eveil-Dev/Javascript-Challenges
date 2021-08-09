const overlay = document.querySelector('.overlay');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');

openBtn.addEventListener('click', function(){
    overlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function(){
    overlay.classList.remove('open-modal')
})