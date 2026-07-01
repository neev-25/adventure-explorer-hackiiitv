import { formatPrice } from '../utils/format.js';
import { withImageFallback, imageFallbackAttr } from '../utils/images.js';

export function createTripCard(trip) {
    const card = document.createElement('div');
    card.className = 'trip-card';

    const nextDate = trip.dates[0];
    const imageSrc = withImageFallback(trip.heroImage);

    card.innerHTML = `
        <div class="trip-image">
            <img src="${imageSrc}" alt="${trip.title}" ${imageFallbackAttr()}>
            <h3 class="trip-title">${trip.title}</h3>
            <div class="trip-features">
                <span><i class="fas fa-bus"></i></span>
                <span><i class="fas fa-utensils"></i></span>
                <span><i class="fas fa-campground"></i></span>
                <span><i class="fas fa-hiking"></i></span>
                <span><i class="fas fa-camera"></i></span>
            </div>
        </div>
        <div class="trip-info">
            <div class="trip-details">
                <p class="trip-location"><i class="fas fa-map-marker-alt"></i> ${trip.location}</p>
                <p class="trip-duration"><i class="far fa-clock"></i> ${trip.duration}</p>
                <p class="trip-difficulty"><i class="fas fa-mountain"></i> ${trip.difficulty}</p>
            </div>
            <div class="trip-dates">
                <p class="next-date"><i class="far fa-calendar-alt"></i> Next Trip: ${nextDate}</p>
            </div>
            <div class="trip-price">
                <span class="price">${formatPrice(trip.price)}</span>
                <span class="per-person">per person</span>
            </div>
            <a href="trip-details.html?id=${trip.id}" class="btn btn-secondary">View Details</a>
        </div>
    `;

    return card;
}

export function populateTripGrid(container, tripsList) {
    if (!container) return;

    container.innerHTML = '';
    tripsList.forEach((trip) => {
        container.appendChild(createTripCard(trip));
    });
}
