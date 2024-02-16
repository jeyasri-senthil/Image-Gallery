document.addEventListener("DOMContentLoaded", function() {
    let viewImage = document.querySelector(".view-image");
    let images = document.querySelectorAll(".container img");
    let fullImage = document.querySelector(".view-image img")
    let closeButton = document.querySelector(".view-image span");
    for (let image of images) {
        image.addEventListener("click", function(e) {
            console.log(e.target.src);
            viewImage.style.display = "flex";
            fullImage.src = e.target.src;
        });
    }
    closeButton.addEventListener("click", function() {
        viewImage.style.display = "none";
    });
});