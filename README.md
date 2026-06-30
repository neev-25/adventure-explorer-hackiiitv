# Adventure Explorer

A modular static website for an Indian adventure travel company.

## Project Structure

```
adventure-explorer-hackiiitv/
├── index.html                 # Homepage
├── trips.html                 # Trip listings
├── trip-details.html          # Single trip page
├── about.html                 # About + team
├── contact.html               # Contact form
├── assets/
│   ├── css/
│   │   └── main.css           # All styles
│   ├── js/
│   │   ├── main.js            # App entry
│   │   ├── data/
│   │   │   ├── site.js        # Site config & contact info
│   │   │   ├── images.js      # Image path registry
│   │   │   ├── people.js      # Team & testimonials data
│   │   │   └── trips.js       # Trip catalogue
│   │   ├── components/        # Reusable UI (nav, cards, forms)
│   │   ├── pages/             # Page-specific logic
│   │   └── utils/             # Helpers (format, images)
│   └── images/
│       ├── hero/              # Homepage hero
│       ├── pages/             # Page hero banners
│       ├── trips/             # Trip card & detail images
│       ├── team/              # Team member photos
│       └── testimonials/      # Traveler photos
└── scripts/
    └── download-images.py     # Fetch images from Unsplash
```

## Deploy (GitHub Pages)

Pushes to `main` deploy automatically via GitHub Actions.

1. In the repo on GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. After the workflow runs, the site is live at:

   `https://neev-25.github.io/adventure-explorer-hackiiitv/`

## Run Locally

```bash
python -m http.server 8000
```

Open http://localhost:8000/index.html

## Download / Refresh Images

```bash
python scripts/download-images.py
```

All image paths are defined in `assets/js/data/images.js`.

## Add a New Trip

1. Add image to `assets/images/trips/` (or run download script)
2. Register path in `assets/js/data/images.js`
3. Add trip object in `assets/js/data/trips.js`

## Add Team Member or Testimonial

Edit `assets/js/data/people.js` and add the photo under `assets/images/team/` or `assets/images/testimonials/`.
