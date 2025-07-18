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
                        <img src="public/logo.png" alt="Bildup AI Logo">
                    </div>
                        <ul class="nav-menu">
                        <div class="mobile-menu-header">
                   
                        <button class="mobile-menu-close">X</button>
                        </div>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#features">Careers</a></li>
                        <li><a href="#about">Apprenticeship</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                     <button class="header-cta-button">Get Started</button>
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

        // console.log('Header: Mobile menu elements found:', {
        //     hamburger: !!hamburger,
        //     navMenu: !!navMenu,
        //     backdrop: !!backdrop,
        //     closeButton: !!closeButton
        // }); // Debug log

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Header: Hamburger clicked');

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
                this.header.style.background = 'rgba(255, 255, 255, 0.98)';
                ;
            } else {
                this.header.style.background = 'rgba(255, 255, 255, 0.95)';
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