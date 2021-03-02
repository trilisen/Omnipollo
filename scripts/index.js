const loadingImage = document.querySelector(".loadingImage");

console.log(loadingImage);

setTimeout(() => {
    loadingImage.classList.remove("spinning");
    loadingImage.classList.add("scale");
}, 6000)

loadingImage.addEventListener('animationend', () => {
    console.log("hej");
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
})