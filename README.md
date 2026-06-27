# Amarea

Landing page for Amarea extra virgin olive oil, hosted on GitHub Pages.

## How to update content

### Edit text

Open `content/en.json` and change any value. Keys map directly to the page:

| Key | Where it appears |
|-----|-----------------|
| `hero.title` | Main headline |
| `hero.lead` | Paragraph below the headline |
| `hero.badge` | "Sold out" badge |
| `modern.design.title` | "Made for Modern Kitchens" heading |
| `origin.lead1` / `origin.lead2` | Origin section paragraphs |
| `close.lead` | Final CTA paragraph |
| … | All other keys follow the same pattern |

Save the file, commit, and push. Changes go live in ~2 minutes.

### Replace an image

1. Drop the new file into the right folder:
   - **Hero / lifestyle shots** → `assets/images/hero/`
   - **Product photos** → `assets/images/products/`

2. Open `content/en.json` and update the `"image"` value for that slot to match the new filename.  
   Example — to swap the hero photo:
   ```json
   "hero": {
     "image": "assets/images/hero/hero-new.webp",
     "imageAlt": "Updated alt text describing the image"
   }
   ```

3. Always update `"imageAlt"` to describe what's in the new image (accessibility + SEO).

4. Commit both the image file and the updated `en.json`, then push.

### Recommended image specs

| Slot | Folder | Max dimensions | Max file size | Format |
|------|--------|---------------|---------------|--------|
| Hero (1:1) | `hero/` | 1200 × 1200 px | 300 KB | WebP |
| Showcase (wide) | `hero/` | 1920 × 823 px | 300 KB | WebP |
| Gallery cards (4:5) | `hero/` | 800 × 1000 px | 150 KB | WebP |
| Origin (1:1) | `hero/` | 1200 × 1200 px | 200 KB | WebP |
| Product tin (5:8) | `products/` | 800 × 1280 px | 150 KB | WebP |

Convert to WebP with [Squoosh](https://squoosh.app) (free, browser-based).

### Deploy

Every push to `main` triggers GitHub Pages. Wait ~2 minutes, then reload the live site.

---

## Project structure

```
index.html          — page markup (data-i18n / data-i18n-src / data-i18n-alt attributes)
css/styles.css      — all styles
js/main.js          — interactions + loadContent() i18n loader
content/en.json     — all text and image paths
assets/images/
  hero/             — lifestyle and hero photos (.webp)
  products/         — product shots (.webp)
project/            — original Claude Design export (reference only)
```
