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

Pushes to `main` publish the site to the `gh-pages` branch automatically.

**One-time setup on GitHub:**
1. Open **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` → `/ (root)` → Save

**Live URLs:**
- Home: https://neev-25.github/adventure-explorer-hackiiitv/
- About: https://neev-25.github/adventure-explorer-hackiiitv/about.html
- Contact: https://neev-25.github/adventure-explorer-hackiiitv/contact.html

Primary pages: `index.html`, `about.html`, `contact.html`

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
