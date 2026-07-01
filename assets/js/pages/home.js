import { trips } from '../data/trips.js';
import { populateTripGrid } from '../components/trip-card.js';
import { initTripCardHover, refreshAnimations } from '../components/animations.js';
import { renderTestimonials } from '../components/people.js';

export function initHomePage() {
    const featuredGrid = document.getElementById('featured-trips');
    if (featuredGrid) {
        const featuredTrips = [
            trips.snowTreks[0],
            trips.summerEvents[0],
            trips.highlightedEvents[0],
        ];

        populateTripGrid(featuredGrid, featuredTrips);
        initTripCardHover(featuredGrid);
    }

    renderTestimonials('home-testimonials-grid', 'home');
    refreshAnimations();
}
