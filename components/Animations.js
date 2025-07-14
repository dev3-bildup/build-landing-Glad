class Animations {
    constructor() {
        this.init();
    }

    init() {
        this.setupHeroImageAnimations();
        this.setupScrollAnimations();
        this.setupHeroAnimations();
        this.setupMobileMenuAnimations();
        this.setupButtonAnimations();
        // Removed JS scroll animation for intro section; use CSS only
    }

    setupIntroSectionAnimation() {
        const intro = document.querySelector('.intro-content');
        if (!intro) return;
        const paragraphs = intro.querySelectorAll('p');
        // Set initial state
        intro.style.opacity = 0;
        intro.style.transform = 'translateY(40px)';
        paragraphs.forEach(p => {
            p.style.opacity = 0;
            p.style.transform = 'translateY(40px)';
        });
        // Intersection Observer to trigger animation
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    motion.animate(
                        intro,
                        { opacity: 1, y: 0 },
                        { duration: 0.7, easing: 'ease-out', fill: 'forwards' }
                    );
                    paragraphs.forEach((p, i) => {
                        motion.animate(
                            p,
                            { opacity: 1, y: 0 },
                            { duration: 0.6, delay: 0.1 + i * 0.1, easing: 'ease-out', fill: 'forwards' }
                        );
                    });
                    observer.disconnect();
                }
            });
        }, { threshold: 0.2 });
        observer.observe(intro);
    }

    setupHeroImageAnimations() {
        // Animate each hero image into place from its respective corner
        const heroImages = [
            { selector: '.hero-img-1', delay: 0, from: { x: '-20vw', y: '20vh' } }, // bottom-left
            { selector: '.hero-img-2', delay: 0.15, from: { x: '20vw', y: '-20vh' } }, // top-right
            { selector: '.hero-img-3', delay: 0.3, from: { x: '-20vw', y: '-20vh' } }, // top-left
            { selector: '.hero-img-4', delay: 0.45, from: { x: '20vw', y: '20vh' } } // bottom-right
        ];
        heroImages.forEach(img => {
            const el = document.querySelector(img.selector);
            if (el) {
                // Set initial transform for slide-in
                el.style.opacity = 0;
                el.style.transform += ` translate(${img.from.x}, ${img.from.y})`;
                // Animate to final position
                motion(el, {
                    opacity: [0, 1],
                    x: [img.from.x, '0vw'],
                    y: [img.from.y, '0vh'],
                    scale: [1, 1],
                    transition: {
                        duration: 0.9,
                        delay: img.delay,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            }
        });
    }

    setupScrollAnimations() {
        // Animate sections as they come into view
        const sections = document.querySelectorAll('section');

        sections.forEach((section, index) => {
            motion(section, {
                opacity: [0, 1],
                y: [50, 0],
                transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            }, {
                target: section,
                margin: "0px 0px -100px 0px"
            });
        });

        // Animate images with a subtle scale effect
        const images = document.querySelectorAll('.section-image img, .bildup-image img');

        images.forEach((img) => {
            motion(img, {
                scale: [0.95, 1],
                opacity: [0, 1],
                transition: {
                    duration: 0.6,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            }, {
                target: img,
                margin: "0px 0px -50px 0px"
            });
        });
    }

    setupHeroAnimations() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const ctaButton = document.querySelector('.cta-button');

        if (heroTitle) {
            motion(heroTitle, {
                opacity: [0, 1],
                y: [30, 0],
                transition: {
                    duration: 1,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            });
        }

        if (heroSubtitle) {
            motion(heroSubtitle, {
                opacity: [0, 1],
                y: [20, 0],
                transition: {
                    duration: 0.8,
                    delay: 0.3,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            });
        }

        if (ctaButton) {
            motion(ctaButton, {
                opacity: [0, 1],
                y: [20, 0],
                scale: [0.9, 1],
                transition: {
                    duration: 0.8,
                    delay: 0.6,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            });
        }
    }

    setupMobileMenuAnimations() {
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-menu a');
        const closeButton = document.querySelector('.mobile-menu-close');

        // Animate mobile menu slide-in
        if (navMenu) {
            motion(navMenu, {
                x: [-300, 0],
                opacity: [0, 1],
                transition: {
                    duration: 0.4,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            }, {
                target: navMenu,
                margin: "0px"
            });
        }

        // Animate navigation links with stagger
        navLinks.forEach((link, index) => {
            motion(link, {
                x: [-20, 0],
                opacity: [0, 1],
                transition: {
                    duration: 0.4,
                    delay: 0.1 + (index * 0.1),
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            });
        });

        // Animate close button
        if (closeButton) {
            motion(closeButton, {
                scale: [0.8, 1],
                opacity: [0, 1],
                transition: {
                    duration: 0.3,
                    delay: 0.2,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            });
        }
    }

    // Animate mobile menu backdrop
    animateBackdrop(show) {
        const backdrop = document.querySelector('.mobile-menu-backdrop');
        if (backdrop) {
            motion(backdrop, {
                opacity: show ? [0, 1] : [1, 0],
                transition: {
                    duration: 0.3,
                    easing: [0.25, 0.46, 0.45, 0.94]
                }
            });
        }
    }

    // Animate CTA button hover
    setupButtonAnimations() {
        const buttons = document.querySelectorAll('.cta-button, .header-cta-button');

        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                motion(button, {
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });

            button.addEventListener('mouseleave', () => {
                motion(button, {
                    scale: 1,
                    transition: {
                        duration: 0.2,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });
        });
    }

    // Animate footer links
    setupFooterAnimations() {
        const footerLinks = document.querySelectorAll('.footer-nav-links a, .social-links img');

        footerLinks.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                motion(link, {
                    scale: 1.1,
                    y: -2,
                    transition: {
                        duration: 0.2,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });

            link.addEventListener('mouseleave', () => {
                motion(link, {
                    scale: 1,
                    y: 0,
                    transition: {
                        duration: 0.2,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });
        });
    }
}

export default Animations; 