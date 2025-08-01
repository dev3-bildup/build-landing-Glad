import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import AnimationManager from '../utils/AnimationManager.js';
import Animations from '../components/Animations.js';


class ContactPage {
    constructor() {
        this.components = {};
        this.init();
    }

    init() {

        this.createHeader();
        this.createFooter();
        this.setupFormValidation();
        this.setupEventListeners();
        this.setupAnimationManager();
        this.setupMotionAnimations();
    }

    setupAnimationManager() {
        this.animationManager = new AnimationManager();
        this.animationManager.addLoadingAnimation();
    }

    setupMotionAnimations() {

        setTimeout(() => {
            if (typeof motion !== 'undefined') {
                this.animations = new Animations();
            } else {
                console.warn('Motion One not available, using CSS animations only');

                this.animations = new Animations();
            }
        }, 500);
    }
    createHeader() {
        try {
            this.components.header = new Header();
            const headerContainer = document.getElementById('header-container');
            if (headerContainer) {

                headerContainer.appendChild(this.components.header.render());
            } else {
                console.error('ContactPage: Header container not found - check if #header-container exists in HTML');
            }
        } catch (error) {
            console.error('ContactPage: Failed to create header:', error);
        }
    }


    createFooter() {
        try {

            this.components.footer = new Footer();

            document.body.appendChild(this.components.footer.render());
        } catch (error) {
            console.error('ContactPage: Failed to create footer:', error);
        }
    }

    setupFormValidation() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        const inputs = form.querySelectorAll('input, textarea, select');

        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });

        form.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    validateField(field) {
        const fieldName = field.name;
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';


        this.clearFieldError(field);

        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = `${this.getFieldLabel(field)} is required`;
        }


        if (fieldName === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }


        if (fieldName === 'phone' && value) {
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }


        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else if (value) {
            field.classList.add('border-green-500');
        }

        return isValid;
    }

    getFieldLabel(field) {
        const label = field.previousElementSibling;
        return label ? label.textContent.replace(' *', '').replace(' *', '') : 'This field';
    }

    showFieldError(field, message) {
        field.classList.add('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');

        let errorElement = field.parentNode.querySelector('.error-message');
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.className = 'error-message text-red-500 text-sm mt-1';
            field.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    clearFieldError(field) {
        field.classList.remove('border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
        field.classList.add('border-gray-300', 'focus:border-transparent', 'focus:ring-bildup-blue');

        const errorElement = field.parentNode.querySelector('.error-message');
        if (errorElement) {
            errorElement.remove();
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            this.submitForm(data);
        } else {
            this.showNotification('Please correct the errors in the form.', 'error');
        }
    }

    submitForm(data) {
        const submitButton = document.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        submitButton.classList.add('opacity-75');

      
        const endpoint = 'https://api-dev.bildup.ai/contact-us'; 

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-75');

                this.showNotification('Thank you! Your message has been sent successfully.', 'success');

                document.querySelector('.contact-form').reset();

                const inputs = document.querySelectorAll('input, textarea, select');
                inputs.forEach(input => {
                
                    input.classList.remove('border-green-500', 'border-red-500', 'focus:border-red-500', 'focus:ring-red-500');
                
                    input.classList.add('border-gray-300', 'focus:border-transparent', 'focus:ring-bildup-blue');
                });

           
                const errorMessages = document.querySelectorAll('.error-message');
                errorMessages.forEach(msg => msg.remove());
            })
            .catch(error => {
                console.error('Error:', error);
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.classList.remove('opacity-75');
                this.showNotification('Failed to send message. Please try again.', 'error');
            });
    }

    setupEventListeners() {
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

        // window.addEventListener('scroll', () => {
        //     const header = document.querySelector('.header');
        //     if (header) {
        //         if (window.scrollY > 100) {
        //             header.style.background = 'rgba(255, 255, 255, 0.98)';
        //             header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        //         } else {
        //             header.style.background = 'rgba(255, 255, 255, 0.95)';
        //             header.style.boxShadow = 'none';
        //         }
        //     }
        // });

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

        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });


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
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;


        notification.className = `
            fixed top-5 right-5 px-5 py-3 rounded-lg text-white font-medium z-50 
            transform translate-x-full transition-transform duration-300 max-w-xs 
            ${type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-bildup-blue'}
        `;


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
        Object.values(this.components).forEach(component => {
            if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contactPage = new ContactPage();
});

export default ContactPage; 