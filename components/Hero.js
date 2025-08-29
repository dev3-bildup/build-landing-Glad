class Hero {
    constructor(config) {
        this.config = config;
        this.hero = null;
        this.currentLayout = null;
        this.init();
        this.setupResizeListener();
    }

    init() {
        this.createHero();
        this.updateLayout();
    }

    isMobile() {
        return window.innerWidth < 700;
    }

    createHero() {
        this.hero = document.createElement('section');
        this.hero.className = 'hero';
    }

    updateLayout() {
        const mobile = this.isMobile();

        if (this.currentLayout === (mobile ? 'mobile' : 'desktop')) {
            return;
        }

        this.currentLayout = mobile ? 'mobile' : 'desktop';

        if (mobile) {
            this.createMobileLayout();
        } else {
            this.createDesktopLayout();
        }
    }

    createDesktopLayout() {
        const formattedTitle = `
            <span class="hero-black">Empowered to <br/> make a <br/> <span class="hero-blue">Difference</span>
        `;
        this.hero.innerHTML = `
            <div class="hero-content">
                <img src="${this.config.logo}" class="hero-logo" alt="Bildup AI Logo" loading="lazy" />
                <h1 class="hero-title">${formattedTitle}</h1>
                <a href="${'https://edu.bildup.ai/'}" class="cta-button" style="text-decoration: none;">${this.config.ctaText}</a>
                <p class="hero-subheadline">${this.config.subtitle}</p>
            </div>
            <img src="public/hero-up-left.png" class="hero-img hero-img-1" alt="MacBook dashboard" loading="lazy" />
            <img src="public/hero-up-right.png" class="hero-img hero-img-2" alt="Tablet dashboard 1" loading="lazy" />
            <img src="public/hero-down-left.png" class="hero-img hero-img-3" alt="Tablet dashboard 2" loading="lazy" />
            <img src="public/hero-right-down.png" class="hero-img hero-img-4" alt="Mobile dashboard" loading="lazy" />
        `;
    }

    createMobileLayout() {
        const mobileFormattedTitle = `
            <span class="hero-black">Empowered to make <br>a <span class="hero-blue">Difference</span>
        `;
        this.hero.innerHTML = `
            <div class="hero-content hero-content-mobile">
                <img src="${this.config.logo}" class="hero-logo hero-logo-mobile" alt="Bildup AI Logo" loading="lazy" />
                <h1 class="hero-title hero-title-mobile">${mobileFormattedTitle}</h1>
                <a href="${'https://edu.bildup.ai/'}" class="cta-button cta-button-mobile" style="text-decoration: none;">${this.config.ctaText}</a>
                 <p class="hero-subheadline hero-subheadline-mobile">Seamlessly Connected Learning Ecosystem</p>
            </div>
            <img src="public/up-mobile-left.png" class="hero-img hero-img-mobile-1" alt="Mobile dashboard top left" loading="lazy" />
            <img src="public/up-mobile-right.png" class="hero-img hero-img-mobile-2" alt="Mobile dashboard top right" loading="lazy" />
            <img src="public/down-mobile-right.png" class="hero-img hero-img-mobile-3" alt="Mobile dashboard bottom left" loading="lazy" />
            <img src="public/down-mobile-left.png" class="hero-img hero-img-mobile-4" alt="Mobile dashboard bottom right" loading="lazy" />
        `;
    }

    setupResizeListener() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.updateLayout();
            }, 100);
        });
    }

    render() {
        return this.hero;
    }

    destroy() {
        if (this.hero && this.hero.parentNode) {
            this.hero.parentNode.removeChild(this.hero);
        }

        window.removeEventListener('resize', this.updateLayout.bind(this));
    }
}

export default Hero; 