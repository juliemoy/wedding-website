const nav = document.querySelector(".primary-navigation");
const navToggle = document.getElementById("mobile-nav-toggle");

let navLinks = document.querySelectorAll(".primary-navigation a");

navToggle.addEventListener("click", () => {

    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        openMenu();
    } else {
        closeMenu();
    }
});

window.addEventListener('mouseup', (evnt) => {
    if(evnt.target != nav && evnt.target.parentNode != nav && evnt.target != navToggle) {
        closeMenu();
    }
} )

navLinks.forEach(function(i){
    i.addEventListener('click', function() {
        closeMenu();
    });
});

function openMenu() {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    nav.classList.remove("mobile-hide");
}

function closeMenu() {
    nav.classList.add("mobile-hide");
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

weddingInfo = document.querySelector(".wedding-info");

console.log(weddingInfo);

var scrollFunc = function() {
    var y = window.scrollY;
    if (y >= 10) {
        weddingInfo.hidden = false;
    } else {
        weddingInfo.hidden = true;
    }
}

window.onload = function() {
    checkSize();
}

window.addEventListener("resize", checkSize);

function checkSize() {
    let windowHeight = window.innerHeight - 120;
    let welcomeHeight = document.querySelector(".center-welcome").offsetHeight + 156;
    if(windowHeight < welcomeHeight) {
        weddingInfo.hidden = true;
        window.addEventListener("scroll", scrollFunc);
    } else {
        weddingInfo.hidden = false;
    }
}