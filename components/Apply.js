import Footer from './Footer.js';
import Header from './Header.js';
import AnimationManager from '../utils/AnimationManager.js';
import Animations from './Animations.js';

class Apply {
    constructor(config = {}) {
        this.config = {

            jobTitle: "Software Developer",
            jobDescription: "Are you a passionate and innovative developer eager to build groundbreaking products? Join our elite team in Enugu and work with the latest technologies to create solutions that will define tomorrow.",


            location: "Enugu (Full time, On-site)",


            requiredSkills: [
                "2+ years of professional software development experience (Backend).",
                "Proficiency in Backend Technologies (e.g., Python, Django, APIs).",
                "Experience with Relational and Non-Relational Databases (e.g., PostgreSQL, MySQL).",
                "Version Control (Git), Cloud Platforms (AWS, Azure, GCP), Containerization (Docker)",
                "Strong problem-solving and analytical skills.",
                "A passion for learning new technologies and staying up-to-date with industry trends."
            ],


            whatWeOffer: [
                "Accommodation (if needed): We offer accommodation support for team members who require it. We can discuss your specific housing needs during the interview process.",
                "Daily Office Meals: Enjoy delicious and convenient daily meals provided by the company.",
                "Growth Opportunities: Invest in your career with us and grow alongside a team of top innovators.",
                "Exciting Work Environment: Thrive in a dynamic, collaborative, and inspiring environment where innovation is encouraged."
            ],


            whoCanApply: [
                "School leavers, Students, Corps member and graduates who meet the criteria."
            ],


            formTitle: "Apply for this job",

            className: "apply-page",
            ...config
        };
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
              
            }
        } catch (error) {
          
        }
    }

    createFooter() {   
        try {
            this.footer = new Footer();
            const footerContainer = document.getElementById('footer-content');
            if (footerContainer) {
                footerContainer.appendChild(this.footer.render());
            } else {
              
            }
        } catch (error) {
           
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


        const mainSection = this.createMainSection();
        this.page.appendChild(mainSection);
    }

    createMainSection() {
        const section = document.createElement('section');
        section.className = ' py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8';

        const container = document.createElement('div');
        container.className = ' max-w-4xl mx-auto text-[#161616]';

        // Page Title
        const pageTitle = document.createElement('h1');
        pageTitle.className = 'text-left pt-16 text-2xl md:text-3xl lg:text-4xl lg:pt-10 font-bold text-[#161616] mb-8';
        pageTitle.textContent = this.config.formTitle;

        // Job Title
        const jobTitle = document.createElement('h2');
        jobTitle.className = 'text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-4';
        jobTitle.textContent = this.config.jobTitle;

        // Job Description
        const jobDescription = document.createElement('p');
        jobDescription.className = 'text-[#000000] mb-6 leading-relaxed';
        jobDescription.textContent = this.config.jobDescription;

        // Location
        const locationSection = this.createLocationSection();

        // Required Skills Section
        const skillsSection = this.createSkillsSection();

        // What We Offer Section
        const offerSection = this.createOfferSection();

        // Who Can Apply Section
        const whoCanApplySection = this.createWhoCanApplySection();

        // Application Form
        const applicationForm = this.createApplicationForm();

        container.appendChild(pageTitle);
        container.appendChild(jobTitle);
        container.appendChild(jobDescription);
        container.appendChild(locationSection);
        container.appendChild(skillsSection);
        container.appendChild(offerSection);
        container.appendChild(whoCanApplySection);
        container.appendChild(applicationForm);

        section.appendChild(container);
        return section;
    }

    createLocationSection() {
        const section = document.createElement('div');
        section.className = 'mb-8 mt-5';

        const title = document.createElement('h3');
        title.className = 'text-lg font-semibold text-[#161616] mb-2';
        title.textContent = 'Location';

        const location = document.createElement('p');
        location.className = 'text-[#000000]';
        location.textContent = this.config.location;

        section.appendChild(title);
        section.appendChild(location);
        return section;
    }

    createSkillsSection() {
        const section = document.createElement('div');
        section.className = 'mb-8';

        const title = document.createElement('h3');
        title.className = 'text-lg font-semibold text-[#161616] mb-4';
        title.textContent = 'Required skills and experience';

        const skillsList = document.createElement('ul');
        skillsList.className = 'px-6 list-disc  text-[#00000]';

        this.config.requiredSkills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.className = '';
            listItem.textContent = skill;
            skillsList.appendChild(listItem);
        });

        section.appendChild(title);
        section.appendChild(skillsList);
        return section;
    }

    createOfferSection() {
        const section = document.createElement('div');
        section.className = 'mb-8';

        const title = document.createElement('h3');
        title.className = 'text-lg font-semibold text-[#161616] mb-4';
        title.textContent = 'What we offer';

        const offerList = document.createElement('ul');
        offerList.className = 'px-6 list-disc  text-[#00000]';

        this.config.whatWeOffer.forEach(offer => {
            const listItem = document.createElement('li');
            listItem.className = '';
            listItem.textContent = offer;
            offerList.appendChild(listItem);
        });

        section.appendChild(title);
        section.appendChild(offerList);
        return section;
    }

    createWhoCanApplySection() {
        const section = document.createElement('div');
        section.className = 'mb-12';

        const title = document.createElement('h3');
        title.className = 'text-lg font-semibold text-[#161616] mb-4';
        title.textContent = 'Who can apply?';

        const whoCanApplyList = document.createElement('ul');
        whoCanApplyList.className = 'px-6 list-disc text-[#00000]';

        this.config.whoCanApply.forEach(criteria => {
            const listItem = document.createElement('li');
            listItem.className = 'leading-relaxed';
            listItem.textContent = criteria;
            whoCanApplyList.appendChild(listItem);
        });

        section.appendChild(title);
        section.appendChild(whoCanApplyList);
        return section;
    }

    createApplicationForm() {
        const formContainer = document.createElement('div');
        formContainer.className = 'border border-[#ebf4fd] rounded-xl p-6 md:p-8';
        formContainer.style.background = 'linear-gradient(to bottom, white 0%, #f2eef7 30%, #eef3e1 100%)';

        const form = document.createElement('form');
        form.className = 'space-y-6';

        const fieldsContainer = document.createElement('div');
        fieldsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';


        const fullNameField = this.createFormField('text', 'Full Name', ' Full Name', true);


        const emailField = this.createFormField('email', 'email', 'Enter email', true);


        const phoneField = this.createFormField('tel', 'phone', 'Enter phone number', true);


        const cvField = this.createFileField('cv', 'Upload CV', true);


        const linkedinField = this.createFormField('text', 'linkedin', 'Enter your linkedIn profile', false);

        const stateField = this.createSelectField('state', 'Current state of residence', false);

        fieldsContainer.appendChild(fullNameField);
        fieldsContainer.appendChild(emailField);
        fieldsContainer.appendChild(phoneField);
        fieldsContainer.appendChild(cvField);
        fieldsContainer.appendChild(linkedinField);
        fieldsContainer.appendChild(stateField);


        const relocationField = this.createCheckboxField();


        const experienceField = this.createTextareaField();


        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'bg-[#0071E3] shadow hover:bg-[0071e3] text-white font-semibold py-3 px-12 rounded-3xl transition-colors duration-200 text-lg mx-auto flex justify-center';
        submitButton.textContent = 'Submit';

        form.appendChild(fieldsContainer);
        form.appendChild(relocationField);
        form.appendChild(experienceField);
        form.appendChild(submitButton);

        formContainer.appendChild(form);
        return formContainer;
    }

    createFormField(type, name, label, required = false) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const labelElement = document.createElement('label');
        labelElement.className = 'block text-sm font-medium text-gray-700';
        labelElement.htmlFor = name;

        labelElement.textContent = label;
        if (required) {
            const asterisk = document.createElement('span');
            asterisk.textContent = ' *';
            asterisk.style.color = 'red';
            labelElement.appendChild(asterisk);
        }

        // icon to use based on field type/name
        let iconSrc = '';
        let placeholder = '';

        switch (name) {
            case 'Full Name':
                iconSrc = 'public/human.png';
                placeholder = 'Enter full name';
                break;
            case 'email':
                iconSrc = 'public/mail.png';
                placeholder = 'Enter mail';
                break;
            case 'phone':
                iconSrc = 'public/light-call.png';
                placeholder = 'Enter phone number';
                break;
            case 'linkedin':
                iconSrc = 'public/human.png';
                placeholder = 'Enter linkedin username';
                break;
            default:
                placeholder = `Enter ${label.toLowerCase()}`;
        }

        const inputWrapper = document.createElement('div');
        inputWrapper.className = 'relative ';

        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.id = name;
        input.required = required;
        input.placeholder = placeholder;

        if (iconSrc) {
            input.className = 'w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';

            const icon = document.createElement('img');
            icon.src = iconSrc;
            icon.alt = `${label} Icon`;
            icon.className = 'absolute font-bold left-4 top-1/2 transform -translate-y-1/2 w-5 h-5';
            icon.loading = 'lazy';

            inputWrapper.appendChild(icon);
        } else {
            input.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';
        }

        inputWrapper.appendChild(input);
        fieldContainer.appendChild(labelElement);
        fieldContainer.appendChild(inputWrapper);
        return fieldContainer;
    }

    createFileField(name, label, required = false) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const labelElement = document.createElement('label');
        labelElement.className = 'block text-sm font-medium text-gray-700';
        labelElement.innerHTML = label + (required ? '<span class="text-red-500 ml-1">*</span>' : '');
        labelElement.htmlFor = name;


        const fileWrapper = document.createElement('div');
        fileWrapper.className = 'relative';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = name;
        fileInput.id = name;
        fileInput.required = required;
        fileInput.accept = '.pdf,.doc,.docx,.txt';
        fileInput.className = 'absolute inset-0 w-full h-full opacity-0 cursor-pointer';

        const fileDisplay = document.createElement('div');
        fileDisplay.className = 'w-full px-3 py-3 border border-gray-300 rounded-lg bg-white flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors duration-200';

        const fileText = document.createElement('span');
        fileText.className = 'text-gray-400 text-base';
        fileText.textContent = 'Select file';

        const uploadIcon = document.createElement('div');
        uploadIcon.className = 'text-gray-400 ';
        uploadIcon.innerHTML = ` <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" class="text-[#161616] border rounded border-gray-300 shadow-sm ">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
        </svg>`;

        // Handle file selection
        fileInput.addEventListener('change', function (e) {
            if (e.target.files && e.target.files[0]) {
                fileText.textContent = e.target.files[0].name;
                fileText.className = 'text-gray-900 text-base';
            } else {
                fileText.textContent = 'Select file';
                fileText.className = 'text-gray-400 text-base';
            }
        });

        fileDisplay.appendChild(fileText);
        fileDisplay.appendChild(uploadIcon);
        fileWrapper.appendChild(fileInput);
        fileWrapper.appendChild(fileDisplay);

        // Accepted files text
        const acceptedText = document.createElement('p');
        acceptedText.className = 'text-sm text-[#667085] mt-2';
        acceptedText.textContent = 'Accepted files: pdf, doc, docx, txt';

        fieldContainer.appendChild(labelElement);
        fieldContainer.appendChild(fileWrapper);
        fieldContainer.appendChild(acceptedText);
        return fieldContainer;
    }

    createSelectField(name, label, required = false) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const labelElement = document.createElement('label');
        labelElement.className = 'block text-sm font-medium text-gray-700';
        labelElement.innerHTML = label + (required ? '<span class="text-red-500 ml-1">*</span>' : '');
        labelElement.htmlFor = name;

        const select = document.createElement('select');
        select.name = name;
        select.id = name;
        select.required = required;
        select.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';


        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select state';
        select.appendChild(defaultOption);


        const states = ['Lagos', 'Abuja', 'Enugu', 'Kano', 'Rivers', 'Ogun', 'Kaduna', 'Anambra', 'Abia', 'Adamawa', 'Akwa Ibom', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'Other'];
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            select.appendChild(option);
        });

        fieldContainer.appendChild(labelElement);
        fieldContainer.appendChild(select);
        return fieldContainer;
    }

    createCheckboxField() {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-4';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700 mb-3';
        label.textContent = 'Are you willing to relocate?';

        const checkboxContainer = document.createElement('div');
        checkboxContainer.className = 'flex space-x-6';

        const yesContainer = document.createElement('div');
        yesContainer.className = 'flex items-center';

        const yesInput = document.createElement('input');
        yesInput.type = 'checkbox';
        yesInput.name = 'relocate-yes';
        yesInput.id = 'relocate-yes';
        yesInput.value = 'yes';
        yesInput.className = 'w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500';

        const yesLabel = document.createElement('label');
        yesLabel.htmlFor = 'relocate-yes';
        yesLabel.className = 'ml-2 text-sm text-gray-700';
        yesLabel.textContent = 'Yes';

        yesContainer.appendChild(yesInput);
        yesContainer.appendChild(yesLabel);

        // checkbox
        const noContainer = document.createElement('div');
        noContainer.className = 'flex items-center';

        const noInput = document.createElement('input');
        noInput.type = 'checkbox';
        noInput.name = 'relocate-no';
        noInput.id = 'relocate-no';
        noInput.value = 'no';
        noInput.className = 'w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500';

        const noLabel = document.createElement('label');
        noLabel.htmlFor = 'relocate-no';
        noLabel.className = 'ml-2 text-sm text-gray-700';
        noLabel.textContent = 'No';

        noContainer.appendChild(noInput);
        noContainer.appendChild(noLabel);

        checkboxContainer.appendChild(yesContainer);
        checkboxContainer.appendChild(noContainer);

        yesInput.addEventListener('change', function () {
            if (this.checked) {
                noInput.checked = false;
            }
        });

        noInput.addEventListener('change', function () {
            if (this.checked) {
                yesInput.checked = false;
            }
        });

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(checkboxContainer);
        return fieldContainer;
    }

    createTextareaField() {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700';
        label.innerHTML = 'Please describe your relevant professional or personal experiences that make you a strong candidate for this position. Include specific roles, responsibilities, or projects that highlight your skills.<span class="text-red-500 ml-1">*</span>';
        label.htmlFor = 'experience';

        const textarea = document.createElement('textarea');
        textarea.name = 'experience';
        textarea.id = 'experience';
        textarea.rows = 6;
        textarea.required = true;
        textarea.placeholder = 'Your answer';
        textarea.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-vertical';

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(textarea);
        return fieldContainer;
    }

    addEventListeners() {
        // Form submission
        const form = this.page.querySelector('form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(new FormData(form));
            });
        }
    }

    handleFormSubmission(formData) {

        alert('Application submitted successfully! We will get back to you soon.');

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

export default Apply; 