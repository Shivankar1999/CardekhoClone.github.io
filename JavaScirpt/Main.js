// Image Slider Start

const slides = document.querySelectorAll('.slide');
const Nbtn = document.querySelector('#next');
const Pbtn = document.querySelector('#prev');
  
const auto = true;
const interval = 5000 ;
let SlideInterval;


const nextSlide = () =>{
    // Get Current Class
    const Current = document.querySelector('.current');
    // Remove Current CLASS
    Current.classList.remove('current');
    // Check for nextSlide
    if(Current.nextElementSibling){
        // add current to nextsibling
        Current.nextElementSibling.classList.add('current');
    }else{
        // Add Current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => Current.classList.remove('current'));
}
const prevSlide = () =>{
    // Get Current Class
    const Current = document.querySelector('.current');
    // Remove Current CLASS
    Current.classList.remove('current');
    // Check for nextSlide
    if(Current.previousElementSibling){
        // add current to prevsibling
        Current.previousElementSibling.classList.add('current');
    }else{
        // Add Current to last
        slides[slides.length -1].classList.add('current');
    }
    setTimeout(() => Current.classList.remove('current'));
}

// Buttons Event

Nbtn.addEventListener('click', e =>
{ nextSlide();
  
    if(auto){
        clearInterval(SlideInterval);
        SlideInterval = setInterval(() => {
            nextSlide();
        }, interval);
    }
    
    
});
Pbtn.addEventListener('click', e => {prevSlide()
    if(auto){
        clearInterval(SlideInterval);
        SlideInterval = setInterval(() => {
            nextSlide();
        }, interval);
    }

});

//   Set auto

if(auto){
    SlideInterval = setInterval(() => {
        nextSlide();
    }, interval);
}




























// Image Slider End