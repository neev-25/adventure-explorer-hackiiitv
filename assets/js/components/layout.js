import { SITE, NAV_LINKS } from '../data/site.js';

function renderNav(activePage) {
    const links = NAV_LINKS.map(
        (link) =>
            `<a href="${link.href}" class="${link.id === activePage ? 'active' : ''}">${link.label}</a>`
    ).join('');

    return `
        <nav class="navbar">
            <div class="container">
                <a href="index.html" class="logo">${SITE.name}</a>
                <div class="nav-links">${links}</div>
                <button class="menu-toggle" type="button" aria-label="Toggle navigation menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    `;
}

function renderFooter() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <p>${SITE.name} is your gateway to discovering India's most breathtaking destinations through carefully curated adventure trips.</p>
                    </div>
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="trips.html">Our Trips</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Contact Us</h3>
                        <p>
                            <i class="fas fa-phone"></i> ${SITE.phone}<br>
                            <i class="fas fa-envelope"></i> ${SITE.email}<br>
                            <i class="fas fa-map-marker-alt"></i> ${SITE.address}
                        </p>
                    </div>
                    <div class="footer-section">
                        <h3>Follow Us</h3>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; ${SITE.year} ${SITE.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    `;
}

function renderNewsletter() {
    return `
        <section class="newsletter">
            <div class="container">
                <h2>Stay Updated</h2>
                <p>Subscribe to our newsletter for the latest adventure updates and special offers.</p>
                <form id="newsletter-form">
                    <input type="email" placeholder="Enter your email" required>
                    <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
            </div>
        </section>
    `;
}

export function initLayout(activePage) {
    const navRoot = document.getElementById('site-nav');
    const footerRoot = document.getElementById('site-footer');
    const newsletterRoot = document.getElementById('site-newsletter');

    if (navRoot) {
        navRoot.innerHTML = renderNav(activePage);
    }

    if (footerRoot) {
        footerRoot.innerHTML = renderFooter();
    }

    if (newsletterRoot) {
        newsletterRoot.innerHTML = renderNewsletter();
    }
}
