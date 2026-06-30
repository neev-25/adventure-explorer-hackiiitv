/** Central image registry — single source for all asset paths */
const BASE = 'assets/images';

export const IMAGES = {
    hero: {
        home: `${BASE}/hero/home.jpg`,
    },
    pages: {
        about: `${BASE}/pages/about-hero.jpg`,
        contact: `${BASE}/pages/contact-hero.jpg`,
    },
    trips: {
        brahmatal: `${BASE}/trips/brahmatal.jpg`,
        'dalhousie-winter': `${BASE}/trips/dalhousie-winter.jpg`,
        'kashmir-winter': `${BASE}/trips/kashmir-winter.jpg`,
        kedarkantha: `${BASE}/trips/kedarkantha.jpg`,
        'manali-winter': `${BASE}/trips/manali-winter.jpg`,
        dharamshala: `${BASE}/trips/dharamshala.jpg`,
        'har-ki-dun': `${BASE}/trips/har-ki-dun.jpg`,
        'kasol-manali': `${BASE}/trips/kasol-manali.jpg`,
        'kuari-pass': `${BASE}/trips/kuari-pass.jpg`,
        zanskar: `${BASE}/trips/zanskar.jpg`,
    },
    team: {
        'arjun-mehta': `${BASE}/team/arjun-mehta.jpg`,
        'priya-nair': `${BASE}/team/priya-nair.jpg`,
        'vikram-singh': `${BASE}/team/vikram-singh.jpg`,
        'ananya-reddy': `${BASE}/team/ananya-reddy.jpg`,
    },
    testimonials: {
        'priya-sharma': `${BASE}/testimonials/priya-sharma.jpg`,
        'rajesh-patel': `${BASE}/testimonials/rajesh-patel.jpg`,
        'anita-desai': `${BASE}/testimonials/anita-desai.jpg`,
    },
};

export function tripImage(tripId) {
    return IMAGES.trips[tripId] || IMAGES.hero.home;
}

export function teamImage(memberId) {
    return IMAGES.team[memberId] || IMAGES.hero.home;
}

export function testimonialImage(personId) {
    return IMAGES.testimonials[personId] || IMAGES.hero.home;
}
