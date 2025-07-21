import Header from '../components/Header.js';
import LearnerHero from '../components/LearnerHero.js';
import IntroSection from '../components/IntroSection.js';
import SectionComponent from '../components/FeatureSection.js';
import FinalCTASection from '../components/FinalCTASection.js';
import AnimationManager from '../utils/AnimationManager.js';
import Animations from '../components/Animations.js';
import Footer from '../components/Footer.js';

class LearnerPage {
    constructor() {
        this.components = {};
        this.animationManager = null;
        this.animations = null;
        this.init();
    }

    init() {
        this.setupAnimationManager();
        this.setupMotionAnimations();
        this.createComponents();
        this.renderPage();
        this.setupEventListeners();
    }

    setupAnimationManager() {
        this.animationManager = new AnimationManager();
        this.animationManager.addLoadingAnimation();
    }

    setupMotionAnimations() {
        setTimeout(() => {
            if (typeof motion !== 'undefined') {
                this.animations = new Animations();
            } else {
                console.warn('Motion One not available, using CSS animations only');
                this.animations = new Animations();
            }
        }, 500);
    }

    createComponents() {
        this.components.header = new Header();

        this.components.hero = new LearnerHero({
            title: "Connected<br>Learning",
            subtitle: "Seamlessly Connected Learning Ecosystem",
            ctaText: "Get Started"
        });

        this.components.intro = new IntroSection({
            paragraphs: [
                "Connected for Learning, Built to meet the demands of learners striving to be the best that they can be.",
                "Bildup AI is your personal tutor that understands how you learn, adapts to your pace, and helps you achieve your goals.",
                "From powering smarter schools to enabling on-the-go learning, we're here to support your educational journey.",
                "Let's transform the way you learn, together."
            ],
            className: "learner-intro-section"
        });

        // Section 1: Powering Smarter Schools (Blue gradient section)
        this.components.poweringSchoolsSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'Powering Smarter Schools',
            description: 'Bildup AI integrates seamlessly with school systems to enhance learning outcomes and provide personalized education at scale.',
            backgroundImage: 'public/studyanywherebg.png', // Blue background
            mainImage: 'public/nightIphone.png',
            imagePosition: 'right',
            titleColor: '#FFFFFF',
            descriptionColor: '#E8F4FD',
            cards: [
                {
                    image: 'public/nightnotes.png'
                },
                {
                    image: 'public/nightvid.png'
                },
                {
                    image: 'public/nightatoms.png'
                }
            ],
            className: 'powering-schools-section',
            mobileTopImage: 'public/nightIphone.png'
        });

        // Section 2: On The Go, Quick Updates
        this.components.onTheGoSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'On The Go, Quick Updates',
            description: 'Stay connected to your learning journey wherever you are. Get quick updates, review progress, and access your study materials instantly.',
            mainImage: 'public/tutorIphone.png',
            imagePosition: 'left',
            titleColor: 'linear-gradient(to bottom right, #185A9D, #43CEA2)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/anywherenote.png'
                },
                {
                    image: 'public/anywheretopic.png'
                },
                {
                    image: 'public/anywherevid.png'
                }
            ],
            className: 'on-the-go-section',
            mobileTopImage: 'public/tutorIphone.png'
        });

        // Section 3: Before Class, Lesson Preview
        this.components.beforeClassSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'Before Class, Lesson Preview',
            description: 'Get ahead of your class with personalized lesson previews. Understand key concepts before they\'re taught to maximize your classroom experience.',
            mainImage: 'public/examiphone.png',
            imagePosition: 'right',
            titleColor: 'radial-gradient(circle, #46B83D, #111E0B)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/exammath.png'
                },
                {
                    image: 'public/examrevision.png'
                },
                {
                    image: 'public/examvid.png'
                }
            ],
            className: 'before-class-section',
            mobileTopImage: 'public/examiphone.png'
        });

        // Section 4: All Round Performance Tracking
        this.components.performanceSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'All Round Performance Tracking',
            description: 'Monitor your learning progress with comprehensive analytics. Track your strengths, identify areas for improvement, and celebrate your achievements.',
            backgroundImage: 'public/athomebg.png', // Light background
            mainImage: 'public/bildiphone2.png',
            imagePosition: 'left',
            titleColor: '#161616',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/bildrecap.png'
                },
                {
                    image: 'public/bildtrig.png'
                },
                {
                    image: 'public/bildhelp.png'
                }
            ],
            className: 'performance-section',
            mobileTopImage: 'public/bildiphone2.png'
        });

        // Section 5: After Work, Check-in
        this.components.afterWorkSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'After Work, Check-in',
            description: 'End your day with a quick learning check-in. Review what you\'ve learned, set goals for tomorrow, and maintain consistent progress.',
            mainImage: 'public/tutorIphone.png',
            imagePosition: 'right',
            titleColor: 'linear-gradient(to bottom right, #185A9D, #43CEA2)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/tutorprep.png'
                },
                {
                    image: 'public/tutorsolve.png'
                },
                {
                    image: 'public/tutorvid.png'
                }
            ],
            className: 'after-work-section',
            mobileTopImage: 'public/tutorIphone.png'
        });

        // Section 6: Late Night, Creative Self Learning (Dark/Purple theme)
        this.components.lateNightSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'Late Night, Creative Self Learning',
            description: 'When inspiration strikes late at night, Bildup AI is there. Explore creative learning paths, dive deep into topics that fascinate you, and learn at your own pace.',
            backgroundImage: 'public/exambg.png', // Dark background
            mainImage: 'public/quizmewhile.png',
            imagePosition: 'left',
            titleColor: '#FFFFFF',
            descriptionColor: '#C8B9E8',
            cards: [
                {
                    image: 'public/nightnotes.png'
                },
                {
                    image: 'public/nightvid.png'
                },
                {
                    image: 'public/nightatoms.png'
                }
            ],
            className: 'late-night-section',
            mobileTopImage: 'public/quizmewhile.png'
        });

        this.components.finalCTA = new FinalCTASection();

        this.components.footer = new Footer({
            quickLinks: [
                { text: "Home", href: "index.html" },
                { text: "Learner", href: "learner.html" },
                { text: "Apprenticeship", href: "apprenticeship.html" },
                { text: "Careers", href: "career.html" },
                { text: "Contact us", href: "contact.html" }
            ]
        });
    }

    renderPage() {
        const main = document.querySelector('main');
        if (!main) {
            console.error('Main element not found');
            return;
        }

        // Clear the main container
        main.innerHTML = '';

        // Render Header
        document.body.insertBefore(this.components.header.render(), document.body.firstChild);

        // Render all other components to main
        main.appendChild(this.components.hero.render());
        main.appendChild(this.components.intro.render());
        main.appendChild(this.components.poweringSchoolsSection.render());
        main.appendChild(this.components.onTheGoSection.render());
        main.appendChild(this.components.beforeClassSection.render());
        main.appendChild(this.components.performanceSection.render());
        main.appendChild(this.components.afterWorkSection.render());
        main.appendChild(this.components.lateNightSection.render());
        main.appendChild(this.components.finalCTA.render());
        main.appendChild(this.components.footer.render());
    }

    setupEventListeners() {
        // Add smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';

        // Initialize animations after DOM is ready
        this.initializeAnimations();
    }

    initializeAnimations() {
        // Animation manager setup like in app.js
        if (this.animationManager) {
            const sections = document.querySelectorAll('section');
            this.animationManager.observeElements(sections);

            const hero = document.querySelector('.learner-hero');
            if (hero) {
                this.animationManager.addParallaxEffect(hero);
            }

            // Add hover effects to images
            const images = document.querySelectorAll('.section-image img, .section-main-image, .card-image');
            images.forEach(img => {
                this.animationManager.addHoverEffect(img);
            });
        }

        // Ensure CSS animations are initialized
        setTimeout(() => {
            if (this.animations) {
                console.log('Re-initializing animations after page render');
                this.animations.setupAnimations();
            } else {
                console.log('Creating new animations instance');
                this.animations = new Animations();
            }
        }, 100);
    }

    destroy() {
        Object.values(this.components).forEach(component => {
            if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });

        // Destroy animation manager
        if (this.animationManager) {
            this.animationManager.destroy();
        }
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LearnerPage();
}); 