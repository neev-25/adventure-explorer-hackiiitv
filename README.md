# Adventure Explorer

A modular static website for an Indian adventure travel company.

**Repository:** https://github.com/neev-25/adventure-explorer-hackiiitv

## Project Structure

```
adventure-explorer-hackiiitv/
├── index.html                 # Homepage
├── trips.html                 # Trip listings
├── trip-details.html          # Single trip page
├── about.html                 # About + team
├── contact.html               # Contact form
├── assets/
│   ├── css/main.css
│   ├── js/                    # App entry, data, components, pages
│   └── images/                # hero, pages, trips, team, testimonials
└── scripts/download-images.py
```

## Run Locally

```bash
python -m http.server 8000
```

Then open:

| Page | URL |
|------|-----|
| Home | http://localhost:8000/ |
| Trips | http://localhost:8000/trips.html |
| About | http://localhost:8000/about.html |
| Contact | http://localhost:8000/contact.html |
| Trip details (example) | http://localhost:8000/trip-details.html?id=brahmatal |

## Deploy on GitHub Pages

Every push to `main` updates the `gh-pages` branch via GitHub Actions.

**Enable Pages (one time):**

1. Open [Repository Settings → Pages](https://github.com/neev-25/adventure-explorer-hackiiitv/settings/pages)
2. **Build and deployment → Source:** Deploy from a branch
3. **Branch:** `gh-pages` / **Folder:** `/ (root)`
4. Save and wait 1–2 minutes for the first deploy

**Live site base URL:**

```
https://neev-25.github.io/adventure-explorer-hackiiitv/
```

**Live page URLs (after Pages is enabled):**

| Page | URL |
|------|-----|
| Home | https://neev-25.github.io/adventure-explorer-hackiiitv/ |
| Trips | https://neev-25.github.io/adventure-explorer-hackiiitv/trips.html |
| About | https://neev-25.github.io/adventure-explorer-hackiiitv/about.html |
| Contact | https://neev-25.github.io/adventure-explorer-hackiiitv/contact.html |
| Trip details (example) | https://neev-25.github.io/adventure-explorer-hackiiitv/trip-details.html?id=brahmatal |

> If the live site shows 404, confirm the `gh-pages` branch exists under **Actions** and that Pages is set to that branch.

## Images

Page wallpapers (home, about, contact) are stored in `assets/images/` and are not replaced by the download script.

To refresh trip, team, and testimonial images only:

```bash
python scripts/download-images.py
```

Image paths are defined in `assets/js/data/images.js`.

## Add a New Trip

1. Add image to `assets/images/trips/`
2. Register path in `assets/js/data/images.js`
3. Add trip object in `assets/js/data/trips.js`

## Add Team Member or Testimonial

Edit `assets/js/data/people.js` and add the photo under `assets/images/team/` or `assets/images/testimonials/`.
