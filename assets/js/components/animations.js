const ANIMATION_STYLE_ID = 'scroll-animation-styles';

function ensureAnimationStyles() {
    if (document.getElementById(ANIMATION_STYLE_ID)) {
        return;
    }

    const style = document.createElement('style');
    style.id = ANIMATION_STYLE_ID;
    style.textContent = `
        .feature, .trip-card, .testimonial {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .feature.animate, .trip-card.animate, .testimonial.animate {
            opacity: 1;
            transform: translateY(0);
        }

        .testimonial-slider.active {
            cursor: grabbing;
        }
    `;
    document.head.appendChild(style);
}

function animateOnScroll() {
    document
        .querySelectorAll('.feature, .trip-card, .testimonial')
        .forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            if (elementPosition < window.innerHeight - 100) {
                element.classList.add('animate');
            }
        });
}

export function initTripCardHover(root = document) {
    root.querySelectorAll('.trip-card').forEach((card) => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

export function initAnimations() {
    ensureAnimationStyles();

    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        testimonialSlider.addEventListener('mousedown', (event) => {
            isDown = true;
            testimonialSlider.classList.add('active');
            startX = event.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });

        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
            testimonialSlider.classList.remove('active');
        });

        testimonialSlider.addEventListener('mousemove', (event) => {
            if (!isDown) return;
            event.preventDefault();
            const x = event.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}

export function refreshAnimations() {
    animateOnScroll();
}
