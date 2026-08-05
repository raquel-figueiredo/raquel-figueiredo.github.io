# raquel-figueiredo.github.io

Personal portfolio site for Raquel Figueiredo, Senior Product Designer. Plain HTML5, modern CSS, and a small amount of vanilla JavaScript — no build step, no framework, no backend. Deploys directly to GitHub Pages.

**Live site:** https://raquel-figueiredo.github.io/

## Why no framework

The site is 8 static pages with shared visual language but no shared interactive state — a static-site generator or JS framework would add build complexity without a real benefit here. Plain HTML keeps it trivially easy to maintain: open a file, edit the text, commit.

## Folder structure

```
├── index.html              Home
├── work.html                Work / Projects index
├── work-welbe.html          Case study — Welbe Care
├── work-sulamerica.html     Case study — SulAmérica
├── work-vivo.html           Case study — Vivo
├── work-bradesco.html       Case study — Bradesco Seguros
├── about.html                About Me (bio, process, full résumé, contact)
├── 404.html                   Custom not-found page
├── css/style.css              Full design system (tokens, components, responsive rules)
├── js/main.js                 Mobile nav toggle (no dependencies)
├── images/                    Project screenshots
├── favicon/                   PNG favicons + apple-touch-icon (photo-based)
├── assets/raquel-figueiredo-resume.pdf   Downloadable résumé PDF
├── sitemap.xml
├── robots.txt
└── .gitignore
```

## Navigation & contact

The header nav is intentionally minimal: **Work**, **About Me**, and a LinkedIn icon. There is no separate Résumé or Contact page — both live inside `about.html`, which includes the full professional-experience/education/skills content plus a résumé PDF download button, an email `mailto:` link, and the LinkedIn profile link. The footer repeats the LinkedIn and email icons on every page.

## Editing content

Every page is a self-contained HTML file — there's no templating layer. To update text, open the relevant `.html` file and edit directly. The header/nav/footer markup is duplicated across pages by design (a static-site generator would remove this duplication, but at 8 pages it isn't worth the added tooling).

To add a new case study:
1. Duplicate `work-vivo.html` as a starting template (it has the fullest structure, including sub-work sections).
2. Update the `<title>`, meta description, canonical URL, and JSON-LD block in `<head>`.
3. Update the hero, meta-grid, stat-strip, and body sections.
4. Add a new card to the `project-row` list in both `index.html` and `work.html`.
5. Add the new URL to `sitemap.xml`.

To update the résumé content (experience, education, skills), edit the relevant sections directly inside `about.html` — and remember to also replace `assets/raquel-figueiredo-resume.pdf` if the downloadable PDF should match.

## Accessibility

- Skip-to-content link on every page (`.skip-link`, visible on keyboard focus)
- Visible focus states via `:focus-visible` (see bottom of `css/style.css`)
- `prefers-reduced-motion` respected
- Keyboard-operable mobile nav (`js/main.js`), closes on `Escape`
- All images include descriptive `alt` text
- Icon-only links (LinkedIn, email) include `aria-label`

## Deployment (GitHub Pages)

```bash
# from inside this folder
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/raquel-figueiredo/raquel-figueiredo.github.io.git
git push -u origin main
```

Because the repository is named `<username>.github.io`, GitHub Pages serves it automatically from the `main` branch root — no extra configuration needed. If Pages isn't enabled yet: **Settings → Pages → Source: Deploy from a branch → `main` / `/(root)`**.

Check the live site at `https://raquel-figueiredo.github.io/` a minute or two after pushing.

### Updating the live site later

```bash
git add .
git commit -m "Describe what changed"
git push
```

GitHub Pages rebuilds automatically within a minute or two of any push to `main`.

## License

See `LICENSE`. Recommended: MIT for the code/markup, with a note that project screenshots, résumé content, and personal information are **not** covered by the license and remain all rights reserved.
