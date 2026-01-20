/* ===============================
   MOBILE MENU
================================ */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


/* ===============================
   HERO PARALLAX (SLOWED)
================================ */
const hero = document.getElementById('hero');
const heroBg = hero.querySelector('.hero-bg');
const heroContent = hero.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = hero.offsetHeight;

    if (scrolled < heroHeight) {
        const yPos = scrolled * 0.25;
        const scale = 1 + (scrolled / heroHeight) * 0.04;
        const opacity = 1 - (scrolled / heroHeight);
        const textY = scrolled * 0.12;

        heroBg.style.transform = `translateY(${yPos}px) scale(${scale})`;
        heroContent.style.opacity = opacity;
        heroContent.style.transform = `translateY(-${textY}px)`;
    }
});


/* ===============================
   REVEAL SECTION (SLOWED)
================================ */
const revealSection = document.getElementById('reveal-section');
const revealBg = revealSection.querySelector('.reveal-bg');
const revealTitle = revealSection.querySelector('.reveal-title');
const revealSubtitle = revealSection.querySelector('.reveal-subtitle');
const revealFeatures = revealSection.querySelectorAll('.reveal-feature');

window.addEventListener('scroll', () => {
    const rect = revealSection.getBoundingClientRect();
    let rawProgress = 1 - (rect.top / window.innerHeight);
    const scrollProgress = Math.max(0, Math.min(1.5, rawProgress * 0.7));

    if (scrollProgress > 0 && scrollProgress < 1.5) {

        // Background
        revealBg.style.transform = `scale(${1 + scrollProgress * 0.15})`;
        revealBg.style.opacity = Math.max(0, 1 - scrollProgress * 0.4);

        // Title
        revealTitle.style.opacity =
            scrollProgress < 0.5 ? 1 : Math.max(0, 1 - (scrollProgress - 0.5) * 2);
        revealTitle.style.transform =
            scrollProgress > 0.5 ? `translateY(${-(scrollProgress - 0.5) * 60}px)` : `translateY(0)`;

        // Subtitle
        revealSubtitle.style.opacity =
            scrollProgress < 0.6 ? 1 : Math.max(0, 1 - (scrollProgress - 0.6) * 2);
        revealSubtitle.style.transform =
            scrollProgress > 0.6 ? `translateY(${-(scrollProgress - 0.6) * 60}px)` : `translateY(0)`;

        // Features
        revealFeatures.forEach((feature, index) => {
            const start = 0.4 + index * 0.15;
            if (scrollProgress >= start) {
                const p = Math.min(1, (scrollProgress - start) / 0.3);
                feature.style.opacity = p;
                feature.style.transform = `translateY(${80 - p * 80}px)`;
            }
        });
    }
});


/* ===============================
   STICKY SECTIONS (SLOWED)
================================ */
document.querySelectorAll('.sticky-section').forEach(section => {
    const content = section.querySelector('.sticky-content');

    window.addEventListener('scroll', () => {
        const rect = section.getBoundingClientRect();
        let progress = 1 - rect.top / window.innerHeight;
        progress = Math.max(0, Math.min(1.2, progress * 0.8));

        if (progress > 0) {
            content.style.opacity =
                progress < 0.3 ? progress * 2 : progress > 1 ? Math.max(0, 1 - (progress - 1) * 2) : 1;
            content.style.transform = `scale(${0.85 + progress * 0.1})`;
        }
    });
});


/* ===============================
   PARALLAX SECTIONS (SLOWED)
================================ */
document.querySelectorAll('.parallax-section').forEach(section => {
    const bg = section.querySelector('.parallax-bg');
    const content = section.querySelector('.parallax-content');

    window.addEventListener('scroll', () => {
        const rect = section.getBoundingClientRect();
        let progress = 1 - rect.top / window.innerHeight;
        progress = Math.max(-0.5, Math.min(1.5, progress * 0.8));

        bg.style.transform = `translateY(${(progress - 0.5) * 15}%) scale(${1.15 - Math.abs(progress - 0.5) * 0.15})`;

        const opacity =
            progress < 0.3 ? progress * 2 :
            progress > 0.7 ? Math.max(0, 1 - (progress - 0.7) * 2) : 1;

        content.style.opacity = opacity;

        const textOffset = (progress - 0.5) * 60;
        content.querySelectorAll('h2, p').forEach(el => {
            el.style.transform = `translateY(${textOffset}px)`;
        });
    });
});


/* ===============================
   INTERSECTION OBSERVER (SLOW STAGGER)
================================ */
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -120px 0px'
};

const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-element').forEach(el => fadeObserver.observe(el));


/* ===============================
   FEATURE ITEMS STAGGER (SLOW)
================================ */
document.querySelectorAll('.feature-item').forEach((item, index) => {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 400);
            }
        });
    }, observerOptions);

    obs.observe(item);
});


/* ===============================
   COURT CARDS (SLOW)
================================ */
document.querySelectorAll('.court-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(60px)';
    card.style.transition = 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)';

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 300);
            }
        });
    }, observerOptions);

    obs.observe(card);
});


/* ===============================
   MEMBERSHIP CARDS (SLOW)
================================ */
document.querySelectorAll('.membership-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(60px)';
    card.style.transition = 'all 1s cubic-bezier(0.22, 1, 0.36, 1)';

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = card.classList.contains('bg-orange-500')
                        ? 'translateY(0) scale(1.1)'
                        : 'translateY(0) scale(1)';
                }, index * 400);
            }
        });
    }, observerOptions);

    obs.observe(card);
});


/* ===============================
   SMOOTH ANCHOR SCROLL
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});


console.log('✅ Base Performance – Cinematic Scroll Loaded');




    const slides = document.querySelectorAll('.carousel-img');
    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3000); // 5 seconds per slide
