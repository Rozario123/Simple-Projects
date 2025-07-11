const left = document.querySelector('.fa-arrow-left');
const right = document.querySelector('.fa-arrow-right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.image')

let slideNumber=1;
const length= images.length;

const nextSlide =()=>{
slider.style.transform = `translateX(-${slideNumber*750}px)`;
   slideNumber++;
}
const prevSlide =()=>{
slider.style.transform = `translateX(-${(slideNumber-2)*750}px)`;
   slideNumber--;
}
const getfirstSlide =()=>{
      slider.style.transform = `translateX(0px)`;
   slideNumber=1;

}
const getlastSlide =()=>{
      slider.style.transform = `translateX(-${(length-1)*750}px)`;
   slideNumber= length;

}
right.addEventListener('click',() => {
   slideNumber<length?
 nextSlide():

    getfirstSlide()


});
left.addEventListener('click',() => {
   slideNumber > 1 ? prevSlide():getlastSlide()


});

