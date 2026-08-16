/**
 * Main JavaScript file for My Merlin Tutor Website
 * Handles navigation, form submission, and interactive elements
 */

// ===== COMPACT CAL.COM BOOKING MODAL =====
const bookingModal = document.getElementById('booking-modal');
const bookingModalFrame = document.getElementById('booking-modal-frame');
const bookingModalClose = bookingModal ? bookingModal.querySelector('[data-booking-modal-close]') : null;

function closeBookingModal() {
    if (!bookingModal) {
        return;
    }

    bookingModal.classList.remove('is-open');
    bookingModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('booking-modal-open');

    if (bookingModalFrame) {
        bookingModalFrame.src = '';
    }
}

document.addEventListener('click', function(e) {
    const bookingButton = e.target.closest('[data-cal-link]');
    const closeButton = e.target.closest('[data-booking-modal-close]');

    if (closeButton) {
        closeBookingModal();
        return;
    }

    if (!bookingButton || !bookingModal || !bookingModalFrame) {
        return;
    }

    e.preventDefault();
    bookingModalFrame.src = `https://app.cal.com/${bookingButton.dataset.calLink}/embed?theme=light&embedType=modal&embed=`;
    bookingModal.classList.add('is-open');
    bookingModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('booking-modal-open');

    const closeControl = bookingModal.querySelector('.booking-modal__close');
    if (closeControl) {
        closeControl.focus();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && bookingModal && bookingModal.classList.contains('is-open')) {
        closeBookingModal();
    }
});

// ===== NAVIGATION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
        });
    }

    // Close mobile menu
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }

    // Close menu when clicking on nav links (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside (mobile)
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // ===== SCROLL EFFECTS =====

    // Active navigation link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                // Add active class to current link
                if (navLink) {
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ===== CONTACT FORM HANDLING =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }

            // Show thank-you message after successful form submission
            document.addEventListener("DOMContentLoaded", function() {
                const params = new URLSearchParams(window.location.search);
                if (params.has("submitted")) {
                    const thankYou = document.getElementById("thankYouMessage");
                    if (thankYou) {
                      thankYou.style.display = "block";
                      // Optional: scroll smoothly to the message
                      thankYou.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                }
            });

            // Simulate form submission (replace with actual form handling)
            showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
            
            // Create mailto link as fallback
            const mailtoLink = `mailto:winstead.christine@gmail.com?subject=Tutoring Inquiry: ${subject}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
            
            // Reset form
            this.reset();
            
            // Optional: Open email client
            setTimeout(() => {
                if (confirm('Would you like to open your email client to send this message?')) {
                    window.location.href = mailtoLink;
                }
            }, 2000);
        });
    }

    // ===== CALENDLY INTEGRATION =====
    const calendlyBtn = document.getElementById('calendly-btn');
    
    if (calendlyBtn) {
        calendlyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Replace with your actual Calendly link
            const calendlyUrl = 'https://calendly.com/christy-winstead';
            
            // For now, show a placeholder message
            // showNotification('Calendly integration coming soon! Please use the contact form or email for now.', 'info');
            
            // Uncomment the line below when you have your Calendly link ready
            // window.open(calendlyUrl, '_blank');
        });
    }

    // ===== UTILITY FUNCTIONS =====
    
    // Email validation
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.innerHTML = `
            <div class="notification__content">
                <span class="notification__message">${message}</span>
                <button class="notification__close">&times;</button>
            </div>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            z-index: 10000;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        `;
        
        // Add animation styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
            .notification__content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification__close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                line-height: 1;
            }
            .notification__close:hover {
                opacity: 0.8;
            }
        `;
        document.head.appendChild(style);
        
        // Add to page
        document.body.appendChild(notification);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification__close');
        closeBtn.addEventListener('click', function() {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    
    // Animate elements when they come into view
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
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.benefit, .subject-card, .testimonial-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== KEYBOARD NAVIGATION SUPPORT =====
    
    // Escape key to close mobile menu
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Focus management for mobile menu
    navToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            navMenu.classList.add('show');
            document.body.style.overflow = 'hidden';
            // Focus first nav link
            const firstNavLink = navMenu.querySelector('.nav__link');
            if (firstNavLink) {
                firstNavLink.focus();
            }
        }
    });

    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavLink, 10);
    });
    
    // Lazy load images when implemented
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        // Observe lazy images (when implemented)
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ===== EXTERNAL INTEGRATIONS =====
// Cal.com is initialized inline in index.html so the booking widget can render
// directly inside the schedule section.

/**
 * Google Analytics integration (uncomment when ready to use)
 */
/*
function trackEvent(action, category, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}
*/

// ===== ACCESSIBILITY ENHANCEMENTS =====

// Announce page changes to screen readers
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.style.position = 'absolute';
    announcement.style.left = '-10000px';
    announcement.style.width = '1px';
    announcement.style.height = '1px';
    announcement.style.overflow = 'hidden';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Skip to main content functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add skip link if it doesn't exist
    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.href = '#main';
        skipLink.className = 'skip-link';
        skipLink.textContent = 'Skip to main content';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #2563eb;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 10001;
            transition: top 0.3s;
        `;
        
        skipLink.addEventListener('focus', function() {
            this.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', function() {
            this.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);
    }
});

console.log('My Merlin Tutor Website - JavaScript loaded successfully!');

