class SectionComponent {
    constructor(config = {}) {
        this.config = {
            // Section type: 'hero', 'feature', 'card', 'gradient'
            type: 'feature',

            // Background settings
            backgroundImage: null,
            backgroundColor: 'white',
            backgroundGradient: null,

            // Content settings
            title: "",
            subtitle: "",
            description: "",

            // Card settings (for card-type sections)
            cards: [],

            // Image settings
            mainImage: null,
            imageAlt: "Section Image",
            imagePosition: "right", // left, right, center

            // Layout settings
            layout: "text-image", // text-image, cards, hero, gradient
            textAlignment: "left", // left, center, right

            // Styling
            className: "custom-section",
            titleColor: "#161616",
            descriptionColor: "#696969",

            // Responsive settings
            mobileLayout: "stack", // stack, grid, single

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
        this.section.className = `${this.config.className} section-${this.config.type}`;

        // Set background
        this.setBackground();

        const container = document.createElement('div');
        container.className = 'container';

        // Create content based on layout type
        switch (this.config.layout) {
            case 'hero':
                this.createHeroLayout(container);
                break;
            case 'cards':
                this.createCardsLayout(container);
                break;
            case 'gradient':
                this.createGradientLayout(container);
                break;
            default:
                this.createTextImageLayout(container);
        }

        this.section.appendChild(container);
    }

    setBackground() {
        if (this.config.backgroundImage) {
            this.section.style.setProperty('--bg-image', `url(${this.config.backgroundImage})`);
            this.section.style.backgroundImage = `var(--bg-image)`;
            this.section.style.backgroundSize = 'cover';
            this.section.style.backgroundPosition = 'center';
            this.section.style.backgroundRepeat = 'no-repeat';
        } else if (this.config.backgroundGradient) {
            this.section.style.background = this.config.backgroundGradient;
        } else {
            this.section.style.backgroundColor = this.config.backgroundColor;
        }
    }

    createHeroLayout(container) {
        const content = document.createElement('div');
        content.className = 'hero-content';

        // Title and description
        if (this.config.title) {
            const title = document.createElement('h1');
            title.className = 'hero-title';
            title.textContent = this.config.title;
            title.style.color = this.config.titleColor;
            content.appendChild(title);
        }

        if (this.config.description) {
            const description = document.createElement('p');
            description.className = 'hero-description';
            description.textContent = this.config.description;
            description.style.color = this.config.descriptionColor;
            content.appendChild(description);
        }

        // Main image
        if (this.config.mainImage) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'hero-image-container';

            const img = document.createElement('img');
            img.src = this.config.mainImage;
            img.alt = this.config.imageAlt;
            img.className = 'hero-main-image';

            imageContainer.appendChild(img);
            content.appendChild(imageContainer);
        }

        container.appendChild(content);
    }

    createCardsLayout(container) {
        const content = document.createElement('div');
        content.className = 'cards-content';

        // Title
        if (this.config.title) {
            const title = document.createElement('h2');
            title.className = 'cards-title';
            title.textContent = this.config.title;
            title.style.color = this.config.titleColor;
            content.appendChild(title);
        }

        // Cards container
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-grid';

        this.config.cards.forEach(card => {
            const cardElement = this.createCard(card);
            cardsContainer.appendChild(cardElement);
        });

        content.appendChild(cardsContainer);
        container.appendChild(content);
    }

    createCard(cardConfig) {
        const card = document.createElement('div');
        card.className = 'feature-card';

        // Card background image
        if (cardConfig.backgroundImage) {
            card.style.backgroundImage = `url(${cardConfig.backgroundImage})`;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
        }

        // Card content
        const cardContent = document.createElement('div');
        cardContent.className = 'card-content';

        if (cardConfig.title) {
            const title = document.createElement('h3');
            title.className = 'card-title';
            title.textContent = cardConfig.title;
            cardContent.appendChild(title);
        }

        if (cardConfig.description) {
            const description = document.createElement('p');
            description.className = 'card-description';
            description.textContent = cardConfig.description;
            cardContent.appendChild(description);
        }

        if (cardConfig.image) {
            const img = document.createElement('img');
            img.src = cardConfig.image;
            img.alt = cardConfig.imageAlt || 'Card Image';
            img.className = 'card-image';
            cardContent.appendChild(img);
        }

        card.appendChild(cardContent);
        return card;
    }

    createGradientLayout(container) {
        const content = document.createElement('div');
        content.className = 'gradient-content';

        // Title
        if (this.config.title) {
            const title = document.createElement('h2');
            title.className = 'gradient-title';
            title.textContent = this.config.title;
            title.style.color = this.config.titleColor;
            content.appendChild(title);
        }

        // Description
        if (this.config.description) {
            const description = document.createElement('p');
            description.className = 'gradient-description';
            description.textContent = this.config.description;
            description.style.color = this.config.descriptionColor;
            content.appendChild(description);
        }

        // Main image
        if (this.config.mainImage) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'gradient-image-container';

            const img = document.createElement('img');
            img.src = this.config.mainImage;
            img.alt = this.config.imageAlt;
            img.className = 'gradient-main-image';

            imageContainer.appendChild(img);
            content.appendChild(imageContainer);
        }

        container.appendChild(content);
    }

    createTextImageLayout(container) {
        const content = document.createElement('div');
        content.className = 'text-image-content';

        // Text content
        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';

        if (this.config.subtitle) {
            const subtitle = document.createElement('h3');
            subtitle.className = 'section-subtitle';
            subtitle.textContent = this.config.subtitle;
            subtitle.style.color = this.config.titleColor;
            textContainer.appendChild(subtitle);
        }

        if (this.config.title) {
            const title = document.createElement('h2');
            title.className = 'section-title';
            title.textContent = this.config.title;
            title.style.color = this.config.titleColor;
            textContainer.appendChild(title);
        }

        if (this.config.description) {
            const description = document.createElement('p');
            description.className = 'section-description';
            description.textContent = this.config.description;
            description.style.color = this.config.descriptionColor;
            textContainer.appendChild(description);
        }

        // Image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        if (this.config.mainImage) {
            const img = document.createElement('img');
            img.src = this.config.mainImage;
            img.alt = this.config.imageAlt;
            img.className = 'section-main-image';
            imageContainer.appendChild(img);
        }

        // Arrange content based on image position
        if (this.config.imagePosition === 'left') {
            content.appendChild(imageContainer);
            content.appendChild(textContainer);
        } else {
            content.appendChild(textContainer);
            content.appendChild(imageContainer);
        }

        container.appendChild(content);
    }

    addEventListeners() {
        // Add hover effects to images
        const images = this.section.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.02)';
            });

            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });
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

export default SectionComponent; 