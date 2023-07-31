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
    var articles = document.querySelectorAll('.article');

    for (var i = 0; i < articles.length; i++) {
        if (isElementInViewport(articles[i])) {
            articles[i].classList.add('animate-in');
        }
    }
}


window.addEventListener('scroll', handleScroll);