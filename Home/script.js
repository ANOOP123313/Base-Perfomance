/* =========================
   SMOOTH ANCHOR SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* =========================
   NAVBAR HIDE / SHOW
========================= */
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const current = window.pageYOffset;

  if (current <= 0) {
    navbar.style.transform = 'translateY(0)';
  } else if (current > lastScroll && current > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }

  lastScroll = current;
});

/* =========================
   HAMBURGER MENU
========================= */
const burger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-active');
});

/* =========================
   IMAGE GALLERY AUTO SCROLL
========================= */
const gallery = document.getElementById('galleryContainer');

if (gallery) {
  gallery.innerHTML += gallery.innerHTML;

  let x = 0;
  const speed = 0.5;

  function animateGallery() {
    x -= speed;
    if (Math.abs(x) >= gallery.scrollWidth / 2) x = 0;
    gallery.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(animateGallery);
  }

  animateGallery();
}

/* ==================================================
   🔥 TRAINER SCROLL-BASED MOTION (FINAL)
================================================== */

const trainerItems = document.querySelectorAll('.trainer-item');

function trainerScrollMotion() {
  const scrollY = window.scrollY;

  trainerItems.forEach((item, index) => {
    const direction = index % 2 === 0 ? -1 : 1;

    // control intensity here
    const offset = scrollY * 0.08 * direction;

    item.style.transform = `translateY(${offset}px)`;
  });
}

window.addEventListener('scroll', trainerScrollMotion);

/* =========================
   GRADIENT CIRCLE MOUSE MOVE
========================= */
const circles = document.querySelectorAll('.gradient-circle');
let mx = 0, my = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX / window.innerWidth - 0.5;
  my = e.clientY / window.innerHeight - 0.5;
});

function animateCircles() {
  circles.forEach((c, i) => {
    c.style.transform = `translate(${mx * 40 * (i + 1)}px, ${my * 40 * (i + 1)}px)`;
  });
  requestAnimationFrame(animateCircles);
}
if (circles.length) animateCircles();

/* =========================
   FOOTER WAVE PARALLAX
========================= */
const footer = document.getElementById('footerWave');
const layers = document.querySelectorAll('.footer-layer');

window.addEventListener('scroll', () => {
  if (!footer) return;

  const rect = footer.getBoundingClientRect();
  const vh = window.innerHeight;

  if (rect.top < vh && rect.bottom > 0) {
    const progress = 1 - rect.top / vh;

    layers.forEach(layer => {
      let speed = 0.2;
      if (layer.classList.contains('mid')) speed = 0.35;
      if (layer.classList.contains('fast')) speed = 0.55;
      layer.style.transform = `translateY(${progress * 60 * speed}px)`;
    });
  }
});

/* =========================
   SCROLL TO TOP BUTTON
========================= */
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '↑';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #ff1f1f;
  color: white;
  border: none;
  font-size: 22px;
  cursor: pointer;
  opacity: 0;
  transition: 0.3s;
  z-index: 999;
`;
document.body.appendChild(scrollBtn);

scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

window.addEventListener('scroll', () => {
  scrollBtn.style.opacity = window.scrollY > 500 ? '1' : '0';
});

/* =========================
   BOOK NOW BUTTON
========================= */
document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.scroll);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

