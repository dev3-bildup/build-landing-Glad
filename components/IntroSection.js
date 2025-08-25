class IntroSection {
    constructor(config = {}) {
        this.config = {
            paragraphs: [
                "Master concepts effortlessly with a personal AI tutor that understands how you learn.",
                // "Aligned with your school curriculum, it adapts continuously to meet your evolving needs—making studying smarter, faster and more effective.",
                // "Say goodbye to frustration and hello to personalized learning designed just for you.",
                // "Let's make learning easier, together."
            ],
            className: "intro-section",
            ...config
        };
        this.section = null;
        this.init();
    }

    init() {
        this.createSection();
    }

    createSection() {
        this.section = document.createElement('section');
        this.section.className = this.config.className;
   

        const container = document.createElement('div');
        container.className = 'container';

        const content = document.createElement('div');
        content.className = 'intro-content';

        const textDiv = document.createElement('div');
        textDiv.className = 'intro-text';

        this.config.paragraphs.forEach((paragraph, index) => {
            const p = document.createElement('p');
            if (index === 0) {
                p.className = 'intro-highlight';
            }
            p.textContent = paragraph;
            textDiv.appendChild(p);
        });

        content.appendChild(textDiv);
        container.appendChild(content);
        this.section.appendChild(container);
    }

    render() {
        return this.section;
    }

    destroy() {
        if (this.section && this.section.parentNode) {
            this.section.parentNode.removeChild(this.section);
        }
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.destroy();
        this.init();
    }
}

export default IntroSection; 