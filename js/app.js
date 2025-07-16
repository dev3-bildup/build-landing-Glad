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

        this.components.hero = new Hero({
            title: "Your AI Tutor, Built Just for You",
            subtitle: "Seamlessly Connected Learning Ecosystem.",
            ctaText: "Get started with Bildup AI",
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




        this.components.studyAnywhereSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Study Anywhere",
            description: "Whether you're on the bus, walking home, or in between classes, Bildup AI turns everyday moments into a learning opportunity. No notebooks. No classrooms. Just your voice, your device and personalized learning-wherever you are.",
            backgroundImage: "public/studyanywherebg.png",
            mainImage: "public/bildipphone.png",
            imagePosition: "left",
            titleColor: "linear-gradient(to bottom right, #185A9D, #43CEA2)",
            descriptionColor: "#696969",
            cards: [
                {
                    title: "Voice-Enabled Learning",
                    description: "Bildup AI, read my notes out loud",
                    image: "public/anywherevid.png",
                  
                },
                {
                    title: "Quick Quizzes",
                    description: "Bildup AI, quiz me while i wait",
                    image: "public/anywherenote.png",
              
                },
                {
                    title: "Smart Summaries",
                    description: "Bildup AI, summarize this topic while i eat",
                    image: "public/anywheretopic.png",
              
                }
            ],
            className: "study-anywhere-section"
        });

        this.components.atHomeSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "At Home After School",
            description: "Home is your new classroom, Bildup AI makes home study stress-free. Get help with assignments, review lessons out loud, or prep for class-all from the comfort of your home.",
            backgroundImage: "public/athomebg.png",
            mainImage: "public/bildtrig.png",
            imagePosition: "left",
            titleColor: "radial-gradient(circle, #46B83D, #111E0B)",
            descriptionColor: "#696969",
            cards: [
                {
                   
                    image: "public/bildrecap.png",
                  
                },
                {
                   
                    image: "public/bildhelp.png",
                 
                },
                {
                   
                    image: "public/bildaVisual.png",
                  
                }
            ],
            className: "at-home-section"
        });

        this.components.examPrepSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Exams, Stay Ahead",
            description: "Ace your exams with confidence. Bildup AI helps you revise smarter, practice with personalized quizzes, track weak spots, and stay consistent—so you're always ready when exams come around.",
            backgroundImage: "public/exambg.png",
            mainImage: "public/ExamsCard.png",
            imagePosition: "left",
            titleColor: "radial-gradient(circle, #EEAECA, #94BBE9)",
            descriptionColor: "#696969",
            cards: [
                {
                 
                    description: "Bildup AI, read my notes out loud",
                    image: "public/examvid.png",
               

                },
                {
                 
                    description: "Bildup AI, quiz me while i wait",
                    image: "public/exammath.png",
                 
                },
                {
                
                    description: "Bildup AI, summarize this topic while i eat",
                    image: "public/examrevision.png",
                  
                }
            ],
            className: "exam-prep-section"
        });



        this.components.nightStudySection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Midnight, Study Buddy",
            description: "When everyone else is asleep, Bildup AI stays awake-ready to explain, quiz, or help you catch up at any hour. Bildup AI is ready-no noise, no pressure, just focused learning.",
            backgroundImage: "public/studyanywherebg.png",
            mainImage: "public/bildipphone.png",
            imagePosition: "left",
            titleColor: "linear-gradient(to bottom right, #185A9D, #43CEA2)",
            descriptionColor: "#696969",
            cards: [
                {
                    image: "public/anywherevid.png"
                },
                {
                 
                    image: "public/nightnotes.png"
                },
                {
               
                    image: "public/nightatoms.png"
                }
            ],
            className: "exam-prep-section"
        });


        this.components.earlyMorningSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Early Morning, Fresh Start",
            description: "Begin your day with clarity. From quick recaps to guided warm-ups, Bildup AI gets your brain moving before the world even wakes up.",
            backgroundImage: "public/athomebg.png",
            mainImage: "public/bildtrig.png",
            imagePosition: "left",
            titleColor: "radial-gradient(circle, #46B83D, #111E0B)",
            descriptionColor: "#696969",
            cards: [
                {
                    
                    image: "public/bildrecap.png"
                },
                {
                    image: "public/bildhelp.png"
                },
                {
                    image: "public/bildaVisual.png"
                }
            ],
            className: "at-home-section"
        });


        this.components.inSchoolSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "In School, Before or After Lectures",
            description: "Ace your exams with confidence. Bildup AI helps you revise smarter, practice with personalized quizzes, track weak spots, and stay consistent-so you’re always ready when exams come around.",
            backgroundImage: "public/exambg.png",
            mainImage: "public/ExamsCard.png",
            imagePosition: "left",
            titleColor: "radial-gradient(circle, #EEAECA, #94BBE9)",
            descriptionColor: "#696969",
            cards: [
                {
                  
                    image: "public/examvid.png"
                },
                {
                    
                    image: "public/exammath.png"
                },
                {
                  
                    image: "public/examrevision.png"
                }
            ],
            className: "at-home-section"
        });


        this.components.personalTutorSection = new SectionComponent({
            type: 'cards',
            layout: 'cards',
            title: "Your Personal Tutor",
            description: "Bildup AI doesn't just answer-it understands. It adapts to how you learn, tracks your progress, and gives the right help at the right time. Like a real tutor but always available.",
            backgroundImage: "public/studyanywherebg.png",
            mainImage: "public/iphone.png",
            imagePosition: "left",
            titleColor: "linear-gradient(to bottom right, #185A9D, #43CEA2)",
            descriptionColor: "#696969",
            cards: [
                {
                   
                    image: "public/tutorvid.png"
                },
                {
                  
                    image: "public/tutorprep.png"
                },
                {
                   
                    image: "public/tutorsolve.png"
                }
            ],
            className: "study-anywhere-section"
        });


        this.components.footer = new Footer();
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

        // Render Hero Section
        main.appendChild(this.components.hero.render());

        // Render Intro Section
        main.appendChild(this.components.intro.render());

        // Render Bildup Section
        main.appendChild(this.components.bildup.render());

        // Render Custom Sections

        main.appendChild(this.components.studyAnywhereSection.render());
        main.appendChild(this.components.atHomeSection.render());
        main.appendChild(this.components.examPrepSection.render());
        main.appendChild(this.components.nightStudySection.render());
        main.appendChild(this.components.earlyMorningSection.render());
        main.appendChild(this.components.inSchoolSection.render());
        main.appendChild(this.components.personalTutorSection.render());

        //Render Final Bildup Section
        main.appendChild(this.components.bildup.render());

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


        const hero = document.querySelector('.hero');
        if (hero) {
            this.animationManager.addParallaxEffect(hero);
        }

        // Add hover effects to images
        const images = document.querySelectorAll('.section-image img, .bildup-image img, .section-main-image, .card-image');
        images.forEach(img => {
            this.animationManager.addHoverEffect(img);
        });

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