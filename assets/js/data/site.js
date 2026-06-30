import { IMAGES } from './images.js';

export const SITE = {
    name: 'Adventure Explorer',
    phone: '+91 98765 43210',
    email: 'info@adventureexplorer.com',
    address: '123 Adventure Street, Mumbai, India',
    year: 2024,
    css: 'assets/css/main.css',
    js: 'assets/js/main.js',
    mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377343.884010254!2d72.5713621!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f647675c!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000',
    imageFallback: IMAGES.hero.home,
    heroFallback: IMAGES.hero.home,
};

export const NAV_LINKS = [
    { id: 'home', label: 'Home', href: 'index.html' },
    { id: 'trips', label: 'Trips', href: 'trips.html' },
    { id: 'about', label: 'About', href: 'about.html' },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
];
