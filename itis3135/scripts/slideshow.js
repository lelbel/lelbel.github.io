const galleryImage = document.getElementsByClassName("gallery-image");
const galleryThumbnail = document.getElementsByClassName("gallery-image");
const galleryImage1 = document.getElementById("gallery-image-1");
const galleryImage2 = document.getElementById("gallery-image-2");
const galleryImage3 = document.getElementById("gallery-image-3");
const galleryImage4 = document.getElementById("gallery-image-4");
const galleryImage5 = document.getElementById("gallery-image-5");
const galleryImage6 = document.getElementById("gallery-image-6");
const galleryImage7 = document.getElementById("gallery-image-7");
const galleryImage8 = document.getElementById("gallery-image-8");
const galleryImage9 = document.getElementById("gallery-image-9");
const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");
const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7, galleryImage8, galleryImage9];
var imageIndex = 0;

//update image display function
function updateDisplay(index) {
    //reset every image to default class
    for (var i = 0; i < galleryImages.length; i++) {
        galleryImages[i].classList.remove("gallery-active");
        galleryImages[i].classList.add("gallery-image");
    }

    //give image to display the active class for visibility
    galleryImages[index].classList.remove("gallery-image");
    galleryImages[index].classList.add("gallery-active");
}

//next button function
btnNext.onclick = (function nextImage() {
    //loop back to first image if last image is reached
    imageIndex += 1;
    if (imageIndex >= galleryImages.length) {
        imageIndex = 0;
    }

    //update display to show next image
    updateDisplay(imageIndex);
});

//prev button function
btnPrev.onclick = (function prevImage() {
    //loop back to last image if first image is reached
    imageIndex -= 1;
    if (imageIndex < 0) {
        imageIndex = galleryImages.length - 1;
    }

    //update display to show next image
    updateDisplay(imageIndex);
});


const getId = (event) => {
    const clickedElement = event.srcElement.id;
    const idSubstring = clickedElement.substring(0, 17);
    console.log(idSubstring);

    //check if an element with a thumbnail id is clicked 
    if (idSubstring === "gallery-thumbnail") {
        const indexSubstring = clickedElement.substring(clickedElement.length - 1, clickedElement.length);
        console.log(indexSubstring);

        imageIndex = indexSubstring - 1;
        updateDisplay(imageIndex);
    }
};

window.addEventListener("click", getId);