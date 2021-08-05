const menuBtn = document.getElementById('menu-btn');
const navgation = document.querySelector('.navigation') 

menuBtn.addEventListener('click', function(){
    navgation.classList.toggle('show-mobile-nav')
})