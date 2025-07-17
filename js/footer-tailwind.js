// Footer functionality for Tailwind CSS version
document.addEventListener('DOMContentLoaded', function () {
    // Social media hover effects
    const socialLinks = document.querySelectorAll('.social-links img');
    socialLinks.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('.newsletter-input').value;
            console.log('Newsletter subscription:', email);

            // Show success message
            const submitBtn = newsletterForm.querySelector('.newsletter-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribed!';
            submitBtn.style.background = '#4CAF50';

            // Reset form
            newsletterForm.reset();

            // Reset button after 2 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        });
    }

    // Responsive footer background
    function updateFooterBackground() {
        const footer = document.querySelector('.footer');
        if (footer && window.innerWidth <= 768) {
            footer.style.backgroundImage = "url('public/Footer background mobile.png')";
        } else if (footer) {
            footer.style.backgroundImage = "url('public/Footer background web.png')";
        }
    }

    // Update on load and resize
    updateFooterBackground();
    window.addEventListener('resize', updateFooterBackground);
}); 