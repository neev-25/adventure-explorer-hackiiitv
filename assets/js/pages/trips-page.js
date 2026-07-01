import { trips } from '../data/trips.js';
import { populateTripGrid } from '../components/trip-card.js';
import { initTripCardHover, refreshAnimations } from '../components/animations.js';

function initializeSliders() {
    document.querySelectorAll('.trips-slider').forEach((slider) => {
        const grid = slider.querySelector('.trips-grid');
        const prevBtn = slider.querySelector('.prev-arrow');
        const nextBtn = slider.querySelector('.next-arrow');

        if (!grid || !prevBtn || !nextBtn) return;

        let scrollAmount = 0;

        const getStep = () => {
            const card = grid.querySelector('.trip-card');
            if (!card) return 320;
            const styles = window.getComputedStyle(card);
            const margin =
                parseFloat(styles.marginLeft || '0') +
                parseFloat(styles.marginRight || '0');
            return card.offsetWidth + margin;
        };

        prevBtn.addEventListener('click', () => {
            scrollAmount = Math.max(scrollAmount - getStep(), 0);
            grid.style.transform = `translateX(-${scrollAmount}px)`;
        });

        nextBtn.addEventListener('click', () => {
            const maxScroll = Math.max(grid.scrollWidth - grid.clientWidth, 0);
            scrollAmount = Math.min(scrollAmount + getStep(), maxScroll);
            grid.style.transform = `translateX(-${scrollAmount}px)`;
        });
    });
}

export function initTripsPage() {
    const grids = document.querySelectorAll('.trips-grid');
    if (grids.length < 3) return;

    populateTripGrid(grids[0], trips.snowTreks);
    populateTripGrid(grids[1], trips.summerEvents);
    populateTripGrid(grids[2], trips.highlightedEvents);

    document.querySelectorAll('.trips-grid').forEach((grid) => {
        initTripCardHover(grid);
    });

    initializeSliders();
    refreshAnimations();
}
