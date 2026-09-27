# Akash Choudhary — Personal Website

Plain HTML/CSS/JS, no build step, no dependencies to install. Deploy free on GitHub Pages.

## Deploy for free (GitHub Pages)

1. Create a new **public** GitHub repo, e.g. `AkashChaudharyFullStackDeveloper/akash-choudhary.github.io`
   (naming it `<username>.github.io` gives you the shortest free URL: `https://<username>.github.io`).
2. From this folder, push the files:
   ```
   git init
   git add .
   git commit -m "Initial personal website"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → Deploy from branch → main → / (root) → Save**.
4. Your site is live within a minute or two at `https://<username>.github.io`.

## Before/after going live

- **Update the placeholder domain.** `index.html` (canonical + Open Graph tags), `robots.txt`, and `sitemap.xml`
  all currently point to `https://akashchoudhary.dev/`. Replace that with your actual GitHub Pages URL
  (or your own custom domain, if you buy one later — GitHub Pages supports custom domains for free, you'd
  only pay for the domain itself, ~$12/year).
- **Submit to Google Search Console** (free): add the property, verify via the HTML file or meta tag method
  (works natively with GitHub Pages since you control the root), then submit `sitemap.xml`. This is what
  actually gets you indexed and ranking for your name in days rather than weeks.
- **Phone number was intentionally left off** the public page to avoid it being scraped by spam/scam bots —
  only email, LinkedIn, and GitHub are shown. Add it back into `index.html` if you'd rather have it visible.
- **Photo:** the hero uses `myLinkedInPic_black.png` as the avatar. Swap the file (keep the same name, or
  update the `src` on the `<img class="hero-avatar">` in `index.html`) if you want to use a different photo.

## Local preview

Just open `index.html` directly in a browser — no server needed.
