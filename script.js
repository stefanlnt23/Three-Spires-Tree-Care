// Three Spires Tree Care - JavaScript Functionality

// Show Preview Modal on Page Load
window.addEventListener('load', function() {
    setTimeout(function() {
        showPreviewModal();
    }, 500);
});

// Modal Functions
function showPreviewModal() {
    const modal = document.getElementById('previewModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePreviewModal() {
    const modal = document.getElementById('previewModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showActionModal(actionText) {
    const modal = document.getElementById('actionModal');
    const description = document.getElementById('actionDescription');
    description.textContent = actionText;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeActionModal() {
    const modal = document.getElementById('actionModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modals when clicking overlay
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closePreviewModal();
        closeActionModal();
    }
});

// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('open');
    this.setAttribute('aria-expanded', this.classList.contains('active'));
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Button Click Handlers - Intercept all CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    // Get Quote buttons
    const quoteButtons = document.querySelectorAll('a[href="#quote"]:not(.no-intercept)');
    quoteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showActionModal('Open a quote request form and send your project details directly to Three Spires Tree Care. You would receive a personalized response within 24 hours.');
        });
    });

    // Service buttons
    const serviceButtons = document.querySelectorAll('.btn-service');
    serviceButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showActionModal('Take you to a detailed quote form pre-filled with the selected service, making it easy to request specific information about this service.');
        });
    });

    // Gallery CTA button
    const galleryCTA = document.querySelector('.btn-gallery');
    if (galleryCTA) {
        galleryCTA.addEventListener('click', function(e) {
            e.preventDefault();
            showActionModal('Navigate to the quote form to start your tree care project. In the live version, this would capture leads and send notifications to Three Spires Tree Care.');
        });
    }
});

// Form Submission Handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('quoteForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            showActionModal('Send your quote request via email to Three Spires Tree Care, automatically log it in their CRM system, and trigger an automated confirmation email to you. The team would respond within 24 hours with a detailed quote.');

            this.reset();

            console.log('Form submitted:', formData);
        });
    }
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    }

    lastScroll = currentScroll;
});

// Animation on scroll for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    const googleReviewCards = document.querySelectorAll('.google-review-card');
    const galleryItems = document.querySelectorAll('.gallery-item');
    const beforeAfterItems = document.querySelectorAll('.before-after-item');

    [...serviceCards, ...googleReviewCards, ...galleryItems, ...beforeAfterItems].forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});

// Video placeholder click handler
document.addEventListener('DOMContentLoaded', function() {
    const videoPlaceholder = document.querySelector('.video-placeholder');

    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            showActionModal('Play a professional showcase video featuring: time-lapse of recent tree work projects, customer video testimonials, behind-the-scenes footage of the Three Spires team at work, and demonstration of their thorough clean-up process. Videos are embedded from YouTube or Vimeo for fast loading.');
        });
    }
});

// Gallery item click handler
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            const location = this.querySelector('p').textContent;
            console.log(`Gallery item clicked: ${title} - ${location}`);
        });
    });
});

// Add current year to footer if needed
document.addEventListener('DOMContentLoaded', function() {
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Three Spires Tree Care. All rights reserved.`;
    }
});

console.log('Three Spires Tree Care website loaded successfully!');
console.log('Demo website created by web-force.info');