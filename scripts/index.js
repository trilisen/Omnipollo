const loadingImage = document.querySelector(".loadingImage");

console.log(loadingImage);

setTimeout(() => {
    loadingImage.classList.remove("spinning");
    loadingImage.classList.add("scale");
}, 3000)

loadingImage.addEventListener('animationend', () => {
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
})

const yesBtn = document.querySelector(".ageConfirmation div button")

yesBtn.addEventListener('click', (e) => {
    e.path[2].style.display = "none";
})