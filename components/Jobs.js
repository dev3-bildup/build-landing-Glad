import Footer from './Footer.js';
import Header from './Header.js';
import AnimationManager from '../utils/AnimationManager.js';
import Animations from './Animations.js';

class Jobs {
    constructor(config = {}) {
        this.config = {
            // Hero Section
            heroTitle: "Shape the <span class='#005AAC'>Future</span>,</br> with <span class='#005AAC'>Bildup AI</span>",
            heroSubtitle: "If you're passionate about innovation, learning, and making a real impact, we'd love to have you on board. Explore open roles or send us your application.",
            heroCTAText: "Explore Careers",
            heroImage: "public/contact-img.png",
            heroImageAlt: "Bildup AI Team",
            heroImageCaption: "Work where passion meets purpose.",


            missionTitle: "Vision for the future, guided by Progress",
            missionContent: "At Bildup AI, we're on a mission to make personalized, high quality education accessible to every learner – anytime, anywhere. Our AI-powered platform empowers students, teachers, schools and parents globally by blending cutting-edge technology with educational expertise.",

            jobsSectionTitle: "Open Roles at Bildup AI",
            jobsData: [
                {
                    id: 1,
                    title: "Operations and Research Head",
                    description: "Are you passionate about driving operational excellence and conducting breakthrough research?",
                    type: "Featured",
                    location: "Remote",
                    department: "Operations"
                },
                {
                    id: 2,
                    title: "Machine Learning Engineer",
                    description: "Are you passionate about building intelligent systems that solve real-world problems?",
                    type: "Engineering",
                    location: "Remote",
                    department: "Engineering"
                },
                {
                    id: 3,
                    title: "Communications and Brand Strategy",
                    description: "Are you a creative storyteller passionate about building powerful brands and driving meaningful connections?",
                    type: "Marketing",
                    location: "Remote",
                    department: "Marketing"
                }
            ],

            // Filters
            filters: ["All", "Design", "Software Engineering", "Customer Success", "Sales", "Marketing"],

            // Form Section
            formTitle: "Don't See Your Role? We Still Want to Hear From You!",
            formSubtitle: "We're always on the lookout for exceptional talent. Even if you can't see a position that fits your skills, send us over a CV or cover letter and we'd love to hear from you.",

            className: "jobs-page",
            ...config
        };

        this.header = null;
        this.footer = null;
        this.page = null;
        this.init();
    }

    init() {
        this.createHeader();
        this.createFooter();
        this.setupAnimationManager();
        this.setupMotionAnimations();
        this.createPage();
        this.addEventListeners();
    }

    createHeader() {
        try {
            this.header = new Header();
            const headerContainer = document.getElementById('header-content');
            if (headerContainer) {
                headerContainer.appendChild(this.header.render());
            } else {
                console.error('Jobs: Header container not found - check if #header-content exists in HTML');
            }
        } catch (error) {
            console.error('Jobs: Failed to create header:', error);
        }
    }

    createFooter() {
        try {
            this.footer = new Footer();
            const footerContainer = document.getElementById('footer-content');
            if (footerContainer) {
                footerContainer.appendChild(this.footer.render());
            } else {
                console.error('Jobs: Footer container not found - check if #footer-content exists in HTML');
            }
        } catch (error) {
            console.error('Jobs: Failed to create footer:', error);
        }
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

    createPage() {
        this.page = document.createElement('div');
        this.page.className = `${this.config.className} min-h-screen bg-white`;

        // Create hero section
        const heroSection = this.createHeroSection();
        this.page.appendChild(heroSection);

        // Create mission section
        const missionSection = this.createMissionSection();
        this.page.appendChild(missionSection);

        // Create jobs section
        const jobsSection = this.createJobsSection();
        this.page.appendChild(jobsSection);

        // Create form section
        const formSection = this.createFormSection();
        this.page.appendChild(formSection);
    }

    createHeroSection() {
        const section = document.createElement('section');
        section.className = 'py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8';

        const container = document.createElement('div');
        container.className = 'max-w-5xl mx-auto';

        const heroContent = document.createElement('div');
        heroContent.className = 'text-center space-y-8';

        // Title
        const title = document.createElement('h1');
        title.className = 'text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-gray-900 leading-tight';
        title.innerHTML = this.config.heroTitle;

        // Subtitle
        const subtitle = document.createElement('p');
        subtitle.className = 'text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed';
        subtitle.textContent = this.config.heroSubtitle;

        // CTA Button
        const ctaButton = document.createElement('button');
        ctaButton.className = 'inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#0071E3] hover:bg-blue-600 text-white font-semibold rounded-full transition-colors duration-200 text-sm md:text-base';
        ctaButton.textContent = this.config.heroCTAText;

        // Image Container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'mt-12 md:mt-16 flex flex-col items-center space-y-4';

        const image = document.createElement('img');
        image.src = this.config.heroImage;
        image.alt = this.config.heroImageAlt;
        image.className = 'rounded-b-2xl shadow-2xl w-full max-w-4xl h-auto object-cover';

        const imageCaption = document.createElement('p');
        imageCaption.className = 'text-sm text-[#005AAC] font-medium';
        imageCaption.textContent = this.config.heroImageCaption;

        imageContainer.appendChild(image);
        imageContainer.appendChild(imageCaption);

        heroContent.appendChild(title);
        heroContent.appendChild(subtitle);
        heroContent.appendChild(ctaButton);
        heroContent.appendChild(imageContainer);

        container.appendChild(heroContent);
        section.appendChild(container);

        return section;
    }

    createMissionSection() {
        const section = document.createElement('section');
        section.className = 'py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-20';
        section.style.background = 'linear-gradient(90deg, #0071E3 0%, #005AAC 100%)';


        const container = document.createElement('div');
        container.className = 'max-w-3xl mx-auto text-center';

        const title = document.createElement('h4');
        title.className = 'text-sm md:text-base  text-white mb-6 ';
        title.textContent = this.config.missionTitle;

        const content = document.createElement('h2');
        content.className = 'text-xl md:text-2xl lg:text-5xl text-white flex items-center leading-relaxed tracking-wider font-semibold';
        content.textContent = this.config.missionContent;

        container.appendChild(title);
        container.appendChild(content);
        section.appendChild(container);

        return section;
    }

    createJobsSection() {
        const section = document.createElement('section');
        section.className = 'py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white';

        const container = document.createElement('div');
        container.className = 'max-w-7xl mx-auto';

        // Header
        const header = document.createElement('div');
        header.className = 'text-center mb-12';

        const title = document.createElement('h2');
        title.className = 'text-3xl md:text-4xl lg:text-3xl font-semibold text-[#161616] mb-8';
        title.textContent = this.config.jobsSectionTitle;

        // Filters
        const filtersContainer = document.createElement('div');
        filtersContainer.className = 'flex flex-wrap justify-center items-center gap-4 mb-6';

        const filters = this.createFilters();
        filtersContainer.appendChild(filters);

        // Search Section (separate, below filters)
        const searchContainer = this.createSearchContainer();

        header.appendChild(title);
        header.appendChild(filtersContainer);
        header.appendChild(searchContainer);

        // Jobs Grid
        const jobsGrid = document.createElement('div');
        jobsGrid.className = 'gap-24 mb-12';

        this.config.jobsData.forEach(job => {
            const jobCard = this.createJobCard(job);
            jobsGrid.appendChild(jobCard);
        });

        // Pagination
        const pagination = this.createPagination();

        container.appendChild(header);
        container.appendChild(jobsGrid);
        container.appendChild(pagination);
        section.appendChild(container);

        return section;
    }

    createFilters() {
        const filtersContainer = document.createElement('div');
        filtersContainer.className = 'flex flex-wrap justify-center gap-2 md:gap-3 bg-[#F8F8F8] p-3 rounded-lg';

        this.config.filters.forEach((filter, index) => {
            const filterButton = document.createElement('button');
            filterButton.className = index === 0
                ? 'px-4 py-2 bg-blue-500 rounded text-[#636363] font-medium text-sm transition-colors duration-200'
                : 'px-4 py-2   text-[#636363] font-medium text-sm transition-colors duration-200';
            filterButton.textContent = filter;
            filterButton.dataset.filter = filter;
            filtersContainer.appendChild(filterButton);
        });

        return filtersContainer;
    }

    createSearchContainer() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'flex justify-center mb-8';

        // Input wrapper with button inside
        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'relative max-w-[43rem] w-full';

        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search jobs';
        searchInput.className = 'w-full pl-4 pr-20 py-2 border border-[#D6F3FF] focus:outline-none focus:ring-2 focus:ring-[#D6F3FF] focus:border-transparent';


        const searchButton = document.createElement('button');
        searchButton.className = 'absolute right-0.5 top-1/2 transform -translate-y-1/2 bg-[#0071E3] hover:bg-blue-600 text-white px-5 py-2  transition-colors duration-200 font-medium';
        searchButton.textContent = 'Search';
        searchButton.type = 'button';

        inputWrapper.appendChild(searchInput);
        inputWrapper.appendChild(searchButton);
        searchContainer.appendChild(inputWrapper);

        return searchContainer;
    }

    createJobCard(job) {
        const cardWrapper = document.createElement('div');
        cardWrapper.className = 'mb-8';

        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl  hover:shadow-lg transition-shadow duration-300 p-6 border border-[#2995ea]';

        // Type Tag
        const typeTag = document.createElement('span');
        const typeColors = {
            'featured': 'bg-[#1B3022] text-[#ffffff]',
            'engineering': 'bg-[#53FF45] text-[#161616]',
            'marketing': 'bg-[#3B7080] text-[#ffffff]',
            'design': 'bg-pink-100 text-pink-800'
        };
        typeTag.className = `inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 ${typeColors[job.type.toLowerCase()] || 'bg-gray-100 text-gray-800'}`;
        typeTag.textContent = job.type;

        // Title
        const title = document.createElement('h3');
        title.className = 'text-xl font-bold text-gray-900 mb-3 leading-tight';
        title.textContent = job.title;

        // Description
        const description = document.createElement('p');
        description.className = 'text-gray-600 mb-4 leading-relaxed';
        description.textContent = job.description;

        // Meta
        const meta = document.createElement('div');
        meta.className = 'text-sm text-gray-500 flex items-center';
        meta.innerHTML = `<img src="public/time.png" alt="Location Icon" class="w-4 h-4 ml-2  mr-2 inline-block vertical align" />${job.location}`;

        // Apply Button
        const applyButton = document.createElement('button');
        applyButton.className = 'text-left text-[#0071E3] font-semibold py-3 px-4  transition-colors duration-200 flex items-center justify-center';
        applyButton.innerHTML = `Apply <img src="public/location.png" alt="Location Icon" class="w-3 h-3 ml-2 inline-block vertical align" />`;
        applyButton.dataset.jobId = job.id;

        card.appendChild(typeTag);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(meta);
        card.appendChild(applyButton);

        cardWrapper.appendChild(card);

        return cardWrapper;
    }

    createPagination() {
        const pagination = document.createElement('div');
        pagination.className = 'flex justify-center items-center space-x-2';

        // Previous Button
        const prevButton = document.createElement('button');
        prevButton.className = 'px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200';
        prevButton.innerHTML = '<svg class="w-4 h-4 mr-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>Previous';

        // Page Numbers
        const pageNumbers = document.createElement('div');
        pageNumbers.className = 'flex space-x-1';

        for (let i = 1; i <= 5; i++) {
            const pageButton = document.createElement('button');
            pageButton.className = i === 1
                ? 'w-10 h-10 bg-blue-500 text-white font-semibold rounded-lg'
                : 'w-10 h-10 text-gray-500 hover:text-gray-700 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200';
            pageButton.textContent = i;
            pageNumbers.appendChild(pageButton);
        }

        // Next Button
        const nextButton = document.createElement('button');
        nextButton.className = 'px-4 py-2 text-gray-500 hover:text-gray-700 font-medium transition-colors duration-200';
        nextButton.innerHTML = 'Next<svg class="w-4 h-4 ml-1 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';

        pagination.appendChild(prevButton);
        pagination.appendChild(pageNumbers);
        pagination.appendChild(nextButton);

        return pagination;
    }

    createFormSection() {
        const section = document.createElement('section');
        section.className = 'py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white';

        const container = document.createElement('div');
        container.className = 'max-w-4xl mx-auto ';

        // Header
        const header = document.createElement('div');
        header.className = 'text-center mb-12';

        const title = document.createElement('h2');
        title.className = 'text-3xl md:text-4xl font-bold text-gray-900 mb-4';
        title.textContent = this.config.formTitle;

        const subtitle = document.createElement('p');
        subtitle.className = 'text-lg text-gray-600 leading-relaxed';
        subtitle.textContent = this.config.formSubtitle;

        header.appendChild(title);
        header.appendChild(subtitle);

        // Form
        const form = document.createElement('form');
        form.className = 'space-y-6';

        // Form Fields
        const fieldsContainer = document.createElement('div');
        fieldsContainer.className = 'p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-12 bg-[#f9f3fe] rounded-lg border-gray-200 border';


        const nameField = this.createFormField('text', 'Enter name', 'Name');
        const emailField = this.createFormField('email', 'Enter email', 'Email');
        const linkedinField = this.createFormField('text', 'Enter linkedin username', 'LinkedIn Profile');
        const resumeField = this.createFormField('file', 'resume', 'CV Upload');

        fieldsContainer.appendChild(nameField);
        fieldsContainer.appendChild(emailField);
        fieldsContainer.appendChild(linkedinField);
        fieldsContainer.appendChild(resumeField);

        const coverLetterField = this.createTextareaField('coverLetter', 'Cover Letter');

      
        const coverLetterWrapper = document.createElement('div');
        coverLetterWrapper.className = 'md:col-span-2'; 
        coverLetterWrapper.appendChild(coverLetterField);

        fieldsContainer.appendChild(coverLetterWrapper);


        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = ' bg-[#0071e3] hover:bg-blue-600 text-white font-semibold py-3 px-12 rounded-3xl transition-colors duration-200 text-lg';
        submitButton.textContent = 'Submit';

        // Create wrapper for submit button to span full width
        const submitButtonWrapper = document.createElement('div');
        submitButtonWrapper.className = 'md:col-span-2 flex justify-center mt-4';
        submitButtonWrapper.appendChild(submitButton);

        fieldsContainer.appendChild(submitButtonWrapper);

        form.appendChild(fieldsContainer);

        container.appendChild(header);
        container.appendChild(form);
        section.appendChild(container);

        return section;
    }

    createFormField(type, name, placeholder) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2 ';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700';
        label.textContent = placeholder;
        label.htmlFor = name;

        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.id = name;
        input.placeholder = placeholder;
        input.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        return fieldContainer;
    }

    createTextareaField(name, placeholder) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700';
        label.textContent = placeholder;
        label.htmlFor = name;

        const textarea = document.createElement('textarea');
        textarea.name = name;
        textarea.id = name;
        textarea.placeholder = placeholder;
        textarea.rows = 6;
        textarea.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical';

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(textarea);
        return fieldContainer;
    }

    addEventListeners() {
        // Filter buttons
        const filterButtons = this.page.querySelectorAll('[data-filter]');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => {
                    btn.className = 'px-4 py-2 bg-white hover:bg-gray-100 text-gray-700 font-medium text-sm transition-colors duration-200';
                });

                // Add active class to clicked button
                e.target.className = 'px-4 py-2 bg-blue-500 text-white font-medium text-sm transition-colors duration-200';

                this.filterJobs(e.target.dataset.filter);
            });
        });

        // Apply buttons
        const applyButtons = this.page.querySelectorAll('[data-job-id]');
        applyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const jobId = e.target.dataset.jobId;
                this.handleJobApplication(jobId);
            });
        });

        // Form submission
        const form = this.page.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(new FormData(form));
            });
        }

        // CTA button
        const ctaButton = this.page.querySelector('button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                this.scrollToJobs();
            });
        }
    }

    filterJobs(filter) {
        console.log('Filtering jobs by:', filter);
        // Implement job filtering logic
    }

    handleJobApplication(jobId) {
        console.log('Applying for job:', jobId);

        // Route to appropriate apply page based on current page
        const currentPage = this.config.className;

        if (currentPage === 'career-page') {
            window.location.href = 'apply-career.html';
        } else if (currentPage === 'apprenticeship-page') {
            window.location.href = 'apply-apprenticeship.html';
        } else {
            // Default fallback
            window.location.href = 'apply-career.html';
        }
    }

    handleFormSubmission(formData) {
        console.log('Form submitted:', Object.fromEntries(formData));
        // Implement form submission logic
    }

    scrollToJobs() {
        const jobsSection = this.page.querySelector('.bg-gray-50');
        if (jobsSection) {
            jobsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    render() {
        return this.page;
    }

    destroy() {
        if (this.page && this.page.parentNode) {
            this.page.parentNode.removeChild(this.page);
        }
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.destroy();
        this.init();
    }
}

export default Jobs; 