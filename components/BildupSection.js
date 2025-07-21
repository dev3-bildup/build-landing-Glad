class BildupSection {
    constructor(config = {}) {
        this.config = {
            subtitle: "Bildup AI - Built for Smarter Learning",
            title: "Powering the Future of Education",
            description: "Bildup AI is your all-in-one intelligent learning companion. Built to help students learn better, teachers teach smarter, and schools grow stronger. With adaptive learning, voice-enabled learning lessons, instant feedback, and personalized progress tracking, Bildup AI makes education more connected, and more accessible than ever before.",
            image: "public/herosection.png",
            imageAlt: "Bildup AI Platform",
            className: "bildup-section",
            showButton: false,
            buttonText: "Get Started",
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

        const description = document.createElement('p');
        description.className = 'bildup-description';
        description.textContent = this.config.description;

        textDiv.appendChild(subtitle);
        textDiv.appendChild(title);
        textDiv.appendChild(description);

        return textDiv;
    }

    createImageElement() {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'bildup-image';

        // Add button if showButton is true
        if (this.config.showButton) {
            console.log('Creating button for bildup section');
            const button = document.createElement('button');
            button.className = this.config.buttonClass;
            button.textContent = this.config.buttonText;
            button.style.display = 'block';
            button.style.visibility = 'visible';
            imageDiv.appendChild(button);
            console.log('Button created and added:', button);
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

        // Add button event listener if button exists
        const button = this.section.querySelector('.bildup-image .cta-button');
        if (button) {
            button.addEventListener('click', () => {
                // You can customize this action as needed
                console.log('Bildup CTA button clicked!');
                // Example: scroll to a specific section or open a modal
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