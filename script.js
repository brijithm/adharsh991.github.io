/*  VIDEO HOVER EFFECT */
    document.querySelectorAll('.portfolio-card').forEach(card => {
        const video = card.querySelector('video');
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
    });
const track = document.querySelector('.logo-track');

track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'running';
});

track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
});

/*  MOBILE NAVIGATION */

const burger = document.getElementById('burger');
const navbar = document.getElementById('navbar');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    navbar.classList.add('open');
    overlay.classList.add('show');
});

function closeMenu() {
    navbar.classList.remove('open');
    overlay.classList.remove('show');
}

document.getElementById('closeBtn').addEventListener('click', closeMenu);

/*fade-in elements*/


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // enables fade on scroll up too
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));




