const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

let navLinks = document.querySelectorAll(".primary-navigation a");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        openMenu();
    } else {
        closeMenu();
    }
})


navLinks.forEach(function(i){
    i.addEventListener('click', function() {
        closeMenu();
    });
});
console.log(navLinks);

function openMenu() {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
}

function closeMenu() {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}