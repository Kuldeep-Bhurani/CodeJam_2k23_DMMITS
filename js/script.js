let mouseCursor = document.querySelector(".cursor");
let cards = document.querySelectorAll(".card");
let cursorDiv = document.getElementById("cursor");

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
