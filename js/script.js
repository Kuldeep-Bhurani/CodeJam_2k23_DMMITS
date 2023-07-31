const mouseCursor = document.querySelector(".cursor");
const lnks = document.querySelectorAll(".lnk");
const cursorDiv = document.getElementById("cursor");
const scr_w = screen.width;
const nav = document.querySelector(".nav")
const primaryNav = document.querySelector(".primary-nav")
const navToggle = document.querySelector(".mobile-nav-toggle")

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

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px'
    mouseCursor.style.left = e.pageX + 'px'
};

lnks.forEach(lnk => {
    lnk.addEventListener('mouseover', () => {
        mouseCursor.classList.add("c-grow");
        if (lnks.item(0) === lnk) {
            const visibility = primaryNav.getAttribute("data-visible");
            if (visibility === "false") {
                mouseCursor.classList.add("btn-grow-o");
            } else {
                mouseCursor.classList.add("btn-grow-c");
            };
        } else if (lnks.item(1) === lnk) {
            mouseCursor.classList.add("l1-grow");
        } else if (lnks.item(2) === lnk) {
            mouseCursor.classList.add("l2-grow");
        } else if (lnks.item(3) === lnk) {
            mouseCursor.classList.add("l3-grow");
        } else if (lnks.item(4) === lnk) {
            mouseCursor.classList.add("up-grow");
        } else {
            mouseCursor.classList.add("social-grow");
        };
    });
    lnk.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("c-grow");
        mouseCursor.classList.remove("btn-grow-o");
        mouseCursor.classList.remove("btn-grow-c");
        mouseCursor.classList.remove("l1-grow");
        mouseCursor.classList.remove("l2-grow");
        mouseCursor.classList.remove("l3-grow");
        mouseCursor.classList.remove("up-grow");
        mouseCursor.classList.remove("social-grow");
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