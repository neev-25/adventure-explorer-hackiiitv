import { getTripById, getDefaultTrip } from '../data/trips.js';
import { SITE } from '../data/site.js';
import { formatPrice } from '../utils/format.js';
import { withImageFallback, imageFallbackAttr } from '../utils/images.js';

function setText(id, value) {
    const element = document.getElementById(id);
    if (element && value != null) {
        element.textContent = value;
    }
}

function renderHighlights(trip) {
    const container = document.getElementById('highlights-list');
    if (!container || !trip.highlights) return;

    container.innerHTML = trip.highlights
        .map(
            (highlight) => `
            <div class="highlight-item">
                <i class="fas fa-check-circle"></i>
                <div>
                    <h4>${highlight}</h4>
                </div>
            </div>
        `
        )
        .join('');
}

function renderFolkTales(trip) {
    const section = document.getElementById('folk-tales-section');
    const container = document.getElementById('folk-tales-list');
    if (!section || !container || !trip.folkTales?.length) return;

    section.hidden = false;
    container.innerHTML = trip.folkTales
        .map((tale) => `<li>${tale}</li>`)
        .join('');
}

function renderSchedule(trip) {
    const container = document.getElementById('schedule-list');
    if (!container) return;

    const items = trip.specialFeatures?.length
        ? trip.specialFeatures
        : trip.highlights || [];

    container.innerHTML = items
        .map(
            (item, index) => `
            <div class="schedule-item">
                <div class="schedule-day">Day ${index + 1}</div>
                <p>${item}</p>
            </div>
        `
        )
        .join('');
}

function renderGallery(trip) {
    const container = document.getElementById('gallery-grid');
    if (!container) return;

    const imageSrc = withImageFallback(trip.heroImage);
    container.innerHTML = Array.from({ length: 6 }, (_, index) => `
        <div class="gallery-item">
            <img src="${imageSrc}" alt="${trip.title} gallery ${index + 1}" ${imageFallbackAttr()}>
        </div>
    `).join('');
}

function initBookingForm(trip) {
    const travelersSelect = document.getElementById('travelers');
    const travelersCount = document.getElementById('travelers-count');
    const totalPrice = document.getElementById('total-price');
    const pricePerPerson = document.getElementById('price-per-person');
    const bookingForm = document.getElementById('booking-form');

    if (pricePerPerson) {
        pricePerPerson.textContent = formatPrice(trip.price);
    }

    if (totalPrice) {
        totalPrice.textContent = formatPrice(trip.price);
    }

    if (travelersSelect && travelersCount && totalPrice) {
        travelersSelect.addEventListener('change', () => {
            const count = parseInt(travelersSelect.value, 10) || 1;
            travelersCount.textContent = String(count);
            totalPrice.textContent = formatPrice(trip.price * count);
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert(
                'Booking submitted successfully! We will contact you shortly to confirm your reservation.'
            );
            bookingForm.reset();
            if (travelersCount) travelersCount.textContent = '1';
            if (totalPrice) totalPrice.textContent = formatPrice(trip.price);
        });
    }
}

export function initTripDetailsPage() {
    const params = new URLSearchParams(window.location.search);
    const trip = getTripById(params.get('id')) || getDefaultTrip();
    const heroImage = withImageFallback(trip.heroImage);

    document.title = `${trip.title} - Adventure Explorer`;
    setText('trip-title', trip.title);
    setText('trip-subtitle', trip.location);
    setText('trip-description', trip.description);
    setText('trip-duration', trip.duration);
    setText('trip-difficulty', trip.difficulty);
    setText('trip-group-size', trip.groupSize);
    setText('sidebar-duration', trip.duration);
    setText('sidebar-group-size', trip.groupSize);
    setText('sidebar-difficulty', trip.difficulty);
    setText('next-dates', trip.dates.join(', '));

    const priceTag = document.getElementById('price-tag');
    if (priceTag) {
        priceTag.textContent = formatPrice(trip.price);
    }

    const hero = document.getElementById('trip-hero');
    if (hero) {
        hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('${heroImage}')`;
    }

    renderHighlights(trip);
    renderFolkTales(trip);
    renderSchedule(trip);
    renderGallery(trip);
    initBookingForm(trip);

    document.querySelectorAll('[data-site-phone]').forEach((node) => {
        node.textContent = SITE.phone;
    });
}
