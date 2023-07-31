const sections = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            section.classList.add('fade-up-show');
        }
    });
};

fadeInOnScroll();

document.addEventListener('scroll', fadeInOnScroll);