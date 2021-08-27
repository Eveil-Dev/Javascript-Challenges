const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWrapper = document.querySelector('.slide-wrapper')


let items = document.querySelectorAll('.item');

const previous = () => {
    const lastItem = items[items.length - 1];
    slideWrapper.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    slideWrapper.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

prevBtn.addEventListener('click', previous);
nextBtn.addEventListener('click', next);

