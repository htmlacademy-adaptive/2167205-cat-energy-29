/* навигация */

const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.header-nav');

nav.classList.add('header-nav--js');
nav.classList.add('header-nav--closed');

toggle.addEventListener('click', () => {
    nav.classList.toggle('header-nav--closed');
    nav.classList.toggle('header-nav--opened');
});

/* слайдер */

const sliderButton = document.querySelector('.slider__button');

const slider = document.querySelector('.slider');

if(sliderButton){
  sliderButton.addEventListener('click', () => {
    const stateBefore = document.querySelector('.slider--state-before');
    const stateAfter = document.querySelector('.slider--state-after');
    if (stateBefore || stateAfter) {
      slider.classList.toggle('slider--state-before');
      slider.classList.toggle('slider--state-after');
    } else {
      slider.classList.add('slider--state-after');
    }
  });
}
