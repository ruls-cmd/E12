/* =========================================
   LOADER
========================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);

});


/* =========================================
   NAVBAR
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("menu-open");

});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("menu-open");
    });

});


/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================
   LETTER MODAL
========================================= */

const openLetter = document.getElementById("openLetter");

const closeLetter = document.getElementById("closeLetter");

const letterModal = document.getElementById("letterModal");

const modalOverlay = document.getElementById("modalOverlay");


function showLetter() {

    letterModal.classList.add("active");

    document.body.classList.add("modal-open");

}


function hideLetter() {

    letterModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


openLetter.addEventListener("click", showLetter);

closeLetter.addEventListener("click", hideLetter);

modalOverlay.addEventListener("click", hideLetter);


/* ESC closes modal */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        hideLetter();
    }

});


/* =========================================
   SMOOTH ANCHOR
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================
   IMAGE PLACEHOLDER
========================================= */

document.querySelectorAll(".gallery-item img").forEach(image => {

    image.addEventListener("load", () => {

        image.parentElement.classList.remove("no-image");

    });

});


/* =========================================
   YEAR
========================================= */

console.log(
    "E-12 Riset — 25 November 2026"
);

console.log(
    "Untuk Bu Manik, Manik Rarasningtyas, S.Pd."
);