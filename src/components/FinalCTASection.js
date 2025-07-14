class FinalCTASection {
    constructor() {
        this.section = null;
        this.init();
    }

    init() {
        this.createSection();
    }

    createSection() {
        this.section = document.createElement('section');
        this.section.className = 'final-cta-section';
        this.section.innerHTML = `
            <div class="final-cta-container">
                <img src="public/bildupicon.png" alt="Bildup B Logo" class="final-cta-logo" />
                <h2 class="final-cta-title">
                    The ultimate<br>study companion
                </h2>
                <p class="final-cta-desc">
                    Bildup isn’t just powerful–it’s personal. It learns how <em>you learn</em>, what you struggle with, and where you shine–without ever needing you to be perfect.<br>
                    From voice interaction to visual explanations, everything Bildup AI does is designed to make studying easier, smarter and just for you. No pressure. No judgement. Just progress–one topic at a time.
                </p>
                <div class="final-cta-sub">Ready to learn your way?</div>
                <button class="final-cta-btn">Get started with Bildup AI</button>
            </div>
        `;
    }

    render() {
        return this.section;
    }

    destroy() {
        if (this.section && this.section.parentNode) {
            this.section.parentNode.removeChild(this.section);
        }
    }
}

export default FinalCTASection; 