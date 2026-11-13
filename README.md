# Kirshiv Events Presents Dhamaka '26

High-converting, mobile-first luxury landing page for **Kirshiv Events Presents Dhamaka '26** — Farm & Bonfire Party in NCR.

---

## 📁 Production Directory Structure

```text
├── assets/
│   ├── css/
│   │   └── styles.css              # Custom keyframe animations, badges, clip-paths, and reset rules
│   ├── js/
│   │   ├── main.js                 # Application bootstrap entry point & lifecycle manager
│   │   ├── tailwind-config.js      # Tailwind CSS color system and typography tokens
│   │   └── modules/
│   │       ├── booking.js          # UPI clipboard, payment receipt preview, validation & confetti modal
│   │       ├── pricing.js          # Dynamic pass tier calculations and ticket quantity stepper
│   │       └── video.js            # Seamless dual 4K/1080p video background crossfader
│   ├── images/
│   │   ├── Kirshivevents.svg       # Primary brand vector logo
│   │   └── Kirshivevents_favicon.svg # Favicon and Apple Touch icon
│   └── videos/
│       ├── video1.mp4              # Hero cinematic ambient teaser video
│       └── video2.mp4              # Hero high-energy celebration video
├── index.html                      # Semantic, accessible HTML5 single-page application
├── package.json                    # Project metadata and development scripts
├── site.webmanifest                # Progressive Web App (PWA) manifest
├── robots.txt                      # Search engine crawler configuration
├── sitemap.xml                     # Search engine XML index sitemap
├── vercel.json                     # Production caching headers & security rules for Vercel
├── .editorconfig                   # Cross-editor formatting consistency
├── .prettierrc                     # Prettier code formatting rules
├── .gitignore                      # Git ignore patterns for production dependencies & OS files
└── README.md                       # Architecture and operations documentation
```

---

## ⚡ Quick Start

### 1. Zero-Install Instant Preview
You can run the site immediately using any static web server:

```bash
# Using Node.js http-server
npx http-server -p 3000 .

# Or using Python
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. NPM Workflow
```bash
# Start local development server
npm run dev

# Format code with Prettier
npm run format

# Verify formatting
npm run lint
```

---

## 🌟 Architecture & Features

- **Decoupled Architecture:** Separation of HTML markup, external styles (`assets/css/`), modular JavaScript (`assets/js/modules/`), and organized media assets (`assets/images/`, `assets/videos/`).
- **Dynamic 4K Video Wallpaper:** Auto-crossfading dual video engine (`video1.mp4` & `video2.mp4`) with smooth opacity transitions.
- **Dynamic Pricing Calculator:** Tiered pricing for Stag and Couple packages (Alcoholic / Non-Alcoholic) with automatic total computation.
- **Desk Payment Verification:** Integrated UPI copying, instantaneous receipt image upload preview, and age restriction compliance checks.
- **Celebration Confetti Modal:** Dynamic booking reference generator and Canvas Confetti celebration.
- **Production SEO & PWA Ready:** Pre-configured with meta tags, Open Graph definitions, `robots.txt`, `sitemap.xml`, and `site.webmanifest`.

---

## 🚀 Deployment

### Vercel
Deploy instantly using Vercel CLI or Git integration:
```bash
npx vercel
```
*Pre-configured via `vercel.json` with immutable 1-year caching on static assets and security headers.*

### Netlify / Cloudflare Pages / GitHub Pages
Upload or connect your repository. Set publish directory to the repository root (`.`). No build command required.

---

## 📜 Event Information
- **Event:** Kirshiv Events Presents Dhamaka '26
- **Date & Time:** Friday, 31 December 2026 • 07:00 PM to 03:00 AM
- **Venue:** Nature Farm Stay with Lawn and Bonfire, near Dwarka Expressway
- **Dress Code:** Ethnic, vibrant, colourful and festive
