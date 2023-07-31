function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function handleScroll() {
    var stt = document.querySelectorAll('.scroll-to-top');

    for (var i = 0; i < stt.length; i++) {
        if (isElementInViewport(stt[i])) {
            stt[i].classList.add('animate-stt-in');
        }
    }
}


window.addEventListener('scroll', handleScroll);