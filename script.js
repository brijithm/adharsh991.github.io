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
    navbar.classList.add('open');
    overlay.classList.add('show');
    burger.style.display = 'none'; // ← ADD THIS

});

function closeMenu() {
    navbar.classList.remove('open');
    overlay.classList.remove('show');
    burger.style.display = 'flex'; // ← ADD THIS

}
document.getElementById('closeBtn').addEventListener('click', closeMenu);

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