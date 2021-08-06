const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const nav = document.querySelector('.sidebar');

menuBtn.addEventListener('click', function(){
    nav.classList.toggle('open-menu');
});

closeBtn.addEventListener('click', function(){
    nav.classList.remove('open-menu');
})