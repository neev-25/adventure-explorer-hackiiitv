import { renderTeamGrid, renderTestimonials } from '../components/people.js';
import { refreshAnimations } from '../components/animations.js';

export function initAboutPage() {
    renderTeamGrid('team-grid');
    renderTestimonials('about-testimonials-grid', 'about');
    refreshAnimations();
}
