const container = document.querySelector('.slider-container');
const slides =document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

let offset = 0;
let slideIncrement = 0;
let slideDecrement = slides.length-1;

setInterval(() => {
    rightArrow.click();
}, 2500)

rightArrow.addEventListener('click', () => {
    rightArrow.disabled = true;
    offset = slides[0].offsetWidth;
    container.style.transition = "left ease-in-out 500ms";
    container.style.left = -offset + 'px';
    setTimeout(() => {
        container.style.transition = "none";
        slides[slideIncrement].style.order = slides.length - 1;
        container.style.left = 0;
        slideIncrement++;
        slideDecrement = slideIncrement - 1;
        if (slideIncrement === slides.length) {
            slideIncrement = 0;
            slides.forEach(slide => {
                slide.style.order = "initial";
            });
        }
        rightArrow.disabled = false;
    }, 500)
});

leftArrow.addEventListener('click', () => {
    leftArrow.disabled = true;
    offset = slides[0].offsetWidth;
    container.style.transition = "none";
    if (slideDecrement < 0) {
        slides.forEach(slide => {
            slide.style.order = "initial";
        });
        slideDecrement = slides.length - 1;
    }
    slides[slideDecrement].style.order = "-1";
    container.style.left = -offset + 'px';
    setTimeout(() => {
        container.style.transition = "left ease-in-out 500ms";
        container.style.left = 0;
    }, 1)
    setTimeout(() => {
        slideDecrement--;
        slideIncrement = slideDecrement + 1;
        leftArrow.disabled = false;
    }, 500)
})