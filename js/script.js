const mouseCursor = document.querySelector(".cursor");
const cards = document.querySelectorAll(".card");
const cursorDiv = document.getElementById("cursor");
const vid = document.getElementById("heroVid");
const scr_w = screen.width;
const nav = document.querySelector(".nav")
const primaryNav = document.querySelector(".primary-nav")
const navToggle = document.querySelector(".mobile-nav-toggle")


setTimeout(() => {
    nav.style.pointerEvents = "all";
}, 1800);


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    };
})

vid.playbackRate = 0.9;

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
};

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        mouseCursor.classList.add("c-grow");
    });
    card.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("c-grow");
    });
});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});