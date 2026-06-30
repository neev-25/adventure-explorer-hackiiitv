import { teamMembers, testimonials } from '../data/people.js';
import { imageFallbackAttr } from '../utils/images.js';

export function renderTeamGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = teamMembers
        .map(
            (member) => `
        <div class="team-member">
            <div class="team-member-image">
                <img src="${member.image}" alt="${member.name}" ${imageFallbackAttr()}>
            </div>
            <div class="team-member-info">
                <h3>${member.name}</h3>
                <div class="position">${member.role}</div>
                <p>${member.description}</p>
                <div class="team-member-social">
                    <a href="#" aria-label="${member.name} on LinkedIn"><i class="fab fa-linkedin"></i></a>
                    <a href="#" aria-label="${member.name} on Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" aria-label="${member.name} on Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    `
        )
        .join('');
}

export function renderTestimonials(containerId, layout = 'home') {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = testimonials
        .map((item) => {
            if (layout === 'about') {
                return `
                <div class="testimonial-card">
                    <div class="testimonial-text">"${item.quote}"</div>
                    <div class="testimonial-author">
                        <div class="testimonial-author-image">
                            <img src="${item.image}" alt="${item.name}" ${imageFallbackAttr()}>
                        </div>
                        <div class="testimonial-author-info">
                            <h4>${item.name}</h4>
                            <p>${item.trip}, ${item.location.split(',')[0]}</p>
                        </div>
                    </div>
                </div>
            `;
            }

            return `
            <div class="testimonial">
                <img src="${item.image}" alt="${item.name}" ${imageFallbackAttr()}>
                <p>"${item.quote}"</p>
                <h4>${item.name}</h4>
                <span>${item.location}</span>
            </div>
        `;
        })
        .join('');
}
