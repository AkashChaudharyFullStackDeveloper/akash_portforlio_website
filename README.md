# Akash Choudhary — Personal Website

Plain HTML/CSS/JS, no build step, no dependencies to install. Deployed free on GitHub Pages at
**https://akashchoudhary-dev.github.io/**.

## Redeploying changes

Since the repo is already connected to GitHub Pages, any push to `main` goes live automatically:
```
git add .
git commit -m "Update site"
git push
```
Changes usually appear within a minute or two.

## After going live (still worth doing)

- **Custom domain (optional).** If you later buy your own domain (e.g. `akashchoudhary.com`, ~$12/year),
  GitHub Pages supports pointing it at this repo for free — you'd only pay for the domain itself. This would
  replace the current `akashchoudhary-dev.github.io` URL everywhere in `index.html`, `robots.txt`, and `sitemap.xml`.
- **Submit to Google Search Console** (free): add the property, verify via the HTML file or meta tag method
  (works natively with GitHub Pages since you control the root), then submit `sitemap.xml`. This is what
  actually gets you indexed and ranking for your name in days rather than weeks.
- **Phone number was intentionally left off** the public page to avoid it being scraped by spam/scam bots —
  only email, LinkedIn, and GitHub are shown. Add it back into `index.html` if you'd rather have it visible.
- **Photo:** the hero uses `myLinkedInPic_black.png` as the avatar. Swap the file (keep the same name, or
  update the `src` on the `<img class="hero-avatar">` in `index.html`) if you want to use a different photo.

## Local preview

Just open `index.html` directly in a browser — no server needed.
