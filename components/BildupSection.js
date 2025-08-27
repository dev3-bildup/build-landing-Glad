class BildupSection {
    constructor(config = {}) {
        this.config = {
            title: "Powering the Future of Education",
            description: "Bildup AI is your all-in-one intelligent learning companion. Built for beginners to professionals and industry leaders. Bildup AI adapts to your learning journey, making learning more impactful. Our AI powered platform delivers personalized lessons, real-time feedback and practical insights designed to prepare you for an AI-driven future.",
            image: "public/herosection.png",
            imageAlt: "Bildup AI Platform",
            className: "bildup-section",
            showButton: false,
            buttonText: "Get Started with Bildup AI",
            buttonClass: "cta-button",
            ...config
        };
        console.log('BildupSection config:', this.config);
        this.section = null;
        this.init();
    }

    init() {
        this.createSection();
        this.addEventListeners();
    }

    createSection() {
        this.section = document.createElement('section');
        this.section.className = this.config.className;

        const container = document.createElement('div');
        container.className = 'container';

        const content = document.createElement('div');
        content.className = 'bildup-content';

        const textElement = this.createTextElement();
        const imageElement = this.createImageElement();

        content.appendChild(textElement);
        content.appendChild(imageElement);

        container.appendChild(content);
        this.section.appendChild(container);
    }

    createTextElement() {
        const textDiv = document.createElement('div');
        textDiv.className = 'bildup-text';

        const subtitle = document.createElement('h2');
        subtitle.className = 'bildup-subtitle';
        subtitle.textContent = this.config.subtitle;

        const title = document.createElement('h1');
        title.className = 'bildup-title';
        title.textContent = this.config.title;

        textDiv.appendChild(subtitle);
        textDiv.appendChild(title);

        if (Array.isArray(this.config.description)) {
            // If description is an array, create multiple paragraphs
            this.config.description.forEach((paragraph, index) => {
                const description = document.createElement('p');
                description.className = 'bildup-description';
                description.textContent = paragraph;
                textDiv.appendChild(description);
            });
        } else {
            // If description is a string, create single paragraph
            const description = document.createElement('p');
            description.className = 'bildup-description';
            description.textContent = this.config.description;
            textDiv.appendChild(description);
        }

        return textDiv;
    }

    createImageElement() {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'bildup-image';


        if (this.config.showButton) {
            const link = document.createElement('a');
            link.href = 'https://edu.bildup.ai';
            link.className = this.config.buttonClass;
            link.textContent = this.config.buttonText;
            link.style.display = 'block';
            link.style.visibility = 'visible';
            link.style.textDecoration = 'none';
            imageDiv.appendChild(link);

        }

        const img = document.createElement('img');
        img.src = this.config.image;
        img.alt = this.config.imageAlt;
        img.loading = 'lazy';

        imageDiv.appendChild(img);
        return imageDiv;
    }

    addEventListeners() {
        const image = this.section.querySelector('.bildup-image img');
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

export default BildupSection; 