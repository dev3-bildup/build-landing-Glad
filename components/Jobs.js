import Footer from './Footer.js';
import Header from './Header.js';
import AnimationManager from '../utils/AnimationManager.js';
import Animations from './Animations.js';

class Jobs {
    constructor(config = {}) {
        this.config = {

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
                    type: "Operations",
                    location: "Full-time",
                    department: "Operations"
                },
                {
                    id: 2,
                    title: "Machine Learning Engineer",
                    description: "Are you passionate about building intelligent systems that solve real-world problems?",
                    type: "Software Development",
                    location: "Full-time",
                    department: "Engineering"
                },
                {
                    id: 3,
                    title: "Communications and Brand Strategy",
                    description: "Are you a creative storyteller passionate about building powerful brands and driving meaningful connections?",
                    type: "Marketing",
                    location: "Full-time",
                    department: "Marketing"
                }
            ],


            filters: ["View all", "Design", "Software Engineering", "Customer Service", "Sales", "Marketing"],


            formTitle: "Don't See Your Role? We Still Want to Hear From You.",
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
        this.page.className = `${this.config.className} min-h-screen bg-white `;


        const heroSection = this.createHeroSection();
        this.page.appendChild(heroSection);


        const missionSection = this.createMissionSection();
        this.page.appendChild(missionSection);


        const jobsSection = this.createJobsSection();
        this.page.appendChild(jobsSection);


        const formSection = this.createFormSection();
        this.page.appendChild(formSection);
    }

    createHeroSection() {
        const section = document.createElement('section');
        section.className = 'mt-10 py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8';

        const container = document.createElement('div');
        container.className = 'max-w-5xl mx-auto';

        const heroContent = document.createElement('div');
        heroContent.className = 'text-center space-y-8';


        const title = document.createElement('h1');
        title.className = 'text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold text-gray-900 leading-tight';
        title.innerHTML = this.config.heroTitle;


        const subtitle = document.createElement('p');
        subtitle.className = 'text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed';
        subtitle.textContent = this.config.heroSubtitle;


        const ctaButton = document.createElement('a');
        ctaButton.href = '#jobs-section';
        ctaButton.className = 'inline-flex items-center px-6 py-3 md:px-8 md:py-4 bg-[#0071E3] hover:bg-blue-600 text-white font-semibold rounded-full transition-colors duration-200 text-sm md:text-base';
        ctaButton.textContent = this.config.heroCTAText;
        ctaButton.style.textDecoration = 'none';
        ctaButton.style.display = 'inline-block';


        const imageContainer = document.createElement('div');
        imageContainer.className = 'mt-12 md:mt-16 flex flex-col items-center space-y-4';


        const desktopImage = document.createElement('img');
        desktopImage.src = this.config.heroImage;
        desktopImage.alt = this.config.heroImageAlt;
        desktopImage.className = 'hidden md:block rounded-b-2xl shadow-2xl w-full max-w-4xl h-auto object-cover';
        desktopImage.loading = 'lazy';


        const mobileImage = document.createElement('img');
        mobileImage.src = 'public/contact-mobile.png';
        mobileImage.alt = this.config.heroImageAlt;
        mobileImage.className = 'block md:hidden rounded-b-2xl shadow-2xl w-full max-w-4xl h-auto object-cover';
        mobileImage.loading = 'lazy';

        const imageCaption = document.createElement('p');
        imageCaption.className = 'text-sm text-[#005AAC] font-medium';
        imageCaption.textContent = this.config.heroImageCaption;

        imageContainer.appendChild(desktopImage);
        imageContainer.appendChild(mobileImage);
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
        section.className = 'jobs-section py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white';
        section.id = 'jobs-section';

        const container = document.createElement('div');
        container.className = 'max-w-7xl mx-auto';


        const header = document.createElement('div');
        header.className = 'text-center mb-12';

        const title = document.createElement('h2');
        title.className = 'text-3xl md:text-4xl lg:text-3xl font-semibold text-[#161616] mb-8';
        title.textContent = this.config.jobsSectionTitle;


        const filtersContainer = document.createElement('div');
        filtersContainer.className = 'flex flex-wrap justify-center items-center gap-4 mb-6';

        const filters = this.createFilters();
        filtersContainer.appendChild(filters);


        const searchContainer = this.createSearchContainer();

        header.appendChild(title);
        header.appendChild(filtersContainer);
        header.appendChild(searchContainer);

        // Jobs Grid
        const jobsGrid = document.createElement('div');
        jobsGrid.className = 'gap-24 mb-12';

        console.log('Jobs data:', this.config.jobsData);
        this.config.jobsData.forEach(job => {
            console.log('Creating job card for:', job.title, 'Type:', job.type);
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
        filtersContainer.className = 'flex overflow-x-auto justify-start md:justify-center gap-2 md:gap-3 bg-[#F8F8F8] p-3 rounded-lg scrollbar-hide';
        filtersContainer.style.scrollbarWidth = 'none'; // Firefox
        filtersContainer.style.msOverflowStyle = 'none'; // IE/Edge

        this.config.filters.forEach((filter, index) => {
            const filterButton = document.createElement('button');
            filterButton.className = index === 0
                ? 'px-4 py-2 bg-[#1EB0FF] rounded-lg text-[#161616] font-medium text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0'
                : 'px-4 py-2 text-[#636363] font-medium text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0';
            filterButton.textContent = filter;
            filterButton.dataset.filter = filter;
            filtersContainer.appendChild(filterButton);
        });

        return filtersContainer;
    }

    createSearchContainer() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'flex justify-center mb-8';

        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'relative max-w-[45rem] w-full';

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
        card.className = 'job-card bg-white rounded-xl  hover:shadow-lg transition-shadow duration-300 p-6 border border-[#2995ea]';
        card.dataset.jobType = job.type.toLowerCase();
        card.dataset.jobTitle = job.title.toLowerCase();
        card.dataset.jobDescription = job.description.toLowerCase();
        card.dataset.jobDepartment = job.department.toLowerCase();

        const typeTag = document.createElement('span');
        const typeColors = {
            'operations': 'bg-[#1B3022] text-white',
            'engineering': 'bg-[#53FF45] text-black',
            'software development': 'bg-[#53FF45] text-black',
            'marketing': 'bg-[#3B7080] text-white',
            'sales': 'bg-blue-600 text-white',
            'design': 'bg-pink-100 text-pink-800'
        };
        const jobTypeLower = job.type.toLowerCase();
        const colorClass = typeColors[jobTypeLower] || 'bg-gray-100 text-gray-800';
        typeTag.className = `inline-block px-3 py-3 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 ${colorClass}`;
        typeTag.textContent = `• ${job.type}`;


        const title = document.createElement('h3');
        title.className = 'text-xl font-semibold text-gray-900 mb-3 leading-tight';
        title.textContent = job.title;


        const description = document.createElement('p');
        description.className = 'text-gray-600 mb-4 leading-relaxed';
        description.textContent = job.description;


        const meta = document.createElement('div');
        meta.className = 'text-sm text-gray-500 flex items-center';

        const timeIcon = document.createElement('img');
        timeIcon.src = 'public/time.png';
        timeIcon.alt = 'Time Icon';
        timeIcon.className = 'w-4 h-4 ml-2 mr-2 inline-block vertical-align';
        timeIcon.loading = 'lazy';

        const locationText = document.createElement('span');
        locationText.textContent = job.location;

        meta.appendChild(timeIcon);
        meta.appendChild(locationText);

        // Apply Button
        const applyButton = document.createElement('button');
        applyButton.className = 'text-left text-[#0071E3] font-semibold py-3 px-4  transition-colors duration-200 flex items-center justify-center';

        const applyText = document.createElement('span');
        applyText.textContent = 'Apply ';

        const locationIcon = document.createElement('img');
        locationIcon.src = 'public/location.png';
        locationIcon.alt = 'Location Icon';
        locationIcon.className = 'w-3 h-3 ml-2 inline-block vertical-align';
        locationIcon.loading = 'lazy';

        applyButton.appendChild(applyText);
        applyButton.appendChild(locationIcon);
        applyButton.dataset.jobId = job.id;

        card.appendChild(typeTag);
        console.log('Type tag appended to card. Card children count:', card.children.length);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(meta);
        card.appendChild(applyButton);

        cardWrapper.appendChild(card);

        return cardWrapper;
    }

    createPagination() {
        const pagination = document.createElement('div');
        pagination.className = 'flex justify-center items-center w-full';


        const desktopPagination = document.createElement('div');
        desktopPagination.className = 'hidden md:flex items-center justify-between w-full';

        const prevButtonDesktop = document.createElement('button');
        prevButtonDesktop.className = 'flex items-center px-4 py-2 border border-blue-200 text-gray-700 hover:text-gray-900 hover:border-blue-300 font-medium transition-all duration-200 rounded-md';
        prevButtonDesktop.innerHTML = '<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>Previous';

        const desktopPageNumbers = document.createElement('div');
        desktopPageNumbers.className = 'flex items-center space-x-1';

        [1, 2, 3].forEach(page => {
            const pageButton = document.createElement('button');
            pageButton.className = page === 1
                ? 'w-10 h-10 bg-blue-500 text-white font-semibold rounded-md'
                : 'w-10 h-10 text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium rounded-md transition-all duration-200';
            pageButton.textContent = page;
            desktopPageNumbers.appendChild(pageButton);
        });

        // Dots
        const dots = document.createElement('span');
        dots.className = 'px-2 text-gray-500';
        dots.textContent = '...';
        desktopPageNumbers.appendChild(dots);

        // Pages 8, 9, 10
        [8, 9, 10].forEach(page => {
            const pageButton = document.createElement('button');
            pageButton.className = 'w-10 h-10 text-gray-700 hover:text-gray-900 hover:bg-gray-100 font-medium rounded-md transition-all duration-200';
            pageButton.textContent = page;
            desktopPageNumbers.appendChild(pageButton);
        });


        const nextButtonDesktop = document.createElement('button');
        nextButtonDesktop.className = 'flex items-center px-4 py-2 border border-blue-200 text-gray-700 hover:text-gray-900 hover:border-blue-300 font-medium transition-all duration-200 rounded-md';
        nextButtonDesktop.innerHTML = 'Next<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';

        desktopPagination.appendChild(prevButtonDesktop);
        desktopPagination.appendChild(desktopPageNumbers);
        desktopPagination.appendChild(nextButtonDesktop);


        const mobilePagination = document.createElement('div');
        mobilePagination.className = 'flex md:hidden items-center space-x-1';


        const prevButtonMobile = document.createElement('button');
        prevButtonMobile.className = 'w-8 h-8 flex items-center justify-center border border-blue-200 text-gray-700 hover:text-gray-900 hover:border-blue-300 transition-all duration-200 rounded';
        prevButtonMobile.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';


        const page1Mobile = document.createElement('button');
        page1Mobile.className = 'w-8 h-8 bg-blue-500 text-white border border-blue-500 font-semibold rounded text-sm';
        page1Mobile.textContent = '1';

        const page2Mobile = document.createElement('button');
        page2Mobile.className = 'w-8 h-8 text-gray-700 border border-blue-200 hover:text-gray-900 hover:border-blue-300 font-medium rounded text-sm transition-all duration-200';
        page2Mobile.textContent = '2';


        const dotsMobile = document.createElement('span');
        dotsMobile.className = 'px-1 text-gray-500 text-sm';
        dotsMobile.textContent = '...';


        const page9Mobile = document.createElement('button');
        page9Mobile.className = 'w-8 h-8 text-gray-700 border border-blue-200 hover:text-gray-900 hover:border-blue-300 font-medium rounded text-sm transition-all duration-200';
        page9Mobile.textContent = '9';

        const page10Mobile = document.createElement('button');
        page10Mobile.className = 'w-8 h-8 text-gray-700 border border-blue-200 hover:text-gray-900 hover:border-blue-300 font-medium rounded text-sm transition-all duration-200';
        page10Mobile.textContent = '10';

        const nextButtonMobile = document.createElement('button');
        nextButtonMobile.className = 'w-8 h-8 flex items-center justify-center border border-blue-200 text-gray-700 hover:text-gray-900 hover:border-blue-300 transition-all duration-200 rounded';
        nextButtonMobile.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';

        mobilePagination.appendChild(prevButtonMobile);
        mobilePagination.appendChild(page1Mobile);
        mobilePagination.appendChild(page2Mobile);
        mobilePagination.appendChild(dotsMobile);
        mobilePagination.appendChild(page9Mobile);
        mobilePagination.appendChild(page10Mobile);
        mobilePagination.appendChild(nextButtonMobile);

        pagination.appendChild(desktopPagination);
        pagination.appendChild(mobilePagination);

        return pagination;
    }

    createFormSection() {
        const section = document.createElement('section');
        section.className = 'py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8 bg-white';

        const container = document.createElement('div');
        container.className = 'max-w-4xl mx-auto ';


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


        const fieldsContainer = document.createElement('div');
        fieldsContainer.className = 'p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-12 rounded-lg border-gray-200 border';
        fieldsContainer.style.background = 'radial-gradient(circle at 50% 50%, #f5f3fb 0%, #fefcff 100%)';


        const nameField = this.createFormField('text', 'name', 'Enter name', 'Name', 'public/human.png');
        const emailField = this.createFormField('email', 'email', 'Enter mail', 'Email', 'public/mail.png');
        const linkedinField = this.createFormField('text', 'linkedin', 'Enter linkedin username', 'LinkedIn Profile', 'public/human.png');
        const resumeField = this.createFormField('file', 'resume', 'Upload your CV', 'CV upload');

        fieldsContainer.appendChild(nameField);
        fieldsContainer.appendChild(emailField);
        fieldsContainer.appendChild(linkedinField);
        fieldsContainer.appendChild(resumeField);

        const coverLetterField = this.createTextareaField('coverLetter', 'Enter message');


        const coverLetterWrapper = document.createElement('div');
        coverLetterWrapper.className = 'md:col-span-2';
        coverLetterWrapper.appendChild(coverLetterField);

        fieldsContainer.appendChild(coverLetterWrapper);


        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'bg-[#0071e3] hover:bg-blue-600 text-white  py-2 px-10 rounded-3xl transition-colors duration-200 text-lg';
        submitButton.textContent = 'Submit';

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

    createFormField(type, name, placeholder, labelText, iconSrc) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2 ';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-[#344054]';
        label.htmlFor = name;


        if (labelText === 'LinkedIn Profile') {
            label.innerHTML = 'LinkedIn<span class="text-xs text-[#667085] font-normal ml-1">(Optional)</span>';
        } else {
            label.textContent = labelText;
        }

        if (type === 'file') {

            const fileWrapper = document.createElement('div');
            fileWrapper.className = 'relative';

            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.name = name;
            fileInput.id = name;
            fileInput.className = 'absolute inset-0 w-full h-full opacity-0 cursor-pointer';
            fileInput.accept = '.pdf,.doc,.docx';

            const fileDisplay = document.createElement('div');
            fileDisplay.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors duration-200';

            const fileText = document.createElement('span');
            fileText.className = 'text-[#667085]';
            fileText.textContent = 'Upload your CV';

            const uploadIcon = document.createElement('div');
            uploadIcon.className = 'text-gray-400';

            const uploadImg = document.createElement('img');
            uploadImg.src = 'public/upload.png';
            uploadImg.alt = 'Upload Icon';
            uploadImg.loading = 'lazy';

            uploadIcon.appendChild(uploadImg);

            // Handle file selection
            fileInput.addEventListener('change', function (e) {
                if (e.target.files && e.target.files[0]) {
                    fileText.textContent = e.target.files[0].name;
                    fileText.className = 'text-gray-900';
                } else {
                    fileText.textContent = 'Upload your CV';
                    fileText.className = 'text-gray-500';
                }
            });

            fileDisplay.appendChild(fileText);
            fileDisplay.appendChild(uploadIcon);
            fileWrapper.appendChild(fileInput);
            fileWrapper.appendChild(fileDisplay);

            fieldContainer.appendChild(label);
            fieldContainer.appendChild(fileWrapper);
        } else {

            const inputWrapper = document.createElement('div');
            inputWrapper.className = 'relative';

            const input = document.createElement('input');
            input.type = type;
            input.name = name;
            input.id = name;
            input.placeholder = placeholder;

            if (iconSrc) {
                input.className = 'w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';

                const icon = document.createElement('img');
                icon.src = iconSrc;
                icon.alt = `${labelText} Icon`;
                icon.className = 'absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4';
                icon.loading = 'lazy';

                inputWrapper.appendChild(icon);
            } else {
                input.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';
            }

            inputWrapper.appendChild(input);
            fieldContainer.appendChild(label);
            fieldContainer.appendChild(inputWrapper);
        }

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

        const filterButtons = this.page.querySelectorAll('[data-filter]');
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {

                filterButtons.forEach(btn => {
                    btn.className = 'px-4 py-2 text-[#636363] font-medium text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0';
                });


                e.target.className = 'px-4 py-2 bg-[#1EB0FF] rounded-lg text-[#161616] font-medium text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0';

                this.filterJobs(e.target.dataset.filter, false);
            });
        });

        const applyButtons = this.page.querySelectorAll('[data-job-id]');
        applyButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const jobId = e.target.dataset.jobId;
                this.handleJobApplication(jobId);
            });
        });

        // Search functionality
        const searchInput = this.page.querySelector('input[placeholder="Search jobs"]');
        const searchButton = this.page.querySelector('button[type="button"]');

        if (searchInput && searchButton) {
            const performSearch = () => {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    this.filterJobs(searchTerm, true);
                } else {
                    this.filterJobs('View all', false);
                }
            };

            searchButton.addEventListener('click', performSearch);

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });

            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.trim();
                if (searchTerm.length > 2 || searchTerm.length === 0) {
                    performSearch();
                }
            });
        }

        const form = this.page.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(new FormData(form));
            });
        }


        // CTA button is now an anchor tag, so no need for click event listener
    }

    filterJobs(filter, isSearch = false) {

        const jobCards = this.page.querySelectorAll('.job-card');
        let visibleCount = 0;

        jobCards.forEach(card => {
            const jobType = card.dataset.jobType || '';
            const jobTitle = card.dataset.jobTitle || '';
            const jobDescription = card.dataset.jobDescription || '';
            const jobDepartment = card.dataset.jobDepartment || '';


            const searchableText = `${jobType} ${jobTitle} ${jobDescription} ${jobDepartment}`.toLowerCase();

            if (filter === 'View all' || filter === 'All') {
                card.parentElement.style.display = 'block';
                visibleCount++;
            } else {
                const filterWords = filter.toLowerCase().split(' ');
                const matches = filterWords.some(word => searchableText.includes(word));

                if (matches) {
                    card.parentElement.style.display = 'block';
                    visibleCount++;
                } else {
                    card.parentElement.style.display = 'none';
                }
            }
        });


        if (isSearch && filter !== 'View all') {
            this.resetFilterButtons();
        }

        this.scrollToJobs();
    }

    resetFilterButtons() {
        const filterButtons = this.page.querySelectorAll('[data-filter]');
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === 'View all') {
                btn.className = 'px-4 py-2 bg-[#1EB0FF] rounded-lg text-[#161616] font-medium text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0';
            } else {
                btn.className = 'px-4 py-2 text-[#636363] font-medium text-sm transition-colors duration-200 whitespace-nowrap flex-shrink-0';
            }
        });
    }

    handleJobApplication(jobId) {

        const currentPage = this.config.className;

        if (currentPage === 'career-page') {
            window.location.href = 'apply-career.html';
        } else if (currentPage === 'apprenticeship-page') {
            window.location.href = 'apply-apprenticeship.html';
        } else {

            window.location.href = 'apply-career.html';
        }
    }

    handleFormSubmission(formData) {
        const submitButton = this.page.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        // Convert FormData to object
        const data = Object.fromEntries(formData);

        // TODO: Replace with your actual job application endpoint
        const endpoint = 'YOUR_JOB_APPLICATION_ENDPOINT_HERE';

        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                alert('Thank you for your application! We will get back to you soon.');

                // Reset form
                const form = this.page.querySelector('form');
                if (form) {
                    form.reset();
                }
            })
            .catch(error => {
                console.error('Error submitting job application:', error);
                submitButton.textContent = originalText;
                submitButton.disabled = false;

                alert('Error submitting application. Please try again.');
            });
    }

    scrollToJobs() {
        const jobsSection = this.page.querySelector('.jobs-section');
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