// Header functionality for Tailwind CSS version
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const backdrop = document.querySelector('.mobile-menu-backdrop');
    const closeButton = document.querySelector('.mobile-menu-close');
    const header = document.querySelector('header');

    console.log('Mobile menu elements:', { hamburger, navMenu, backdrop, closeButton });

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked');

            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            backdrop.classList.toggle('active');

            // Hamburger animation
            const spans = hamburger.querySelectorAll('span');
            if (hamburger.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }

            // Menu animation
            if (navMenu.classList.contains('active')) {
                navMenu.style.left = '0';
                backdrop.style.opacity = '1';
                backdrop.style.visibility = 'visible';
            } else {
                navMenu.style.left = '-100%';
                backdrop.style.opacity = '0';
                backdrop.style.visibility = 'hidden';
            }

            if (typeof motion !== 'undefined') {
                if (navMenu.classList.contains('active')) {
                    motion(navMenu, {
                        x: [300, 0],
                        opacity: [0, 1],
                        transition: {
                            duration: 0.4,
                            easing: [0.25, 0.46, 0.45, 0.94]
                        }
                    });

                    motion(backdrop, {
                        opacity: [0, 1],
                        transition: {
                            duration: 0.3,
                            easing: [0.25, 0.46, 0.45, 0.94]
                        }
                    });

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

                    motion(closeButton, {
                        scale: [0.8, 1],
                        opacity: [0, 1],
                        transition: {
                            duration: 0.3,
                            delay: 0.2,
                            easing: [0.25, 0.46, 0.45, 0.94]
                        }
                    });
                } else {
                    motion(navMenu, {
                        x: [0, 300],
                        opacity: [1, 0],
                        transition: {
                            duration: 0.3,
                            easing: [0.25, 0.46, 0.45, 0.94]
                        }
                    });

                    motion(backdrop, {
                        opacity: [1, 0],
                        transition: {
                            duration: 0.3,
                            easing: [0.25, 0.46, 0.45, 0.94]
                        }
                    });
                }
            } else {
                console.log('Motion One not available, using CSS transitions');
            }
        });
    } else {
        console.error('Hamburger or nav menu not found');
    }

    // Close button functionality
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            backdrop.classList.remove('active');

            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';

            // Reset menu position
            navMenu.style.left = '-100%';
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';

            if (typeof motion !== 'undefined') {
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            backdrop.classList.remove('active');

            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';

            // Reset menu position
            navMenu.style.left = '-100%';
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';

            if (typeof motion !== 'undefined') {
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            }
        });
    });

    if (backdrop) {
        backdrop.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            backdrop.classList.remove('active');

            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';

            // Reset menu position
            navMenu.style.left = '-100%';
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';

            if (typeof motion !== 'undefined') {
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (!header.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            backdrop.classList.remove('active');

            // Reset hamburger animation
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';

            // Reset menu position
            navMenu.style.left = '-100%';
            backdrop.style.opacity = '0';
            backdrop.style.visibility = 'hidden';

            if (typeof motion !== 'undefined') {
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            }
        }
    });

    // Header background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}); 