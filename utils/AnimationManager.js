class AnimationManager {
    constructor() {
        this.observer = null;
        this.progressBar = null;
        this.init();
    }

    init() {
        this.setupIntersectionObserver();
        this.createScrollProgress();
        this.setupSmoothScrolling();
    }

    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
    }

    observeElement(element) {
        if (this.observer && element) {
            this.observer.observe(element);
        }
    }

    observeElements(elements) {
        if (Array.isArray(elements)) {
            elements.forEach(element => this.observeElement(element));
        }
    }

    createScrollProgress() {
        this.progressBar = document.createElement('div');
        this.progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #0071E3, #3AA0F3);
            z-index: 1001;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(this.progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            this.progressBar.style.width = scrolled + '%';
        });
    }

    setupSmoothScrolling() {
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
    }

    addParallaxEffect(element, rate = -0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (element) {
                element.style.transform = `translateY(${scrolled * rate}px)`;
            }
        });
    }

    addHoverEffect(element, scale = 1.02) {
        if (element) {
            element.addEventListener('mouseenter', () => {
                element.style.transform = `scale(${scale})`;
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
            });
        }
    }

    addLoadingAnimation() {
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
    }

    destroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.progressBar && this.progressBar.parentNode) {
            this.progressBar.parentNode.removeChild(this.progressBar);
        }
    }
}

export default AnimationManager; 