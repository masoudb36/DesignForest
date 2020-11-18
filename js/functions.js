
let slideIndex = 0;

showSlides();

function showSlides() {
    let slides = document.getElementsByClassName('slider__item');
    let dots=document.getElementsByClassName('slider__dots--item');
	for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].classList.remove('slider__dots--active');	
	}
	slideIndex++;
	if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex-1].classList.add('slider__dots--active');	
    
	setTimeout(showSlides, 3000);
}


