class FeatureSection {
    constructor(config = {}) {
        this.config = {
            title: "Feature",
            description: "Feature description",
            image: "public/placeholder.png",
            imageAlt: "Feature image",
            backgroundColor: "white", 
            imagePosition: "right", 
            className: "feature-section",
            ...config
        };
        this.section = null;
        this.init();
    }

    init() {
        this.createSection();
        this.addEventListeners();
    }

    createSection() {
        this.section = document.createElement('section');
        this.section.className = `${this.config.className} ${this.config.backgroundColor === 'gray' ? 'bg-gray' : ''}`;

        const container = document.createElement('div');
        container.className = 'container';

        const content = document.createElement('div');
        content.className = 'section-content';

        // Create text and image elements
        const textElement = this.createTextElement();
        const imageElement = this.createImageElement();

 
        if (this.config.imagePosition === 'left') {
            content.appendChild(imageElement);
            content.appendChild(textElement);
        } else {
            content.appendChild(textElement);
            content.appendChild(imageElement);
        }

        container.appendChild(content);
        this.section.appendChild(container);
    }

    createTextElement() {
        const textDiv = document.createElement('div');
        textDiv.className = 'section-text';

        const title = document.createElement('h2');
        title.textContent = this.config.title;

        const description = document.createElement('p');
        description.textContent = this.config.description;

        textDiv.appendChild(title);
        textDiv.appendChild(description);

        return textDiv;
    }

    createImageElement() {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'section-image';

        const img = document.createElement('img');
        img.src = this.config.image;
        img.alt = this.config.imageAlt;

        imageDiv.appendChild(img);
        return imageDiv;
    }

    addEventListeners() {
        const image = this.section.querySelector('.section-image img');
        if (image) {
            image.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.02)';
            });

            image.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)';
            });
        }
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

export default FeatureSection; 