import { initLayout } from './components/layout.js';
import { initNavigation } from './components/navigation.js';
import { initForms } from './components/forms.js';
import { initAnimations } from './components/animations.js';
import { initHomePage } from './pages/home.js';
import { initTripsPage } from './pages/trips-page.js';
import { initTripDetailsPage } from './pages/trip-details-page.js';
import { initAboutPage } from './pages/about.js';
import { SITE } from './data/site.js';

function initContactPage() {
    document.querySelectorAll('[data-site-phone]').forEach((node) => {
        node.textContent = SITE.phone;
    });

    document.querySelectorAll('[data-site-email]').forEach((node) => {
        node.textContent = SITE.email;
    });

    document.querySelectorAll('[data-site-address]').forEach((node) => {
        node.textContent = SITE.address;
    });

    const mapFrame = document.getElementById('site-map');
    if (mapFrame) {
        mapFrame.src = SITE.mapEmbed;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const page = document.body.dataset.page || '';
    const layoutPage = page === 'trip-details' ? 'trips' : page;

    initLayout(layoutPage);
    initNavigation();
    initForms();
    initAnimations();

    switch (page) {
        case 'home':
            initHomePage();
            break;
        case 'trips':
            initTripsPage();
            break;
        case 'trip-details':
            initTripDetailsPage();
            break;
        case 'contact':
            initContactPage();
            break;
        case 'about':
            initAboutPage();
            break;
        default:
            break;
    }
});
