export function initForms() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const email = emailInput?.value.trim();

            if (email) {
                newsletterForm.parentElement.innerHTML = `
                    <h2>Thank You!</h2>
                    <p>You've been successfully subscribed to our newsletter.</p>
                `;
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
}
