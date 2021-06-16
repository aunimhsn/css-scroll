let scrollBtn = document.querySelector('.scroll');
scrollBtn.addEventListener('click', function() {
    window.scrollTo({ top: document.documentElement.clientHeight, behavior: 'smooth' })
});

let scrollTop = document.querySelector('.scroll-to-top');
scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
});

window.addEventListener('scroll', () => {

    if (window.pageYOffset === 0) {
        scrollTop.style.display = 'none';
    } else {
        scrollTop.style.display = 'block';
    }
    
});