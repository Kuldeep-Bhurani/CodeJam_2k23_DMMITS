const track = document.getElementById("image-track");
const mouseCursor = document.querySelector(".cursor");

const handleOnDown = e => {
    track.dataset.mouseDownAt = e.clientX;
    mouseCursor.classList.add("scroll-grow");
}

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
    mouseCursor.classList.remove("scroll-grow");
}

const handleOnMove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate({
        transform: `translate(${nextPercentage}%, -50%)`
    }, { duration: 1800, fill: "forwards" });

    for (const image of track.getElementsByClassName("image")) {
        image.animate({
            objectPosition: `${100 + nextPercentage}% center`
        }, { duration: 1800, fill: "forwards" });
    }
}

// !for touch events
window.onmousedown = e => handleOnDown(e);
window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
window.ontouchmove = e => handleOnMove(e.touches[0]);

// !Hover Effects
const track_lnk = document.querySelectorAll(".track_lnk")
track_lnk.forEach(lnk => {
    lnk.addEventListener('mouseover', () => {
        mouseCursor.classList.add("social-grow");
        mouseCursor.classList.add("c-grow");
    });
    lnk.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove("social-grow");
        mouseCursor.classList.remove("c-grow");
    });
});

//TODO: Add support for keyboard users scrolling the