class Header {
    constructor() {

        this.header = null;
        this.init();
    }

    init() {

        this.createHeader();
        this.addEventListeners();

    }

    createHeader() {

        this.header = document.createElement('header');
        this.header.className = 'header';
        this.header.innerHTML = `
            <nav class="nav">
                <div class="nav-container">
                    <div class="logo">
                        <img src="public/logo.png" alt="Bildup AI Logo" loading="lazy">
                    </div>
                        <ul class="nav-menu">
                        <div class="mobile-menu-header">
                                       
                        </div>
                        <li><a href="index.html" style="text-decoration: none;">Home</a></li>
                        <li><a href="learner.html" style="text-decoration: none;">Students</a></li>
                        <li><a href="career.html" style="text-decoration: none;">Careers</a></li>
                        <li><a href="apprenticeship.html" style="text-decoration: none;">Apprenticeship</a></li>
                        <li><a href="contact.html" style="text-decoration: none;">Contact Us</a></li>
                        </ul>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                 <a href="https://www.bildup.ai/" class="header-cta-button" style="text-decoration: none;">Get Started</a>
                </div>
            </nav>
            <div class="mobile-menu-backdrop"></div>
        `;

    }

    addEventListeners() {

        const hamburger = this.header.querySelector('.hamburger');
        const navMenu = this.header.querySelector('.nav-menu');
        const navLinks = this.header.querySelectorAll('.nav-menu a');
        const backdrop = this.header.querySelector('.mobile-menu-backdrop');
        const closeButton = this.header.querySelector('.mobile-menu-close');


        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
                backdrop.classList.toggle('active');


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

                        // Animate backdrop
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
                        // Animate menu closing
                        motion(navMenu, {
                            x: [0, 300],
                            opacity: [1, 0],
                            transition: {
                                duration: 0.3,
                                easing: [0.25, 0.46, 0.45, 0.94]
                            }
                        });

                        // Animate backdrop closing
                        motion(backdrop, {
                            opacity: [1, 0],
                            transition: {
                                duration: 0.3,
                                easing: [0.25, 0.46, 0.45, 0.94]
                            }
                        });
                    }
                } else {

                }
            });
        } else {

        }

        // Close button functionality
        if (closeButton) {
            closeButton.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                backdrop.classList.remove('active');

                // Animate menu closing
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                // Animate backdrop closing
                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });
        }

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                backdrop.classList.remove('active');

                // Animate menu closing
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                // Animate backdrop closing
                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });
        });

        if (backdrop) {
            backdrop.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                backdrop.classList.remove('active');

                // Animate menu closing
                motion(navMenu, {
                    x: [0, 300],
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });

                // Animate backdrop closing
                motion(backdrop, {
                    opacity: [1, 0],
                    transition: {
                        duration: 0.3,
                        easing: [0.25, 0.46, 0.45, 0.94]
                    }
                });
            });
        }

        document.addEventListener('click', (e) => {
            if (!this.header.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                backdrop.classList.remove('active');

                // Animate menu closing
                // motion(navMenu, {
                //     x: [0, 300],
                //     opacity: [1, 0],
                //     transition: {
                //         duration: 0.3,
                //         easing: [0.25, 0.46, 0.45, 0.94]
                //     }
                // });

                // Animate backdrop closing
                // motion(backdrop, {
                //     opacity: [1, 0],
                //     transition: {
                //         duration: 0.3,
                //         easing: [0.25, 0.46, 0.45, 0.94]
                //     }
                // });
            }
        });

        // Header background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.style.background = '#ffffff';
                ;
            } else {
                this.header.style.background = '#ffffff';
            }
        });


    }

    render() {

        return this.header;
    }

    destroy() {
        if (this.header && this.header.parentNode) {
            this.header.parentNode.removeChild(this.header);
        }
    }
}

export default Header; 