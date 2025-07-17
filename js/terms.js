import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AnimationManager from '../utils/AnimationManager.js';
// import Animations from '../components/Animations.js';


class TermsPage {
    constructor() {
        this.header = null;
        this.footer = null;
        this.init();
    }

    init() {
        this.createHeader();
        this.createFooter();
        this.setupEventListeners();
        this.setupAnimationManager();
        this.setupMotionAnimations();
    }

    setupAnimationManager() {
        this.animationManager = new AnimationManager();
        this.animationManager.addLoadingAnimation();
    }

    // setupMotionAnimations() {

    //     setTimeout(() => {
    //         if (typeof motion !== 'undefined') {
    //             this.animations = new Animations();
    //         } else {
    //             console.warn('Motion One not available, using CSS animations only');

    //             this.animations = new Animations();
    //         }
    //     }, 500);
    // }

    createHeader() {
        try {
            this.header = new Header();
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {
                headerContainer.appendChild(this.header.render());
            } else {
                console.error('Header container not found');
            }
        } catch (error) {
            console.error('Failed to create header:', error);
        }
    }

    createFooter() {
        try {
            this.footer = new Footer();
            const footerContainer = document.getElementById('footer-container');
            if (footerContainer) {
                footerContainer.appendChild(this.footer.render());
            } else {
                console.error('Footer container not found');
            }
        } catch (error) {
            console.error('Failed to create footer:', error);
        }
    }

    setupEventListeners() {
        // Smooth scrolling for anchor links
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

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (header) {
                if (window.scrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = 'none';
                }
            }
        });

        // Add fade-in animation for terms sections
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all terms sections
        document.querySelectorAll('.terms-section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });

        // Newsletter form handling
        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = newsletterForm.querySelector('.newsletter-input');
                const email = emailInput.value;

                if (email && this.validateEmail(email)) {
                    this.showNotification('Thank you for subscribing!', 'success');
                    emailInput.value = '';
                } else {
                    this.showNotification('Please enter a valid email address.', 'error');
                }
            });
        }
    }

    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;

        // Style the notification with Tailwind classes
        notification.className = `
            fixed top-5 right-5 px-5 py-3 rounded-lg text-white font-medium z-50 
            transform translate-x-full transition-transform duration-300 max-w-xs 
            ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-bildup-blue'}
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
            notification.classList.add('translate-x-0');
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.remove('translate-x-0');
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    destroy() {
        if (this.header && typeof this.header.destroy === 'function') {
            this.header.destroy();
        }
        if (this.footer && typeof this.footer.destroy === 'function') {
            this.footer.destroy();
        }
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.termsPage = new TermsPage();
});

export default TermsPage; 