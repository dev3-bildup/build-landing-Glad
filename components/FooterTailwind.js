class FooterTailwind {
    constructor(config = {}) {
        this.config = {
            companyName: "Bildup AI",
            quickLinks: [
                { text: "Home", href: "index.html" },
                { text: "Learn how Bildup AI empowers everyone", href: "#about" },
                { text: "Contact us", href: "contact.html" }
            ],
            socialLinks: [
                { platform: "X", icon: "public/X.png", href: "#" },
                { platform: "Instagram", icon: "public/instagram.png", href: "#" },
                { platform: "Facebook", icon: "public/facebook.png", href: "#" },
                { platform: "LinkedIn", icon: "public/linkedIn.png", href: "#" },
                { platform: "TikTok", icon: "public/tiktok.png", href: "#" }
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
        this.footer.className = `${this.config.className} bg-[url('public/Footer background web.png')] bg-no-repeat bg-center bg-cover py-12 pt-12 pb-4 text-[#333]`;

        const container = document.createElement('div');
        container.className = 'container';

        const content = document.createElement('div');
        content.className = 'footer-content grid grid-cols-[0.5fr_1fr_0.7fr_1fr] gap-4 items-start mb-8';

        const logoSection = this.createLogoSection();
        content.appendChild(logoSection);

        const navSection = this.createNavSection();
        content.appendChild(navSection);

        const legalSection = this.createLegalSection();
        content.appendChild(legalSection);

        const newsletterSection = this.createNewsletterSection();
        content.appendChild(newsletterSection);

        container.appendChild(content);

        const separator = document.createElement('hr');
        separator.className = 'footer-separator border-none h-px bg-[#e0e0e0] my-8 mx-0';

        const copyrightSection = this.createCopyrightSection();
        container.appendChild(separator);
        container.appendChild(copyrightSection);

        this.footer.appendChild(container);
    }

    createLogoSection() {
        const section = document.createElement('div');
        section.className = 'footer-logo-section flex flex-col items-start justify-start';

        const logo = document.createElement('img');
        logo.src = 'public/logo.png';
        logo.alt = this.config.companyName;
        logo.className = 'footer-logo w-5 h-5 object-contain m-0';

        section.appendChild(logo);
        return section;
    }

    createNavSection() {
        const section = document.createElement('div');
        section.className = 'footer-nav-section flex flex-col gap-4';

        const navLinks = document.createElement('ul');
        navLinks.className = 'footer-nav-links list-none p-0 m-0 flex flex-col gap-3';

        this.config.quickLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            a.className = 'text-[#161616] no-underline text-[0.95rem] transition-colors duration-200 hover:text-[#1976d2]';
            li.appendChild(a);
            navLinks.appendChild(li);
        });

        section.appendChild(navLinks);
        return section;
    }

    createNewsletterSection() {
        const section = document.createElement('div');
        section.className = 'footer-newsletter flex flex-col gap-4';

        const title = document.createElement('h3');
        title.textContent = 'Sign up to receive updates';
        title.className = 'newsletter-title text-base font-normal text-[#161616]';

        const form = document.createElement('form');
        form.className = 'newsletter-form flex flex-col gap-3';

        const inputGroup = document.createElement('div');
        inputGroup.className = 'input-group flex relative items-center';

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter your email';
        emailInput.className = 'newsletter-input flex-1 py-3 px-4 pr-[120px] border border-[#ddd] rounded-[25px] text-[0.9rem] text-[#161616] outline-none transition-colors duration-200 focus:border-[#1976d2]';

        const submitBtn = document.createElement('button');
        submitBtn.type = 'submit';
        submitBtn.textContent = 'Submit';
        submitBtn.className = 'newsletter-submit absolute right-[5px] top-1/2 transform -translate-y-1/2 bg-[#1976d2] text-white border-none rounded-[20px] py-2 px-5 text-[0.85rem] font-medium cursor-pointer transition-colors duration-200 hover:bg-[#1565c0] whitespace-nowrap';

        inputGroup.appendChild(emailInput);
        inputGroup.appendChild(submitBtn);

        const consentText = document.createElement('p');
        consentText.textContent = 'By subscribing you provide consent to receive updates from our company';
        consentText.className = 'newsletter-consent text-[0.8rem] text-[#969696] m-0 font-normal leading-[1.4]';

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
        section.className = 'footer-legal flex flex-col gap-4';

        const legalLinks = document.createElement('ul');
        legalLinks.className = 'legal-links list-none p-0 m-0 flex flex-col gap-3';

        const privacyLink = document.createElement('li');
        const privacyA = document.createElement('a');
        privacyA.href = 'privacy.html';
        privacyA.textContent = 'Privacy';
        privacyA.className = 'text-[#333] no-underline text-[0.95rem] transition-colors duration-200 hover:text-[#1976d2]';
        privacyLink.appendChild(privacyA);

        const termsLink = document.createElement('li');
        const termsA = document.createElement('a');
        termsA.href = 'terms.html';
        termsA.textContent = 'Terms of service';
        termsA.className = 'text-[#333] no-underline text-[0.95rem] transition-colors duration-200 hover:text-[#1976d2]';
        termsLink.appendChild(termsA);

        legalLinks.appendChild(privacyLink);
        legalLinks.appendChild(termsLink);

        section.appendChild(legalLinks);
        return section;
    }

    createSocialLinks() {
        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links flex gap-4 mt-4';

        this.config.socialLinks.forEach(social => {
            const a = document.createElement('a');
            a.href = social.href;

            const img = document.createElement('img');
            img.src = social.icon;
            img.alt = social.platform;
            img.className = 'social-icon w-5 h-5 object-contain transition-transform duration-200';

            a.appendChild(img);
            socialLinks.appendChild(a);
        });

        return socialLinks;
    }

    createCopyrightSection() {
        const section = document.createElement('div');
        section.className = 'footer-copyright text-center';

        const copyrightText = document.createElement('p');
        copyrightText.textContent = '© 2025, All rights reserved.';
        copyrightText.className = 'copyright-text text-[#666] text-[0.9rem] m-0';

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

        // Newsletter form submission
        const newsletterForm = this.footer.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = newsletterForm.querySelector('.newsletter-input').value;
                console.log('Newsletter subscription:', email);
                // Add success message or API call here
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

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FooterTailwind;
} 