// script.js
// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    cursorDot.style.opacity = '1';
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
    cursorOutline.style.opacity = '1';
});

// Cursor hover effects
document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Typing Animation
const typingText = document.querySelector('.typing-text');
const phrases = [
    'AI Enthusiast',
    'Python Developer',
    'Machine Learning',
    'AI LLM'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

setTimeout(type, 1000);

// Counter Animation
function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            el.textContent = current.toFixed(2);
            requestAnimationFrame(updateCounter);
        } else {
            el.textContent = target;
        }
    };
    
    updateCounter();
}

// GSAP Animations
// Hero Section
gsap.from('.hero-label', {
    opacity: 0,
    y: 50,
    duration: 0.3,
    delay: 0.3
});

gsap.from('.name-line', {
    opacity: 0,
    y: 100,
    duration: 0.3,
    stagger: 0.2,
    delay: 0.5
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 0.3,
    delay: 1
});

gsap.from('.hero-description', {
    opacity: 0,
    y: 50,
    duration: 0.3,
    delay: 1.2
});

gsap.from('.hero-buttons .btn', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2,
    delay: 1.4
});

gsap.from('.social-icon', {
    opacity: 0,
    scale: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: 1.6
});

gsap.from('.gradient-blob', {
    opacity: 0,
    scale: 0,
    duration: 1,
    stagger: 0.3,
    delay: 0.5
});

// Section Animations
// gsap.utils.toArray('section').forEach(section => {
//     gsap.from(section.querySelector('.section-header'), {
//         scrollTrigger: {
//             trigger: section,
//             start: 'top 80%',
//         },
//         opacity: 0,
//         y: 50,
//         duration: 1
//     });
// });

// About Section
gsap.from('.about-text p', {
    scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
    },
    opacity: 0,
    x: -50,
    duration: 0.3,
    stagger: 0.2
});

gsap.from('.stat-item', {
    scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
        onEnter: () => {
            document.querySelectorAll('.stat-number').forEach(animateCounter);
        }
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger: 0.2
});

gsap.from('.image-placeholder', {
    scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
    },
    opacity: 0,
    scale: 0.3,
    duration: 1
});

// Timeline Animation
gsap.from('.timeline-item', {
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 80%',
    },
    opacity: 0,
    x: -100,
    duration: 0.3,
    stagger: 0.3
});

// Projects Animation
// gsap.utils.toArray('.project-card').forEach((card, index) => {
//     gsap.from(card, {
//         scrollTrigger: {
//             trigger: card,
//             start: 'top 85%',
//         },
//         opacity: 0,
//         y: 100,
//         duration: 1,
//         ease: 'power3.out'
//     });
// });

// Skills Animation
// gsap.from('.skill-category', {
//     scrollTrigger: {
//         trigger: '.skills-content',
//         start: 'top 80%',
//     },
//     opacity: 0,
//     y: 50,
//     duration: 0.8,
//     stagger: 0.15
// });

// Certifications Animation
// gsap.from('.cert-card', {
//     scrollTrigger: {
//         trigger: '.cert-grid',
//         start: 'top 80%',
//     },
//     opacity: 0,
//     scale: 0.8,
//     duration: 0.6,
//     stagger: 0.1
// });

// Contact Animation
// gsap.from('.contact-text', {
//     scrollTrigger: {
//         trigger: '.contact-content',
//         start: 'top 80%',
//     },
//     opacity: 0,
//     x: -50,
//     duration: 1
// });

// gsap.from('.contact-form-wrapper', {
//     scrollTrigger: {
//         trigger: '.contact-content',
//         start: 'top 80%',
//     },
//     opacity: 0,
//     x: 50,
//     duration: 1
// });

// Form Submission
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for gradient blobs
gsap.to('.blob-1', {
    y: -100,
    x: 50,
    scrollTrigger: {
        trigger: '.hero',
        scrub: 1
    }
});

gsap.to('.blob-2', {
    y: 100,
    x: -50,
    scrollTrigger: {
        trigger: '.hero',
        scrub: 1
    }
});

gsap.to('.blob-3', {
    y: -50,
    scrollTrigger: {
        trigger: '.hero',
        scrub: 1
    }
});

// Contact Form Handler - Web3Forms
document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = form.querySelector('.submit-btn');
            const btnSpan = submitBtn.querySelector('span');
            const originalText = btnSpan.textContent;
            
            // Show loading
            btnSpan.textContent = 'Sending...';
            submitBtn.disabled = true;
            formMessage.innerHTML = '';
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            try {
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    formMessage.innerHTML = `
                        <div class="form-success-toast">
                            <div class="toast-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="toast-text">
                                <h4>Message Sent!</h4>
                                <p>Form submitted successfully</p>
                            </div>
                        </div>
                    `;
                    
                    // Reset form
                    form.reset();
                    
                    // Auto-hide after 5 seconds
                    setTimeout(() => {
                        formMessage.innerHTML = '';
                    }, 5000);
                    
                } else {
                    throw new Error('Submission failed');
                }
                
            } catch (error) {
                // Show error message
                formMessage.innerHTML = `
                    <div class="form-error-toast">
                        <div class="toast-icon">
                            <i class="fas fa-exclamation-circle"></i>
                        </div>
                        <div class="toast-text">
                            <h4>Error!</h4>
                            <p>Please try again or email directly</p>
                        </div>
                    </div>
                `;
                
                console.error('Error:', error);
            } finally {
                // Reset button
                btnSpan.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});
