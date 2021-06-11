var slide_index = 1;
displaySlides(slide_index);  

// left or right button
function nextSlide(n) {  
    displaySlides(slide_index += n);  
}
//thumbnail control
function currentSlide(n) {  
    displaySlides(slide_index = n);  
}

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showslide");
    var dots = document.getElementsByClassName("dot");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length ;}  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }
    for (i = 0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slide_index - 1].style.display = "block";
    dots[slide_index - 1].className += "active";  
}