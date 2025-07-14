import Header from './components/Header.js';
import Hero from './components/Hero.js';
import IntroSection from './components/IntroSection.js';
import BildupSection from './components/BildupSection.js';
import FeatureSection from './components/FeatureSection.js';
import Footer from './components/Footer.js';
import AnimationManager from './utils/AnimationManager.js';
import Animations from './components/Animations.js';
import FinalCTASection from './components/FinalCTASection.js';

class LandingPage {
    constructor() {
        this.components = {};
        this.animationManager = null;
        this.animations = null;
        this.init();
    }

    init() {
        this.setupAnimationManager();
        this.createComponents();
        this.renderPage();
        this.setupEventListeners();
        this.setupMotionAnimations();
    }

    setupAnimationManager() {
        this.animationManager = new AnimationManager();
        this.animationManager.addLoadingAnimation();
    }

    setupMotionAnimations() {
        // Initialize Motion One animations
        this.animations = new Animations();

        setTimeout(() => {
            this.animations.setupButtonAnimations();
            this.animations.setupFooterAnimations();
        }, 100);
    }

    createComponents() {

        this.components.header = new Header();


        this.components.hero = new Hero({
            title: "Your AI Tutor, Built Just for You",
            subtitle: "Seamlessly Connected Learning Ecosystem.",
            ctaText: "Get started with Bildup AI",
            // backgroundImage: "public/herobg.png",
            // backgroundImageMobile: "public/herobgsmall.png"
        });


        this.components.intro = new IntroSection({
            paragraphs: [
                "Master concepts effortlessly with a personal AI tutor that understands how you learn.",
                "Aligned with your school curriculum, it adapts continuously to meet your evolving needs—making studying smarter, faster and more effective.",
                "Say goodbye to frustration and hello to personalized learning designed just for you.",
                "Let's make learning easier, together."
            ]
        });


        this.components.bildup = new BildupSection({
            subtitle: "Bildup AI - Built for Smarter Learning",
            title: "Powering the Future of Education",
            description: "Bildup AI is your all-in-one intelligent learning companion. Built to help students learn better, teachers teach smarter, and schools grow stronger. With adaptive learning, voice-enabled learning lessons, instant feedback, and personalized progress tracking, Bildup AI makes education more connected, and more accessible than ever before.",
            image: "public/herosection.png",
            imageAlt: "Bildup AI Platform"
        });





        this.components.features = this.createFeatureSections();

        this.components.footer = new Footer();

    }

    createFeatureSections() {
        const features = [
            {
                title: "Study Anywhere",
                description: "Access your learning materials and AI tutor from any device, anywhere in the world.",
                image: "public/studyanywherebg.png",
                imageAlt: "Study Anywhere",
                backgroundColor: "white",
                imagePosition: "right",
                className: "study-anywhere"
            },
            {
                title: "Study at Home",
                description: "Create your perfect study environment with personalized learning experiences.",
                image: "public/athomebg.png",
                imageAlt: "Study at Home",
                backgroundColor: "gray",
                imagePosition: "left",
                className: "at-home"
            },
            {
                title: "Exam Preparation",
                description: "Prepare for exams with AI-powered practice tests and personalized study plans.",
                image: "public/exambg.png",
                imageAlt: "Exam Preparation",
                backgroundColor: "white",
                imagePosition: "right",
                className: "exam-prep"
            },
            {
                title: "Study Anytime",
                description: "Your AI tutor is available 24/7, ready to help you learn whenever you need it.",
                image: "public/nightatoms.png",
                imageAlt: "Midnight Study",
                backgroundColor: "gray",
                imagePosition: "left",
                className: "midnight-study"
            },
            {
                title: "Fresh Start",
                description: "Begin your learning journey with personalized recommendations and adaptive content.",
                image: "public/bildrecap.png",
                imageAlt: "Fresh Start",
                backgroundColor: "white",
                imagePosition: "right",
                className: "fresh-start"
            },
            {
                title: "Interactive Lectures",
                description: "Engage with AI-powered lectures that adapt to your learning pace and style.",
                image: "public/bildhelp.png",
                imageAlt: "Interactive Lectures",
                backgroundColor: "gray",
                imagePosition: "left",
                className: "lectures"
            },
            {
                title: "Personal AI Tutor",
                description: "Get personalized guidance and support from your dedicated AI tutor.",
                image: "public/tutorprep.png",
                imageAlt: "AI Tutor",
                backgroundColor: "white",
                imagePosition: "right",
                className: "tutor"
            },
            {
                title: "Built For You",
                description: "Every feature designed with your learning success in mind.",
                image: "public/bildaVisual.png",
                imageAlt: "Bildup For You",
                backgroundColor: "gray",
                imagePosition: "left",
                className: "bildup-for"
            }
        ];

        return features.map(feature => new FeatureSection(feature));
    }

    renderPage() {
        const main = document.querySelector('main');
        if (!main) {
            console.error('Main element not found');
            return;
        }

        // Clear existing content
        main.innerHTML = '';

        // Render Header
        document.body.insertBefore(this.components.header.render(), document.body.firstChild);

        // Render Hero
        main.appendChild(this.components.hero.render());

        // Render Intro Section
        main.appendChild(this.components.intro.render());

        // Render Bildup Section
        main.appendChild(this.components.bildup.render());

        // Render Feature Sections
        this.components.features.forEach(feature => {
            main.appendChild(feature.render());
        });

        // Render Final CTA Section before Footer
        main.appendChild(new FinalCTASection().render());

        // Render Footer
        document.body.appendChild(this.components.footer.render());

        // Setup animations for all sections
        this.setupAnimations();
    }

    setupAnimations() {
        const sections = document.querySelectorAll('section');
        this.animationManager.observeElements(sections);

        // Add parallax to hero
        const hero = document.querySelector('.hero');
        if (hero) {
            this.animationManager.addParallaxEffect(hero);
        }

        // Add hover effects to images
        const images = document.querySelectorAll('.section-image img, .bildup-image img');
        images.forEach(img => {
            this.animationManager.addHoverEffect(img);
        });
    }



    destroy() {
        // Destroy all components
        Object.values(this.components).forEach(component => {
            if (Array.isArray(component)) {
                component.forEach(comp => comp.destroy());
            } else if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });

        // Destroy animation manager
        if (this.animationManager) {
            this.animationManager.destroy();
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    window.landingPage = new LandingPage();
});

export default LandingPage; 