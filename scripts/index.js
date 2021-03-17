const loadingImage = document.querySelector(".loadingImage");

setTimeout(() => {
    loadingImage.classList.remove("spinning");
    loadingImage.classList.add("scale");
}, 3000)

const preferReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!preferReducedMotion || preferReducedMotion.matches) {
    showAgeConfirmation();
} else {
    loadingImage.addEventListener('animationend', () => {
        showAgeConfirmation();
    })
}

function showAgeConfirmation() {
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
    const ageConfirmation = document.querySelector(".ageConfirmation");
    ageConfirmation.style.display = "flex";
}


const yesBtn = document.querySelector(".ageConfirmation div .yes");

yesBtn.addEventListener('click', (e) => {
    e.path[2].style.display = "none";
    function nextweek(){
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        return nextweek;
    }
    document.cookie = `loggedIn=true; expires=${nextweek()}`;
    loadMainContent();
})

const noBtn = document.querySelector(".ageConfirmation div .no");

noBtn.addEventListener('click', (e) => {
    e.path[2].style.display = "none";
    const tooYoung = document.querySelector(".tooYoung");
    tooYoung.style.display = "flex";
})

if (document.cookie === "loggedIn=true"){
    loadMainContent();
}

function loadMainContent() {
    const ageConfirmation = document.querySelector(".ageConfirmation");
    ageConfirmation.style.display = "none";
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
    const mainContainer = document.querySelector(".mainContainer");
    mainContainer.style.display = "flex";
    document.body.style.background = "#A51E1E";
    document.body.style.height = "fit-content";
}

const resetBtn = document.querySelector(".resetAnimation");
resetBtn.addEventListener('click', () => {
    document.cookie = `loggedIn=false`;
    location.reload();
})