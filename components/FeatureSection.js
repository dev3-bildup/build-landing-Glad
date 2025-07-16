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



        // Main image and text layout (top part)
        if (this.config.mainImage) {
            const topSection = document.createElement('div');
            topSection.className = 'section-top-content';

            // Title at the top
            if (this.config.title) {
                const title = document.createElement('h2');
                title.className = 'section-top-title';
                title.textContent = this.config.title;

                // Handle gradient colors
                if (this.config.titleColor && this.config.titleColor.includes('gradient')) {
                    console.log('Applying gradient to title:', this.config.titleColor);

                    // Apply gradient with multiple fallbacks
                    title.style.backgroundImage = this.config.titleColor;
                    title.style.backgroundClip = 'text';
                    title.style.webkitTextFillColor = 'transparent';
                    title.style.display = 'inline-block';
                    title.style.backgroundSize = '100% 100%';
                    title.style.backgroundRepeat = 'no-repeat';
                    title.style.backgroundPosition = 'center';
                    title.style.color = 'transparent';
                    title.style.fontWeight = 'bold';

                    // Add CSS class for additional styling
                    title.classList.add('gradient-text');

                    // Fallback for browsers that don't support background-clip: text
                    if (!CSS.supports('background-clip', 'text')) {
                        title.style.color = this.config.titleColor.includes('linear-gradient') ? '#185A9D' : '#46B83D';
                    }
                } else {
                    title.style.color = this.config.titleColor;
                }

                topSection.appendChild(title);
            }

            // Image and description side by side
            const imageTextContainer = document.createElement('div');
            imageTextContainer.className = 'section-image-text-container';

            const imageContainer = document.createElement('div');
            imageContainer.className = 'section-image-container';

            const img = document.createElement('img');
            img.src = this.config.mainImage;
            img.alt = this.config.imageAlt || 'Section Image';
            img.className = 'section-main-image';
            imageContainer.appendChild(img);

            const textContainer = document.createElement('div');
            textContainer.className = 'section-text-container';

            if (this.config.description) {
                const description = document.createElement('p');
                description.className = 'section-description';
                description.textContent = this.config.description;

                // Handle gradient colors for description
                if (this.config.descriptionColor && this.config.descriptionColor.includes('gradient')) {
                    description.style.backgroundImage = this.config.descriptionColor;
                    description.style.backgroundClip = 'text';
                    description.style.webkitTextFillColor = 'transparent';
                    description.style.display = 'inline-block';
                    description.style.backgroundSize = '100% 100%';
                } else {
                    description.style.color = this.config.descriptionColor;
                }

                textContainer.appendChild(description);
            }

            // Arrange based on image position
            if (this.config.imagePosition === 'left') {
                imageTextContainer.appendChild(imageContainer);
                imageTextContainer.appendChild(textContainer);
            } else {
                imageTextContainer.appendChild(textContainer);
                imageTextContainer.appendChild(imageContainer);
            }

            topSection.appendChild(imageTextContainer);
            content.appendChild(topSection);
        }

        const cardsContainer = document.createElement('div');


        if (this.config.cards.length >= 3) {
            cardsContainer.className = 'cards-special-layout';


            const topCard = this.createCard(this.config.cards[0]);
            topCard.className = 'feature-card top-card';
            cardsContainer.appendChild(topCard);

            const bottomRow = document.createElement('div');
            bottomRow.className = 'bottom-cards-row';

            // Add remaining cards side by side
            for (let i = 1; i < this.config.cards.length; i++) {
                const cardElement = this.createCard(this.config.cards[i]);
                cardElement.className = 'feature-card bottom-card';
                bottomRow.appendChild(cardElement);
            }

            cardsContainer.appendChild(bottomRow);
        } else {
            // Default grid layout for sections with fewer than 3 cards
            cardsContainer.className = 'cards-grid';

            this.config.cards.forEach(card => {
                const cardElement = this.createCard(card);
                cardsContainer.appendChild(cardElement);
            });
        }

        content.appendChild(cardsContainer);
        container.appendChild(content);
    }

    createCard(cardConfig) {
        const card = document.createElement('div');
        card.className = 'feature-card';

        // Just display the image directly
        if (cardConfig.image) {
            const img = document.createElement('img');
            img.src = cardConfig.image;
            img.alt = cardConfig.imageAlt || 'Feature Image';
            img.className = 'card-image';
            card.appendChild(img);
        }

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


        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';

        if (this.config.mainImage) {
            const img = document.createElement('img');
            img.src = this.config.mainImage;
            img.alt = this.config.imageAlt;
            img.className = 'section-main-image';
            imageContainer.appendChild(img);
        }


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