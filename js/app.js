import Header from '../components/Header.js';
import Hero from '../components/Hero.js';
import IntroSection from '../components/IntroSection.js';
import BildupSection from '../components/BildupSection.js';
import SectionComponent from '../components/FeatureSection.js';
import Footer from '../components/Footer.js';
import AnimationManager from '../utils/AnimationManager.js';
import Animations from '../components/Animations.js';
import FinalCTASection from '../components/FinalCTASection.js';

class LandingPage {
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

                this.animations = new Animations();
            }
        }, 500);
    }

    createComponents() {

        this.components.header = new Header();

        this.components.hero = new Hero({
            logo: "public/hero-icon.png",
            title: "Your AI Tutor, Built Just for You",
            subtitle: "Seamlessly Connected Learning Ecosystem.",
            ctaText: "Get started with Bildup AI",
        });

        this.components.intro = new IntroSection({
            paragraphs: [
                "Master concepts effortlessly with a personal AI tutor that understands how you learn.",
            ]
        });

        this.components.bildup = new BildupSection({
            title: "Powering the Future of Education",
            description: [
                "Bildup AI is a fully AI-powered learning ecosystem where every aspect of the learning journey is intelligently designed for impact, optimized for real-world outcomes, and personalized to each learner's goals. Bildup AI is your all-in-one intelligent AI learning companion.",
                "Built for professionals, students and non-students, industry leaders, and individuals focused on career development.",
            ],
            image: "public/herosection.png",
            imageAlt: "Bildup AI Platform"
        });




        this.components.studyAnywhereSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Study Anywhere",
            description: "Whether you're on the bus, walking home, or in between classes, Bildup AI turns everyday moments into a learning opportunity. No notebooks. No classrooms. Just your voice, your device and personalized learning-wherever you are.",
            backgroundImage: "public/studyanywherebg.png",
            mainImage: "public/bildipphone.png",
            imagePosition: "left",
            titleColor: "linear-gradient(97.17deg, #185A9D 10.8%, #43CEA2 43.73%)",
            descriptionColor: "#696969",
            cards: [
                {
                    title: "Voice-Enabled Learning",
                    description: "Bildup AI, read my notes out loud",
                    image: "public/studybig.png",

                },
                {
                    title: "Quick Quizzes",
                    description: "Bildup AI, quiz me while i wait",
                    image: "public/anywherenote.png",
                    mobileImage: "public/anywherenote-mobile.png"
                },
                {
                    title: "Smart Summaries",
                    description: "Bildup AI, summarize this topic while i eat",
                    image: "public/anywheretopic.png",
                    mobileImage: "public/anywheretopic-mobile.png"
                }
            ],
            className: "study-anywhere-section",
            mobileTopImage: "public/studysmall.png"
        });

        this.components.atHomeSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Achieve more with AI Mastery",
            description: "With the AI Mastery Program, your learning space is wherever you are. Build a solid foundation in AI with lessons that adapt to your pace, simplify complex ideas, and empower you with AI-enhanced applicable knowledge.",
            backgroundImage: "public/athomebg.png",
            mainImage: "public/bildtrig.png",
            imagePosition: "left",
            titleColor: "radial-gradient(18.27% 145.21% at 23.31% 58.65%, #46B83D 0%, #111E0B 100%)",
            descriptionColor: "#696969",
            cards: [
                {
                    image: "public/bildrecap.png",
                    mobileImage: "public/masterbig.png"
                },
                {
                    image: "public/bildhelp.png",
                    mobileImage: "public/bildhelp-mobile.png"
                },
                {
                    image: "public/bildaVisual.png",
                    mobileImage: "public/bildaVisual-mobile.png"
                }
            ],
            className: "at-home-section",
            mobileTopImage: "public/mastersmall.png"
        });

        this.components.examPrepSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Accelerate your Business Growth with AI",
            description: "Build smarter, more resilient businesses with AI. Our program shows you where AI fits in your operations, helps you innovate, and prepares your company to scale in an AI-first world.",
            backgroundImage: "public/exambg.png",
            mainImage: "public/ExamsCard.png",
            imagePosition: "left",
            titleColor: "radial-gradient(18.27% 145.21% at 23.31% 58.65%, #EEAECA 0%, #94BBE9 100%)",
            descriptionColor: "#696969",
            cards: [
                {
                    description: "Bildup AI, read my notes out loud",
                    image: "public/examvid.png",
                    mobileImage: "public/growthbig.png"
                },
                {
                    description: "Bildup AI, quiz me while i wait",
                    image: "public/exammath.png",
                    mobileImage: "public/exammath-mobile.png"
                },
                {
                    description: "Bildup AI, summarize this topic while i eat",
                    image: "public/examrevision.png",
                    mobileImage: "public/examrevision-mobile.png"
                }
            ],
            className: "exam-prep-section",
            mobileTopImage: "public/growthsmall.png"
        });


        this.components.footer = new Footer();
    }

    renderPage() {
        const main = document.querySelector('main');
        if (!main) {
            console.error('Main element not found');
            return;
        }

        console.log('Starting to render page...');
        main.innerHTML = '';

        // Render Header
        console.log('Rendering header...');
        document.body.insertBefore(this.components.header.render(), document.body.firstChild);

        // Render Hero Section
        console.log('Rendering hero...');
        main.appendChild(this.components.hero.render());

        // Render Intro Section
        console.log('Rendering intro...');
        main.appendChild(this.components.intro.render());

        // Render Bildup Section
        console.log('Rendering bildup...');
        main.appendChild(this.components.bildup.render());

        // Render Custom Sections 
        console.log('Rendering study anywhere section...');
        main.appendChild(this.components.studyAnywhereSection.render());

        console.log('Rendering at home section...');
        main.appendChild(this.components.atHomeSection.render());

        console.log('Rendering exam prep section...');
        main.appendChild(this.components.examPrepSection.render());

        //Render Final Bildup Section with button
        console.log('Rendering final bildup section...');
        const finalBildupSection = new BildupSection({
            subtitle: "Bildup AI is designed for every path and everyone",
            title: "Empowering Every Role",
            description: "From mastering AI fundamentals, to building workforce skills, to driving business growth-Bildup AI adapts to your goals and empowers you to grow, compete, lead and thrive in an AI-driven world.",
            image: "public/herosection.png",
            imageAlt: "Bildup AI Platform",
            showButton: true,
            buttonText: "Get started with Bildup AI",
            className: "bildup-section final-bildup-section"
        });
        main.appendChild(finalBildupSection.render());

        // Render Final CTA Section before Footer
        console.log('Rendering final CTA section...');
        main.appendChild(new FinalCTASection().render());

        // Render Footer
        console.log('Rendering footer...');
        const footerElement = this.components.footer.render();
        console.log('Footer element:', footerElement);
        document.body.appendChild(footerElement);

        console.log('Page rendering complete. Main children count:', main.children.length);
        console.log('Body children count:', document.body.children.length);

        // Setup animations for all sections
        this.setupAnimations();
    }

    setupAnimations() {
        const sections = document.querySelectorAll('section');
        this.animationManager.observeElements(sections);


        // Hero section parallax effect removed
        // const hero = document.querySelector('.hero');
        // if (hero) {
        //     this.animationManager.addParallaxEffect(hero);
        // }

        // Add hover effects to images
        const images = document.querySelectorAll('.section-image img, .bildup-image img, .section-main-image, .card-image');
        images.forEach(img => {
            this.animationManager.addHoverEffect(img);
        });

        // Ensure CSS animations are initialized
        setTimeout(() => {
            if (this.animations) {

                this.animations.setupAnimations();
            } else {

                this.animations = new Animations();
            }
        }, 100);
    }

    destroy() {
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