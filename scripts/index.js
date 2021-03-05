const loadingImage = document.querySelector(".loadingImage");

setTimeout(() => {
    loadingImage.classList.remove("spinning");
    loadingImage.classList.add("scale");
}, 3000)

loadingImage.addEventListener('animationend', () => {
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
})

const yesBtn = document.querySelector(".ageConfirmation div .yes");

yesBtn.addEventListener('click', (e) => {
    e.path[2].style.display = "none";
    function nextweek(){
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        return nextweek;
    }
    document.cookie = `loggedIn=true; expires=${nextweek()}`;
})

const noBtn = document.querySelector(".ageConfirmation div .no");

noBtn.addEventListener('click', (e) => {
    e.path[2].style.display = "none";
    const tooYoung = document.querySelector(".tooYoung");
    tooYoung.style.display = "initial";
})

if (document.cookie === "loggedIn=true"){
    const ageConfirmation = document.querySelector(".ageConfirmation");
    ageConfirmation.style.display = "none";
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
}