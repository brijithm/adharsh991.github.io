/* =====================
   VIDEO HOVER EFFECT
   ===================== */
document.querySelectorAll('.portfolio-card').forEach(card => {
    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play());
    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
});

/* =====================
   MOBILE NAVIGATION
   ===================== */
const burger  = document.getElementById('burger');
const navbar  = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    if (navbar.classList.contains('open')) {
        closeMenu();
    } else {
        navbar.classList.add('open');
        overlay.classList.add('show');
        burger.classList.add('active');
    }
});

function closeMenu() {
    navbar.classList.remove('open');
    overlay.classList.remove('show');
    burger.classList.remove('active');

}
document.getElementById('closeBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    closeMenu();
});

/* =====================
   SCROLL FADE-IN
   ===================== */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
/* =====================
   DRAG TO SCROLL
   ===================== */
function addDragScroll(slider, track) {
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    slider.style.overflowX = 'auto';
    slider.style.scrollbarWidth = 'none';
    slider.style.msOverflowStyle = 'none';

    slider.addEventListener('mousedown', e => {
        isDragging = true;
        startX = e.clientX;
        scrollStart = slider.scrollLeft;
        track.style.animationPlayState = 'paused';
        slider.style.cursor = 'grabbing';
    });

    window.addEventListener('mousemove', e => {
        if (!isDragging) return;
        slider.scrollLeft = scrollStart - (e.clientX - startX);
    });

    window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        slider.style.cursor = 'grab';
        track.style.animationPlayState = 'running';
    });

    slider.addEventListener('touchstart', e => {
    isDragging = true;
    startX = e.touches[0].clientX;
    scrollStart = slider.scrollLeft;
    track.style.animationPlayState = 'paused';
}, { passive: true });

window.addEventListener('touchmove', e => {
    if (!isDragging) return;
    slider.scrollLeft = scrollStart - (e.touches[0].clientX - startX);
}, { passive: true });

window.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    track.style.animationPlayState = 'running';
});
    
}

addDragScroll(
    document.querySelector('.logo-slider'),
    document.querySelector('.logo-track')
);
addDragScroll(
    document.querySelector('.portfolio-slider'),
    document.querySelector('.portfolio-track')
);