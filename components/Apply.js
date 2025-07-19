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

        // Create main content section
        const mainSection = this.createMainSection();
        this.page.appendChild(mainSection);
    }

    createMainSection() {
        const section = document.createElement('section');
        section.className = 'py-12 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8';

        const container = document.createElement('div');
        container.className = 'max-w-4xl mx-auto';

        // Page Title
        const pageTitle = document.createElement('h1');
        pageTitle.className = 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center';
        pageTitle.textContent = this.config.formTitle;

        // Job Title
        const jobTitle = document.createElement('h2');
        jobTitle.className = 'text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4';
        jobTitle.textContent = this.config.jobTitle;

        // Job Description
        const jobDescription = document.createElement('p');
        jobDescription.className = 'text-gray-600 mb-6 leading-relaxed';
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
        title.className = 'text-lg font-semibold text-gray-900 mb-2';
        title.textContent = 'Location';

        const location = document.createElement('p');
        location.className = 'text-gray-600';
        location.textContent = this.config.location;

        section.appendChild(title);
        section.appendChild(location);
        return section;
    }

    createSkillsSection() {
        const section = document.createElement('div');
        section.className = 'mb-8';

        const title = document.createElement('h3');
        title.className = 'text-lg font-semibold text-gray-900 mb-4';
        title.textContent = 'Required skills and experience';

        const skillsList = document.createElement('ul');
        skillsList.className = 'list-disc list-inside space-y-2 text-gray-600';

        this.config.requiredSkills.forEach(skill => {
            const listItem = document.createElement('li');
            listItem.className = 'leading-relaxed';
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
        title.className = 'text-lg font-semibold text-gray-900 mb-4';
        title.textContent = 'What we offer';

        const offerList = document.createElement('ul');
        offerList.className = 'list-disc list-inside space-y-2 text-gray-600';

        this.config.whatWeOffer.forEach(offer => {
            const listItem = document.createElement('li');
            listItem.className = 'leading-relaxed';
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
        title.className = 'text-lg font-semibold text-gray-900 mb-4';
        title.textContent = 'Who can apply?';

        const whoCanApplyList = document.createElement('ul');
        whoCanApplyList.className = 'list-disc list-inside space-y-2 text-gray-600';

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
        formContainer.className = 'bg-gray-50 rounded-xl p-6 md:p-8';

        const form = document.createElement('form');
        form.className = 'space-y-6';

        // Create form fields
        const fieldsContainer = document.createElement('div');
        fieldsContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6';

        // Full Name
        const fullNameField = this.createFormField('text', 'fullName', 'Full Name', true);

        // Email
        const emailField = this.createFormField('email', 'email', 'Email', true);

        // Phone Number
        const phoneField = this.createFormField('tel', 'phone', 'Phone number', true);

        // Upload CV
        const cvField = this.createFileField('cv', 'Upload CV', true);

        // LinkedIn Profile
        const linkedinField = this.createFormField('text', 'linkedin', 'LinkedIn profile', false);

        // Current State of Residence
        const stateField = this.createSelectField('state', 'Current state of residence', false);

        fieldsContainer.appendChild(fullNameField);
        fieldsContainer.appendChild(emailField);
        fieldsContainer.appendChild(phoneField);
        fieldsContainer.appendChild(cvField);
        fieldsContainer.appendChild(linkedinField);
        fieldsContainer.appendChild(stateField);

        // Relocation Question
        const relocationField = this.createRadioField();

        // Experience Description
        const experienceField = this.createTextareaField();

        // Submit Button
        const submitButton = document.createElement('button');
        submitButton.type = 'submit';
        submitButton.className = 'w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg';
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
        labelElement.textContent = label + (required ? '*' : '');
        labelElement.htmlFor = name;

        const input = document.createElement('input');
        input.type = type;
        input.name = name;
        input.id = name;
        input.required = required;
        input.placeholder = `Enter ${label.toLowerCase()}`;
        input.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';

        fieldContainer.appendChild(labelElement);
        fieldContainer.appendChild(input);
        return fieldContainer;
    }

    createFileField(name, label, required = false) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const labelElement = document.createElement('label');
        labelElement.className = 'block text-sm font-medium text-gray-700';
        labelElement.textContent = label + (required ? '*' : '');
        labelElement.htmlFor = name;

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = name;
        fileInput.id = name;
        fileInput.required = required;
        fileInput.accept = '.pdf,.doc,.docx';
        fileInput.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100';

        fieldContainer.appendChild(labelElement);
        fieldContainer.appendChild(fileInput);
        return fieldContainer;
    }

    createSelectField(name, label, required = false) {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const labelElement = document.createElement('label');
        labelElement.className = 'block text-sm font-medium text-gray-700';
        labelElement.textContent = label + (required ? '*' : '');
        labelElement.htmlFor = name;

        const select = document.createElement('select');
        select.name = name;
        select.id = name;
        select.required = required;
        select.className = 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200';

        // Add default option
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = 'Select state';
        select.appendChild(defaultOption);

        // Add sample states (you can customize this list)
        const states = ['Lagos', 'Abuja', 'Enugu', 'Kano', 'Rivers', 'Ogun', 'Kaduna', 'Anambra', 'Other'];
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

    createRadioField() {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-4';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700 mb-3';
        label.textContent = 'Are you willing to relocate';

        const radioContainer = document.createElement('div');
        radioContainer.className = 'flex space-x-6';

        // Yes option
        const yesContainer = document.createElement('div');
        yesContainer.className = 'flex items-center';

        const yesInput = document.createElement('input');
        yesInput.type = 'radio';
        yesInput.name = 'relocate';
        yesInput.id = 'relocate-yes';
        yesInput.value = 'yes';
        yesInput.className = 'w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500';

        const yesLabel = document.createElement('label');
        yesLabel.htmlFor = 'relocate-yes';
        yesLabel.className = 'ml-2 text-sm text-gray-700';
        yesLabel.textContent = 'Yes';

        yesContainer.appendChild(yesInput);
        yesContainer.appendChild(yesLabel);

        // No option
        const noContainer = document.createElement('div');
        noContainer.className = 'flex items-center';

        const noInput = document.createElement('input');
        noInput.type = 'radio';
        noInput.name = 'relocate';
        noInput.id = 'relocate-no';
        noInput.value = 'no';
        noInput.className = 'w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500';

        const noLabel = document.createElement('label');
        noLabel.htmlFor = 'relocate-no';
        noLabel.className = 'ml-2 text-sm text-gray-700';
        noLabel.textContent = 'No';

        noContainer.appendChild(noInput);
        noContainer.appendChild(noLabel);

        radioContainer.appendChild(yesContainer);
        radioContainer.appendChild(noContainer);

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(radioContainer);
        return fieldContainer;
    }

    createTextareaField() {
        const fieldContainer = document.createElement('div');
        fieldContainer.className = 'space-y-2';

        const label = document.createElement('label');
        label.className = 'block text-sm font-medium text-gray-700';
        label.textContent = 'Please describe your relevant professional or personal experiences that make you a strong candidate for this position. Include specific roles, responsibilities, or projects that highlight your skills.*';
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
        console.log('Application submitted:', Object.fromEntries(formData));
        // Show success message
        alert('Application submitted successfully! We will get back to you soon.');
        // You can implement actual form submission logic here
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