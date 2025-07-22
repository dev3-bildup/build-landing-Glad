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
            title: "Connected by <span>Learning </span>, Empowered by <span>Bildup AI</span>",
            subtitle: "Seamlessly Connected Learning Ecosystem",
            ctaText: "Get Started with Bildup AI",
        });

        this.components.intro = new IntroSection({
            paragraphs: [
                "Bildup AI is built for the full learning circle. Designed to empower schools, teachers and parents.",
                "From the classroom to the living room. Schools, teachers and parents all get the tools, insights, and support they need to elevate every learner.",
                "Say goodbye to frustration and hello to personalized learning designed for every learner.",
                "Let's make learning easier, together."
            ],
            className: "learner-intro-section"
        });

        // Section 1: Powering Smarter Schools (Blue gradient section)
        this.components.poweringSchoolsSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'Powering Smarter Schools',
            description: 'Bildup AI helps schools lead the way beyond digital learning. Get the capacity to track student progress in real-time, support your teachers with smart tools, and shape the future of education.',
            backgroundImage: 'public/studyanywherebg.png', 
            mainImage: 'public/nightIphone.png',
            imagePosition: 'left',
            titleColor: 'linear-gradient(to right, #185A9D, #43CEA2, #43CEA2)',
            descriptionColor: '#696969',
            cards: [
            {
                image: 'public/learner/smarter.png'
            },
            {
                image: 'public/learner/smarter-AI.png'
            },
            {
                image: 'public/learner/smarter-student.png'
            }
            ],
            className: 'powering-schools-section',
            mobileTopImage: 'public/learner/smarter-mobile.png'
        });

        // Section 2: On The Go, Quick Updates
        this.components.onTheGoSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'On The Go, Quick Updates',
            description: "With Bildup, you're never in the dark. Get smart updates, track your child's progress, and support them-even if you're miles away.",
            mainImage: 'public/learner/triq-update.png',
            imagePosition: 'left',
            titleColor: 'radial-gradient(circle, #46B83D, #111E0B, #111E0B)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/learner/update-vid.png'
                },
                {
                    image: 'public/learner/update-AI.png'
                },
                {
                    image: 'public/learner/update-learn.png'
                }
            ],
            className: 'on-the-go-section',
            mobileTopImage: 'public/learner/update-mobile.png'
        });

        // Section 3: Before Class, Lesson Preview
        this.components.beforeClassSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'Before Class, Lesson Prep',
            description: "Bildup AI helps teachers teach better. From assigning lessons to tracking individual learner growth, you'll save time, stay informed, and stay connected.",
            mainImage: 'public/learner/triq-update.png',
            imagePosition: 'left',
            titleColor: 'radial-gradient(circle at center, #EEAECA, #94BBE9, #94BBE9)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/examvid.png'
                },
                {
                    image: 'public/learner/prep-AI.png'
                },
                {
                    image: 'public/learner/prep-todo.png'
                }
            ],
            className: 'before-class-section',
            mobileTopImage: 'public/mathsmall.png'
        });

        // Section 4: All Round Performance Tracking
        this.components.performanceSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'All Round Performance Tracking',
            description: 'Bildup AI helps schools track how students, teachers and classes are progressing in real time. Providing school-wide performance metrics, including spoting declining performances in students and suggesting insights to improve student performance.',
            backgroundImage: 'public/athomebg.png', // Light background
            mainImage: 'public/learner/triq-update.png',
            imagePosition: 'left',
            titleColor: 'linear-gradient(to right, #185A9D, #43CEA2, #43CEA2)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/learner/track-vid.png'
                },
                {
                    image: 'public/learner/track-AI.png'
                },
                {
                    image: 'public/learner/track-report.png'
                }
            ],
            className: 'performance-section',
            mobileTopImage: 'public/learner/track-vid-mobile.png'
        });

        // Section 5: After Work, Check-in
        this.components.afterWorkSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'After Work, Check-in Time',
            description: "End your day with smart insights. From quick summaries to guided recaps, Bildup AI provides parents with summaries of how their child's day at school went.",
            mainImage: 'public/learner/triq-update.png',
            imagePosition: 'left',
            titleColor: 'radial-gradient(circle at center, #46B83D, #111E0B)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/learner/checkin-vid.png'
                },
                {
                    image: 'public/learner/checkin-AI.png'
                },
                {
                    image: 'public/learner/checkin-topics.png'
                }
            ],
            className: 'after-work-section',
            mobileTopImage: 'public/learner/checkin-vidsmall.png'
        });

        // Section 6: Late Night, Creative Self Learning (Dark/Purple theme)
        this.components.lateNightSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: 'Late Night, Grading and Planning',
            description: 'Tired? Stuck? Bildup AI jumps in instantly to help you catch up on grading students or classes as well as creating and assigning study plans to students to improve their performances or prepare them for the class ahead.',
            backgroundImage: 'public/exambg.png', // Dark background
            mainImage: 'public/learner/triq-update.png',
            imagePosition: 'left',
            titleColor: 'radial-gradient(circle at center, #C8B9E8,  #4A90E2)',
            descriptionColor: '#696969',
            cards: [
                {
                    image: 'public/examvid.png'
                },
                {
                    image: 'public/learner/grading-AI.png'
                },
                {
                    image: 'public/learner/grading-plan.png'
                }
            ],
            className: 'late-night-section',
            mobileTopImage: 'public/mathsmall.png'
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

    
        if (this.animationManager) {
            this.animationManager.destroy();
        }
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LearnerPage();
}); 