// Cult Pass Live - JavaScript functionality

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeButtons();
    initializeScrollEffects();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });

    // Update active link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

// Button click handlers
function initializeButtons() {
    const buttons = document.querySelectorAll('.cta-btn, .pricing-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Free Trial') || buttonText.includes('Join')) {
                handleTrialSignup();
            }
        });
    });
}

function handleTrialSignup() {
    console.log('Trial signup initiated');
    alert('Welcome to Cult Pass Live! Your 14-day free trial is ready to start. Sign up to get access to all our amazing classes!');
}

// Scroll effects
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe feature cards
    document.querySelectorAll('.feature-card, .class-card, .pricing-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation to pricing cards on hover
const pricingCards = document.querySelectorAll('.pricing-card');
pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Feature counter animation
function animateCounters() {
    const counters = document.querySelectorAll('.class-count');
    counters.forEach(counter => {
        counter.addEventListener('mouseover', function() {
            this.style.color = '#ffbe0b';
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'all 0.3s ease';
        });
        counter.addEventListener('mouseout', function() {
            this.style.color = '#ff006e';
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize animations after page load
window.addEventListener('load', function() {
    animateCounters();
    addParallaxEffect();
});

// Parallax effect for hero section
function addParallaxEffect() {
    const heroImage = document.querySelector('.hero-image');
    
    if (heroImage) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            const heroSection = document.querySelector('.hero');
            const heroBounds = heroSection.getBoundingClientRect();
            
            if (heroBounds.top < window.innerHeight) {
                heroImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            }
        });
    }
}

// Form validation placeholder
function validateForm(formData) {
    if (!formData.email || !formData.password) {
        console.warn('Please fill in all fields');
        return false;
    }
    if (!formData.email.includes('@')) {
        console.warn('Invalid email format');
        return false;
    }
    return true;
}

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    console.log(`Event tracked: ${eventName}`, eventData);
    // Send to analytics service
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-btn') || e.target.classList.contains('pricing-btn')) {
        const buttonText = e.target.textContent.trim();
        trackEvent('button_click', { button: buttonText });
    }
});

// Responsive menu toggle (for mobile)
function setupMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        const menuButton = document.createElement('button');
        menuButton.textContent = '☰';
        menuButton.className = 'mobile-menu-btn';
        menuButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            display: none;
        `;
        
        document.querySelector('.nav-content').appendChild(menuButton);
        
        if (navLinks) {
            menuButton.style.display = 'block';
            menuButton.addEventListener('click', function() {
                navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
            });
        }
    }
}

// Call mobile menu setup on load
window.addEventListener('load', setupMobileMenu);
window.addEventListener('resize', setupMobileMenu);

// Utility function to format currency
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals or menus
        console.log('Escape key pressed');
    }
});

console.log('Cult Pass Live - Initialized');