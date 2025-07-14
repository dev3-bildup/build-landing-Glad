class Hero {
    constructor(config) {
        this.config = config;
        this.hero = null;
        this.init();
    }

    init() {
        this.createHero();
    }

    createHero() {
        this.hero = document.createElement('section');
        this.hero.className = 'hero';
    
        const formattedTitle = `
            <span class="hero-black">Your</span> <span class="hero-black">AI</span> <span class="hero-blue">Tutor,</span><br>Built Just for <span class="hero-blue">You</span>
        `;
        this.hero.innerHTML = `
            <div class="hero-content">
                <h1 class="hero-title hero-title-justify">${formattedTitle}</h1>
                <button class="cta-button">${this.config.ctaText}</button>
                <p class="hero-subheadline">${this.config.subtitle}</p>
            </div>
            <img src="public/hero-up-left.png" class="hero-img hero-img-1" alt="MacBook dashboard" />
            <img src="public/hero-up-right.png" class="hero-img hero-img-2" alt="Tablet dashboard 1" />
            <img src="public/hero-down-left.png" class="hero-img hero-img-3" alt="Tablet dashboard 2" />
            <img src="public/hero-right-down.png" class="hero-img hero-img-4" alt="Mobile dashboard" />
        `;
    }

    render() {
        return this.hero;
    }

    destroy() {
        if (this.hero && this.hero.parentNode) {
            this.hero.parentNode.removeChild(this.hero);
        }
    }
}

export default Hero; 