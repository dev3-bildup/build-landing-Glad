class Footer {
    constructor(config = {}) {
        this.config = {
            companyName: "Bildup AI",
            quickLinks: [
                { text: "Home", href: "#home" },
                { text: "Get started with Bildup AI", href: "#features" },
                { text: "Learn how Bildup AI empowers everyone", href: "#about" },
                { text: "Careers", href: "#contact" },
                { text: "Contact us", href: "#contact" }
            ],
            socialLinks: [
                { platform: "X", icon: "public/X.png", href: "#" },
                { platform: "Instagram", icon: "public/instagram.png", href: "#" },
                { platform: "Facebook", icon: "public/facebook.png", href: "#" },
                { platform: "LinkedIn", icon: "public/linkedIn.png", href: "#" },
                { platform: "TikTok", icon: "public/tiktok.png", href: "#" },
                { platform: "Youtube", icon: "public/youtube.png", href: "#" }
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
        container.className = 'container';

        const content = document.createElement('div');
        content.className = 'footer-content';


        const leftSection = this.createLeftSection();
        content.appendChild(leftSection);

        container.appendChild(content);

 
        const footerBottom = this.createFooterBottom();
        container.appendChild(footerBottom);

        this.footer.appendChild(container);
    }

    createLeftSection() {
        const section = document.createElement('div');
        section.className = 'footer-left';

        // Logo
        const logo = document.createElement('img');
        logo.src = 'public/logo.png';
        logo.alt = this.config.companyName;
        logo.style.height = '20px';
        logo.style.width = '20px';
    

        // Navigation links
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

        section.appendChild(logo);
        section.appendChild(navLinks);

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
            img.style.width = '14px';
            img.style.height = '14px';
            img.style.objectFit = 'contain';

            a.appendChild(img);
            socialLinks.appendChild(a);
        });

        return socialLinks;
    }

    createQuickLinksSection() {
        const section = document.createElement('div');
        section.className = 'footer-section';

        const list = document.createElement('ul');

        this.config.quickLinks.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.href;
            a.textContent = link.text;
            li.appendChild(a);
            list.appendChild(li);
        });

        section.appendChild(list);

        return section;
    }

    createSocialSection() {
        const section = document.createElement('div');
        section.className = 'footer-section';

        const socialLinks = document.createElement('div');
        socialLinks.className = 'social-links';

        this.config.socialLinks.forEach(social => {
            const a = document.createElement('a');
            a.href = social.href;

            const img = document.createElement('img');
            img.src = social.icon;
            img.alt = social.platform;

            a.appendChild(img);
            socialLinks.appendChild(a);
        });

        section.appendChild(socialLinks);

        return section;
    }

    createFooterBottom() {
        const footerBottom = document.createElement('div');
        footerBottom.className = 'footer-bottom';

        const leftLinks = document.createElement('div');
        leftLinks.className = 'footer-bottom-left';

        const privacyLink = document.createElement('a');
        privacyLink.href = '#privacy';
        privacyLink.textContent = 'Privacy';

        const termsLink = document.createElement('a');
        termsLink.href = '#terms';
        termsLink.textContent = 'Terms of Service';

        leftLinks.appendChild(privacyLink);
        leftLinks.appendChild(termsLink);

        const socialLinks = this.createSocialLinks();

        footerBottom.appendChild(leftLinks);
        footerBottom.appendChild(socialLinks);
        return footerBottom;
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