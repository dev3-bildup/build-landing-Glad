class Footer {
    constructor(config = {}) {

        this.config = {
            companyName: "Bildup AI",
            quickLinks: [
                { text: "Home", href: "index.html" },
                // { text: "Students", href: "learner.html" },
                // { text: "Apprenticeship", href: "apprenticeship.html" },
                // { text: "Careers", href: "careers.html" },
                { text: "Get started with Bildup AI", href: "https://edu.bildup.ai/" },
                { text: "Contact us", href: "contact.html" }
            ],
            socialLinks: [
                { platform: "X", icon: "public/X.png", href: "https://x.com/BildupAi" },
                { platform: "Instagram", icon: "public/instagram.png", href: "https://www.instagram.com/bildup.ai/" },
                { platform: "Facebook", icon: "public/facebook.png", href: "https://www.facebook.com/BildupAI" },
                { platform: "LinkedIn", icon: "public/linkedIn.png", href: "https://www.linkedin.com/company/bildupai" },
                { platform: "TikTok", icon: "public/tiktok.png", href: "https://www.tiktok.com/@bildupai?_t=ZS-8zB2ttKDgyV&_r=1" }
            ],
            className: "footer",
            ...config
        };
        this.footer = null;
        this.init();
    }

    init() {

        this.createFooter();
        this.addEventListeners();

    }

    createFooter() {

        this.footer = document.createElement('footer');
        this.footer.className = this.config.className;

        const container = document.createElement('div');

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'footer-content-wrapper';

        const content = document.createElement('div');
        content.className = 'footer-content';


        const logoSection = this.createLogoSection();
        content.appendChild(logoSection);

        const navSection = this.createNavSection();
        content.appendChild(navSection);


        const legalSection = this.createLegalSection();
        content.appendChild(legalSection);


        const newsletterSection = this.createNewsletterSection();
        content.appendChild(newsletterSection);

        contentWrapper.appendChild(content);


        const separator = document.createElement('hr');
        separator.className = 'footer-separator';
        contentWrapper.appendChild(separator);

        // Copyright section
        const copyrightSection = this.createCopyrightSection();
        contentWrapper.appendChild(copyrightSection);

        container.appendChild(contentWrapper);
        this.footer.appendChild(container);

    }

    createLogoSection() {
        const section = document.createElement('div');
        section.className = 'footer-logo-section';

        const logo = document.createElement('img');
        logo.src = 'public/logo.png';
        logo.alt = this.config.companyName;
        logo.className = 'footer-logo';
        logo.loading = 'lazy';

        section.appendChild(logo);

        return section;
    }

    createNavSection() {
        const section = document.createElement('div');
        section.className = 'footer-nav-section';

        const navLinks = document.createElement('ul');
        navLinks.className = 'footer-nav-links';

        this.config.quickLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            navLinks.appendChild(li);
        });

        section.appendChild(navLinks);

        return section;
    }

    createNewsletterSection() {
        const section = document.createElement('div');
        section.className = 'footer-newsletter';

        const title = document.createElement('h3');
        title.textContent = 'Sign up to receive updates';
        title.className = 'newsletter-title';

        const form = document.createElement('form');
        form.className = 'newsletter-form';

        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group';

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter your email';
        emailInput.className = 'newsletter-input';

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Submit';
        submitBtn.className = 'newsletter-submit';

        inputGroup.appendChild(emailInput);
        inputGroup.appendChild(submitBtn);

        const consentText = document.createElement('p');
        consentText.textContent = 'By subscribing you provide consent to receive updates from our company';
        consentText.className = 'newsletter-consent';

        form.appendChild(inputGroup);
        form.appendChild(consentText);


        const socialLinks = this.createSocialLinks();

        section.appendChild(title);
        section.appendChild(form);
        section.appendChild(socialLinks);

        return section;
    }

    createLegalSection() {
        const section = document.createElement('div');
        section.className = 'footer-legal';

        const legalLinks = document.createElement('ul');
        legalLinks.className = 'legal-links';

        const privacyLink = document.createElement('li');
        const privacyA = document.createElement('a');
        privacyA.href = 'privacy.html';
        privacyA.textContent = 'Privacy';
        privacyLink.appendChild(privacyA);

        const termsLink = document.createElement('li');
        const termsA = document.createElement('a');
        termsA.href = 'terms.html';
        termsA.textContent = 'Terms of service';
        termsLink.appendChild(termsA);

        legalLinks.appendChild(privacyLink);
        legalLinks.appendChild(termsLink);

        section.appendChild(legalLinks);

        return section;
    }

    createSocialLinks() {
        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';

        this.config.socialLinks.forEach(social => {
            const a = document.createElement('a');
            a.href = social.href;

            const img = document.createElement('img');
            img.src = social.icon;
            img.alt = social.platform;
            img.className = 'social-icon';
            img.loading = 'lazy';

            a.appendChild(img);
            socialLinks.appendChild(a);
        });

        return socialLinks;
    }

    createCopyrightSection() {
        const section = document.createElement('div');
        section.className = 'footer-copyright';

        const copyrightText = document.createElement('p');
        copyrightText.innerHTML = '&copy; 2025, All rights reserved.';
        copyrightText.className = 'copyright-text';

        section.appendChild(copyrightText);

        return section;
    }

    addEventListeners() {

        const socialLinks = this.footer.querySelectorAll('.social-links img');
        socialLinks.forEach(img => {
            img.addEventListener('mouseenter', () => {
                img.style.transform = 'scale(1.1)';
            });

            img.addEventListener('mouseleave', () => {
                img.style.transform = 'scale(1)';
            });
        });

        const newsletterForm = this.footer.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = newsletterForm.querySelector('.newsletter-input').value;

                // submitnewsletter subscription
                const wsUrl = 'wss://your-newsletter';
                const ws = new WebSocket(wsUrl);

                ws.onopen = () => {
                    ws.send(JSON.stringify({ email: email }));
                };

                ws.onmessage = (event) => {

                    console.log('Newsletter subscription successful:', event.data);
                    newsletterForm.querySelector('.newsletter-input').value = '';

                    if (typeof this.showNotification === 'function') {
                        this.showNotification('Thank you for subscribing!', 'success');
                    }
                    ws.close();
                };

                ws.onerror = (error) => {
                    console.error('Error subscribing to newsletter:', error);
                    if (typeof this.showNotification === 'function') {
                        this.showNotification('There was an error subscribing. Please try again.', 'error');
                    }
                    ws.close();
                };
            });
        }

    }

    render() {

        return this.footer;
    }

    destroy() {
        if (this.footer && this.footer.parentNode) {
            this.footer.parentNode.removeChild(this.footer);
        }
    }

    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.destroy();
        this.init();
    }
}

export default Footer; 