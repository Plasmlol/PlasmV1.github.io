const ulEl = document.querySelector('.nav-bar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav-barEl.classlist.add('nav-bar-scrolled')
    }
});

