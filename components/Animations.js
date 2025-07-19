class Animations {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.setupAnimations();
            });
        } else {
            this.setupAnimations();
        }
    }

    setupAnimations() {
        console.log('Setting up enhanced CSS animations');

        // Add a small delay to ensure DOM is fully ready
        setTimeout(() => {
            this.setupHeroImageAnimations();
            this.setupScrollAnimations();
            this.setupHeroAnimations();
            this.setupMobileMenuAnimations();
            this.setupButtonAnimations();
            console.log('All animations initialized');
        }, 100);
    }

    setupIntroSectionAnimation() {
        const intro = document.querySelector('.intro-content');
        if (!intro) return;

        // Add CSS animation class
        intro.classList.add('fade-in-up');

        // Intersection Observer to trigger animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });
        observer.observe(intro);
    }

    setupHeroImageAnimations() {
        console.log('Setting up hero image animations');
        // Animate each hero image into place from its respective corner
        const heroImages = [
            { selector: '.hero-img-1', delay: 0, from: 'bottom-left' },
            { selector: '.hero-img-2', delay: 0.15, from: 'top-right' },
            { selector: '.hero-img-3', delay: 0.3, from: 'top-left' },
            { selector: '.hero-img-4', delay: 0.45, from: 'bottom-right' }
        ];

        heroImages.forEach((img, index) => {
            const el = document.querySelector(img.selector);
            if (el) {
                console.log(`Applying animation to ${img.selector}`);
                // Add CSS animation class with delay
                el.style.animationDelay = `${img.delay}s`;
                el.classList.add('hero-img-animate', `hero-img-${img.from}`);
                console.log(`Animation classes added to ${img.selector}:`, el.classList.toString());

                // Add responsive handling
                this.handleResponsiveImage(el, img.selector);
            } else {
                console.warn(`Element not found: ${img.selector}`);
            }
        });
    }

    handleResponsiveImage(element, selector) {
        // Handle window resize for responsive images
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            // Adjust animation timing based on screen size
            if (width < 768) {
                element.style.animationDuration = '1.2s';
            } else if (width < 1024) {
                element.style.animationDuration = '1.4s';
            } else {
                element.style.animationDuration = '1.5s';
            }
        };

        // Initial call
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);
    }

    setupScrollAnimations() {
        // Animate sections as they come into view (excluding hero section)
        const sections = document.querySelectorAll('section');

        sections.forEach((section, index) => {
            // Skip hero section - check for hero-related classes or if it's the first section
            const isHeroSection = section.classList.contains('hero') ||
                section.querySelector('.hero-title') ||
                section.querySelector('.hero-content') ||
                index === 0; // Usually hero is the first section

            if (!isHeroSection) {
                section.style.animationDelay = `${index * 0.2}s`;
                section.classList.add('fade-in-up');

                const observer = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible');
                        }
                    });
                }, { threshold: 0.1 });
                observer.observe(section);
            }
        });

        // Animate images with a subtle scale effect
        const images = document.querySelectorAll('.section-image img, .bildup-image img');

        images.forEach((img) => {
            img.classList.add('image-scale-in');

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            observer.observe(img);
        });
    }

    setupHeroAnimations() {
        console.log('Setting up hero animations');
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const ctaButton = document.querySelector('.cta-button');

        if (heroTitle) {
            console.log('Adding animation to hero title');
            heroTitle.classList.add('hero-title-animate');
            this.handleResponsiveText(heroTitle, 'title');
        } else {
            console.warn('Hero title not found');
        }

        if (heroSubtitle) {
            console.log('Adding animation to hero subtitle');
            heroSubtitle.style.animationDelay = '0.3s';
            heroSubtitle.classList.add('hero-subtitle-animate');
            this.handleResponsiveText(heroSubtitle, 'subtitle');
        } else {
            console.warn('Hero subtitle not found');
        }

        if (ctaButton) {
            console.log('Adding animation to CTA button');
            ctaButton.style.animationDelay = '0.6s';
            ctaButton.classList.add('cta-button-animate');
            this.handleResponsiveText(ctaButton, 'button');
        } else {
            console.warn('CTA button not found');
        }
    }

    handleResponsiveText(element, type) {
        const handleResize = () => {
            const width = window.innerWidth;

            // Adjust animation timing based on screen size
            if (width < 768) {
                element.style.animationDuration = type === 'title' ? '1.2s' : '1s';
            } else if (width < 1024) {
                element.style.animationDuration = type === 'title' ? '1.4s' : '1.2s';
            } else {
                element.style.animationDuration = type === 'title' ? '1.8s' : '1.5s';
            }
        };

        // Initial call
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);
    }

    setupMobileMenuAnimations() {
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');
        const closeButton = document.querySelector('.mobile-menu-close');

        // Mobile menu animations will be handled by CSS transitions
        if (navMenu) {
            navMenu.classList.add('mobile-menu-ready');
        }

        // Add stagger animation to nav links
        navLinks.forEach((link, index) => {
            link.style.animationDelay = `${0.1 + (index * 0.1)}s`;
            link.classList.add('nav-link-animate');
        });

        if (closeButton) {
            closeButton.style.animationDelay = '0.2s';
            closeButton.classList.add('close-button-animate');
        }
    }

    // Animate mobile menu backdrop
    animateBackdrop(show) {
        const backdrop = document.querySelector('.mobile-menu-backdrop');
        if (backdrop) {
            if (show) {
                backdrop.classList.add('active');
            } else {
                backdrop.classList.remove('active');
            }
        }
    }

    // Animate CTA button hover
    setupButtonAnimations() {
        const buttons = document.querySelectorAll('.cta-button, .header-cta-button');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.classList.add('button-hover');
            });

            button.addEventListener('mouseleave', () => {
                button.classList.remove('button-hover');
            });
        });
    }

    // Animate footer links
    setupFooterAnimations() {
        const footerLinks = document.querySelectorAll('.footer-nav-links a, .social-links img');

        footerLinks.forEach((link, index) => {
            link.style.animationDelay = `${index * 0.1}s`;
            link.classList.add('footer-link-animate');
        });
    }
}

export default Animations; 