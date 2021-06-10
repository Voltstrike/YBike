const left = $("#prev_arrow")
const right = $("#next_arrow")
const images = $(".row > div")
const firstImage = images.first()
const slideImages = $(".column")

let position = 0;

left.click(() => {
    position--;
    if(position < 0){
        position = images.lenght - 1;
    }
    updateSlider();
});
right.click(() => {
    position++;
    if(position >= images.lenght){
        position = 0;
    }
    updateSlider();
})

function updateSlider(){
    images.first().animate({
        marginLeft: position * firstImage.width() * -1
    })
}


function showImage(imgs){
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext")
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}