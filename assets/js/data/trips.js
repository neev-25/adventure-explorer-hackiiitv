// Trip catalogue
import { tripImage } from './images.js';

export const trips = {
    snowTreks: [
        {
            id: "brahmatal",
            title: "Brahmatal Trek",
            location: "Uttarakhand, India",
            duration: "6 Days",
            groupSize: "Max 15 people",
            difficulty: "Moderate",
            price: 12999,
            dates: [
                "December 15-20, 2024",
                "December 25-30, 2024",
                "January 5-10, 2025",
                "January 15-20, 2025"
            ],
            description: "Experience the mystical winter trek to Brahmatal, a pristine high-altitude lake blessed by Lord Brahma himself.",
            folkTales: [
                "Lord Brahma chose this serene lake for meditation to understand universe's mysteries",
                "The lake remains partially unfrozen even in harsh winters due to Brahma's eternal spiritual energy",
                "Ancient sages performed rituals here seeking divine wisdom"
            ],
            highlights: [
                "Snow-covered alpine meadows",
                "Panoramic Himalayan views",
                "Ancient meditation spots",
                "High-altitude lake visit",
                "Traditional mountain villages"
            ],
            specialFeatures: [
                "Night camping under starlit skies",
                "Professional photography sessions",
                "Local folklore sessions",
                "Emergency medical support"
            ],
            heroImage: tripImage('brahmatal')
        },
        {
            id: "dalhousie-winter",
            title: "Dalhousie Winter",
            location: "Himachal Pradesh, India",
            duration: "5 Days",
            groupSize: "Max 12 people",
            difficulty: "Easy",
            price: 9999,
            dates: [
                "December 20-24, 2024",
                "January 1-5, 2025",
                "January 15-19, 2025",
                "February 1-5, 2025"
            ],
            description: "Discover the winter wonderland of Dalhousie, with its snow-covered peaks and colonial charm.",
            folkTales: [
                "Sui Mata's sacrifice legend",
                "Tales of Kalatop Wildlife Sanctuary",
                "Mystical forest spirits of Kalatop"
            ],
            highlights: [
                "Snow activities in Khajjiar",
                "Visit to Kalatop Sanctuary",
                "Colonial heritage walks",
                "Local Himachali cuisine",
                "Sunset at Panchpula"
            ],
            specialFeatures: [
                "Photography workshops",
                "Local craft sessions",
                "Bonfire evenings",
                "Heritage hotel stay"
            ],
            heroImage: tripImage('dalhousie-winter')
        },
        {
            id: "kashmir-winter",
            title: "Kashmir Winter Magic",
            location: "Kashmir, India",
            duration: "7 Days",
            groupSize: "Max 10 people",
            difficulty: "Moderate",
            price: 18999,
            dates: [
                "December 10-16, 2024",
                "December 24-30, 2024",
                "January 7-13, 2025",
                "January 21-27, 2025"
            ],
            description: "Experience the magical winter wonderland of Kashmir with its pristine snow landscapes and rich culture.",
            folkTales: [
                "Pehd Nag and the Tawi River legend",
                "Tales of Yemberzal - the green-eyed spirit",
                "Stories of ancient Kashmiri saints"
            ],
            highlights: [
                "Gulmarg ski resort visit",
                "Traditional Kashmiri cuisine",
                "Snow sports activities",
                "Cultural performances",
                "Local handicraft workshops"
            ],
            specialFeatures: [
                "Ski lessons for beginners",
                "Kashmiri cooking classes",
                "Photography tours",
                "Traditional homestay"
            ],
            heroImage: tripImage('kashmir-winter')
        },
        {
            id: "kedarkantha",
            title: "Kedarkantha Winter Trek",
            location: "Uttarakhand, India",
            duration: "6 Days",
            groupSize: "Max 15 people",
            difficulty: "Moderate",
            price: 11999,
            dates: [
                "December 15-20, 2024",
                "December 25-30, 2024",
                "January 5-10, 2025",
                "January 15-20, 2025"
            ],
            description: "Summit the majestic Kedarkantha peak in its winter glory.",
            folkTales: [
                "According to Hindu mythology, the Kedarkantha temple was built by the Pandavas",
                "Lord Shiva meditated here in the form of a bull",
                "The peak is considered sacred and is believed to be where Lord Shiva held council with other gods"
            ],
            highlights: [
                "Snow-covered trails and camping",
                "Visit to ancient temples",
                "Stunning sunrise views",
                "Traditional Garhwali cuisine",
                "Professional guides"
            ],
            specialFeatures: [
                "Night camping under stars",
                "Hot meals throughout trek",
                "Professional photography",
                "Medical support"
            ],
            heroImage: tripImage('kedarkantha')
        },
        {
            id: "manali-winter",
            title: "Manali Winter Adventure",
            location: "Himachal Pradesh, India",
            duration: "5 Days",
            groupSize: "Max 12 people",
            difficulty: "Easy to Moderate",
            price: 10999,
            dates: [
                "December 20-24, 2024",
                "January 3-7, 2025",
                "January 17-21, 2025",
                "January 31-February 4, 2025"
            ],
            description: "Experience the winter charm of Manali with snow activities and cultural exploration.",
            folkTales: [
                "Tales of Hidimba Temple",
                "Legends of Manu Temple",
                "Stories of the Valley of Gods"
            ],
            highlights: [
                "Snow activities in Solang",
                "Hot spring visits",
                "Local temple tours",
                "Traditional food tasting",
                "Cultural performances"
            ],
            specialFeatures: [
                "Ski workshops",
                "Local art classes",
                "Evening bonfires",
                "Luxury camp stay"
            ],
            heroImage: tripImage('manali-winter')
        }
    ],
    summerEvents: [
        {
            id: "dharamshala",
            title: "Dharamshala Retreat",
            location: "Himachal Pradesh, India",
            duration: "4 Days",
            groupSize: "Max 15 people",
            difficulty: "Easy",
            price: 8999,
            dates: [
                "April 10-13, 2024",
                "April 25-28, 2024",
                "May 10-13, 2024",
                "May 25-28, 2024"
            ],
            description: "Experience the spiritual and natural beauty of Dharamshala, home to the Dalai Lama.",
            folkTales: [
                "Bhagsu Nag Temple legends",
                "Dalai Lama's Prophecy",
                "Tales of Kalatop Wildlife Sanctuary"
            ],
            highlights: [
                "Visit McLeodganj",
                "Buddhist temple tours",
                "Meditation sessions",
                "Nature walks",
                "Local cooking classes"
            ],
            specialFeatures: [
                "Tibetan cooking workshop",
                "Meditation retreat",
                "Tea garden visit",
                "Local art classes"
            ],
            heroImage: tripImage('dharamshala')
        },
        {
            id: "har-ki-dun",
            title: "Har ki Dun Trek",
            location: "Uttarakhand, India",
            duration: "6 Days",
            groupSize: "Max 12 people",
            difficulty: "Moderate",
            price: 12999,
            dates: [
                "May 5-10, 2024",
                "May 20-25, 2024",
                "June 5-10, 2024",
                "June 20-25, 2024"
            ],
            description: "Trek through the Valley of Gods, experiencing pristine nature and ancient villages.",
            folkTales: [
                "Pandavas' Journey to Heaven",
                "Sacred Streams legends",
                "Tales of Forest Spirits"
            ],
            highlights: [
                "Ancient village visits",
                "Himalayan flora and fauna",
                "Mountain stream camping",
                "Traditional architecture",
                "Local festival experience"
            ],
            specialFeatures: [
                "Village homestay program",
                "Local craft workshops",
                "Mountain photography",
                "Cultural performances"
            ],
            heroImage: tripImage('har-ki-dun')
        },
        {
            id: "kasol-manali",
            title: "Kasol Manali Adventure",
            location: "Himachal Pradesh, India",
            duration: "5 Days",
            groupSize: "Max 12 people",
            difficulty: "Easy to Moderate",
            price: 9999,
            dates: [
                "May 10-14, 2024",
                "May 25-29, 2024",
                "June 5-9, 2024",
                "June 20-24, 2024"
            ],
            description: "Explore the serene beauty of Parvati Valley and experience the vibrant culture of Manali.",
            folkTales: [
                "Kasol's transformation into 'Mini Israel'",
                "Legends of Lord Shiva meditating in Parvati Valley",
                "Mythological tales of Manikaran hot springs"
            ],
            highlights: [
                "Visit to Manikaran Sahib",
                "Trekking in Parvati Valley",
                "Local village exploration",
                "Camping by the river",
                "Traditional Himachali food"
            ],
            specialFeatures: [
                "Hot spring bath experience",
                "Local handicraft workshops",
                "Cultural performances",
                "Riverside camping"
            ],
            heroImage: tripImage('kasol-manali')
        }
    ],
    highlightedEvents: [
        {
            id: "kuari-pass",
            title: "Kuari Pass Trek",
            location: "Uttarakhand, India",
            duration: "7 Days",
            groupSize: "Max 12 people",
            difficulty: "Moderate to Challenging",
            price: 14999,
            dates: [
                "April 15-21, 2024",
                "May 1-7, 2024",
                "May 15-21, 2024",
                "June 1-7, 2024"
            ],
            description: "Trek through the ancient Lord Curzon's trail with breathtaking views of Nanda Devi.",
            folkTales: [
                "Goddess Parvati's meditation spot",
                "Tales of Neelkanth Peak",
                "Ancient shepherd routes"
            ],
            highlights: [
                "Panoramic Himalayan views",
                "High-altitude meadows",
                "Ancient forests",
                "Local village visits",
                "Mountain photography"
            ],
            specialFeatures: [
                "Expert photography guidance",
                "Local guide stories",
                "Camping under stars",
                "Traditional meals"
            ],
            heroImage: tripImage('kuari-pass')
        },
        {
            id: "zanskar",
            title: "Zanskar Valley Expedition",
            location: "Ladakh, India",
            duration: "8 Days",
            groupSize: "Max 10 people",
            difficulty: "Challenging",
            price: 24999,
            dates: [
                "July 5-12, 2024",
                "July 20-27, 2024",
                "August 5-12, 2024",
                "August 20-27, 2024"
            ],
            description: "Journey through the remote Zanskar Valley, experiencing its unique culture and landscapes.",
            folkTales: [
                "The Creation Myth of Indus River",
                "Legend of Sengge Namgyal",
                "Tales of the Snow Lion"
            ],
            highlights: [
                "Visit ancient monasteries",
                "Cross high mountain passes",
                "Experience local culture",
                "River rafting adventure",
                "Buddhist meditation sessions"
            ],
            specialFeatures: [
                "Monastery stay experience",
                "Traditional mask dance show",
                "High-altitude photography",
                "Local family homestay"
            ],
            heroImage: tripImage('zanskar')
        }
    ]
};

export function getTripById(id) {
    for (const category of Object.values(trips)) {
        const match = category.find((trip) => trip.id === id);
        if (match) return match;
    }
    return null;
}

export function getDefaultTrip() {
    return trips.snowTreks[0];
}

export function getAllTripsFlat() {
    return Object.values(trips).flat();
}
