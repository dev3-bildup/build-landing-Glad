class LearnerHero {
    constructor(config = {}) {
        this.config = {
            title: "Connected by Learning, Empowered by Bildup AI",
            subtitle: "Seamlessly Connected Learning Ecosystem.",
            description: "Whether you're guiding a classroom, supporting a child at home, or leading a school, Bildup AI gives you the tools to make learning more connected, insightful, and effective—every step of the way.",
            ctaText: "Get started with Bildup AI",
            ...config
        };
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
        this.hero.className = 'learner-hero';
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
            Connected by <span class="learner-hero-learning">Learning</span>,<br>
            Empowered by <span class="learner-hero-bildup">Bildup AI</span>
        `;

        this.hero.innerHTML = `
            <div class="learner-hero-content">
                <h1 class="learner-hero-title">${formattedTitle}</h1>
                <p class="learner-hero-description">Whether you're guiding a classroom, supporting a child at home, or leading a school, Bildup AI gives you the tools to make learning more connected, insightful, and effective—every step of the way.</p>
                <button class="learner-cta-button">Get started with Bildup AI</button>
                <p class="learner-hero-subheadline">${this.config.subtitle}</p>
            </div>
            <div class="learner-hero-devices">
                <img src="public/hero-up-left.png" class="learner-hero-device learner-hero-device-left" alt="Learning analytics dashboard" loading="lazy" />
                <img src="public/hero-up-right.png" class="learner-hero-device learner-hero-device-right" alt="Mobile learning interface" loading="lazy" />
            </div>
        `;
    }

    createMobileLayout() {
        const mobileFormattedTitle = `
            Connected by <span class="learner-hero-learning">Learning</span>,<br>
            Empowered by <span class="learner-hero-bildup">Bildup AI</span>
        `;

        this.hero.innerHTML = `
            <div class="learner-hero-content learner-hero-content-mobile">
                <h1 class="learner-hero-title learner-hero-title-mobile">${mobileFormattedTitle}</h1>
                <p class="learner-hero-description learner-hero-description-mobile">Whether you're guiding a classroom, supporting a child at home, or leading a school, Bildup AI gives you the tools to make learning more connected, insightful, and effective—every step of the way.</p>
                <button class="learner-cta-button learner-cta-button-mobile">Get started with Bildup AI</button>
                <p class="learner-hero-subheadline learner-hero-subheadline-mobile">${this.config.subtitle}</p>
            </div>
            <div class="learner-hero-devices-mobile">
                <img src="public/up-mobile-left.png" class="learner-hero-device learner-hero-device-mobile-left" alt="Mobile learning analytics" loading="lazy" />
                <img src="public/up-mobile-right.png" class="learner-hero-device learner-hero-device-mobile-right" alt="Mobile learning interface" loading="lazy" />
            </div>
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

export default LearnerHero; 