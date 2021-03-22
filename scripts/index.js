import * as data from './../guest.json';
import 'animate.css';

// The loading animation
const loadingImage = document.querySelector(".loadingImage");

setTimeout(() => {
    loadingImage.classList.remove("spinning");
    loadingImage.classList.add("scale");
}, 3000)

// If the user prefers reduced motion it doesn't run the intro animation
const preferReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (!preferReducedMotion || preferReducedMotion.matches) {
    showAgeConfirmation();
} else {
    loadingImage.addEventListener('animationend', () => {
        showAgeConfirmation();
    })
}

const cookieAcceptBox = document.querySelector(".cookieAccept");

// The second stage of the intro / age confirmation window because we "sell" beer
// Due to bug with underlineds classes not working properly with this script,
// underlined is set to notAnimated
function showAgeConfirmation() {
    loadingImage.classList.remove("loadingImage");
    loadingImage.classList.add("backgroundImage");
    underlined.classList.remove("animated");
    underlined.classList.add("notAnimated");
    const ageConfirmation = document.querySelector(".ageConfirmation");
    ageConfirmation.style.display = "flex";
    cookieAcceptBox.style.display = "flex";
}

const yesBtn = document.querySelector(".ageConfirmation div .yes");

// Using cookies in order to not show the intro animation every time. This cookie expires in week from when the button is pressed.
yesBtn.addEventListener('click', (e) => {
    function nextweek(){
        var today = new Date();
        var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
        return nextweek;
    }
    document.cookie = `loggedIn=true; expires=${nextweek()}`;
    let path = e.path || e.composedPath();
    path[2].style.display = "none";
    loadMainContent();
})

// In case the no button is pressed.
const noBtn = document.querySelector(".ageConfirmation div .no");

noBtn.addEventListener('click', (e) => {
    e.path[2].style.display = "none";
    const tooYoung = document.querySelector(".tooYoung");
    tooYoung.style.display = "flex";
})

if (document.cookie === "loggedIn=true"){
    loadMainContent();
}



// Load the main site
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

// Reset the cookie for testing purposes
const resetBtn = document.querySelector(".resetAnimation");
resetBtn.addEventListener('click', () => {
    document.cookie = `loggedIn=false`;
    location.reload();
})

// Gets info from JSON and changes the relevant html elements text content
const guestName = document.querySelector(".name");
const locationElement = document.querySelector(".location");
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');
if (urlParams.has('id')) {
    guestName.textContent = ` ${data.guests[id].name}`;
    let destination = assignDestination(data.guests[id].group);
    locationElement.textContent =  ` ${destination}`;
}else {
    guestName.textContent = "";
    locationElement.textContent = " JÄRNTORGET";
}

function assignDestination(group){
    if (group === 1){
        return "JÄRNTORGET";
    }else if (group === 2){
        return "VASAPLATSEN";
    }else {
        return null;
    }
}

// Animate when in viewport by scrolling.
// Due to bug with underlineds classes not working properly with this script,
// it's set to notAnimated in the function showAgeConfirmation
let underlined = document.querySelector(".underlined");

const animateHTML = function() {
    let elements;
    let windowHeight;
    function init() {
      elements = document.querySelectorAll('.notAnimated');
      windowHeight = window.innerHeight;
      addEventHandlers();
      checkPosition();
    }
    function addEventHandlers() {
      window.addEventListener('scroll', checkPosition);
      window.addEventListener('resize', init);
    }
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var positionFromTop = elements[i].getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          elements[i].className = elements[i].className.replace(
            'notAnimated',
            'animated'
          );
        }
      }
    }
    return {
      init: init
    };
  };
  animateHTML().init();


// Cookie accept button

const cookieAcceptBtn = document.querySelector('.cookieBtn');

cookieAcceptBtn.addEventListener('click', (e) => {
    // On press remove element
    cookieAcceptBox.style.display = "none";
})    