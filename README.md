# Heartfelt Care Foundation Website

A static, multi-page website for Heartfelt Care Foundation (Tanzania). Plain HTML, CSS and JavaScript, no build step and no framework required. Every file sits flat in one folder so it can be dropped straight into any static host.

Live domain: `https://www.heartfeltcarefoundation.org`

## What's in this folder

**Pages**
| File | Purpose |
|---|---|
| `index.html` | Home page: hero, impact stats, links to every section |
| `about.html` | Founder bio, CEO message, Vision, Mission, Core Purpose, Objectives, Core Values, Motto |
| `our-work.html` | The six program areas |
| `our-community.html` | Community and partner outreach photos |
| `events.html` | Upcoming events (Tabasamu Charity, Mwezeshe Charity) with live countdowns |
| `gallery.html` | Full photo gallery with lightbox |
| `donate.html` | Donate Money / Donate Items / Become a Sponsor |
| `join.html` | Membership registration link and the contact form |
| `contact.html` | Phone, email and WhatsApp details |
| `thank-you.html` | Shown after someone confirms a donation |
| `message-sent.html` | Shown after the contact form is submitted |
| `privacy-policy.html`, `terms-of-use.html`, `child-protection-policy.html` | Legal pages (still marked as drafts, see below) |

**Assets**
- `style.css`, `script.js`: all styling and behavior (mobile menu, stat counters, lightbox, event countdowns, contact form handling)
- `heartfelt-care-logo.png`, `ceo-generorodgers-portrait.png`, `digidocs-official-logo.jpg`: brand and partner images
- `gallery-01.jpg` to `gallery-08.jpg`, `community-01.jpg`, `community-02.jpg`: outreach photos
- `tabasamu-charity.png`, `mwezeshe-charity.png`: event flyers, shown on the Events page
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`: full favicon and home-screen icon set, generated from the logo mark
- `sitemap.xml`, `robots.txt`, `humans.txt`: standard SEO and credit files

## Deploying

**Netlify (recommended, and required for the contact form to work):**
1. Drag this whole folder into Netlify's deploy area, or connect it as a Git repo and set the publish directory to the folder root (no build command needed).
2. Once live, go to **Site settings → Forms** to see contact form submissions, and turn on email notifications there if you want an alert per message.

**Any other static host** (shared hosting, GitHub Pages, etc.):
- Upload every file to the web root exactly as it is, keeping them all in the same folder.
- The contact form's "Send Message" button will not work unless the host is Netlify. The WhatsApp and Email buttons next to it work anywhere, since they just open the visitor's own app.

## The contact form (`join.html`)

The form is wired for [Netlify Forms](https://docs.netlify.com/forms/setup/):
- `data-netlify="true"` plus the hidden `form-name` field let Netlify pick up the form automatically at deploy time. No extra setup on Netlify's side is needed.
- A hidden honeypot field (`bot-field`) filters out spam bots.
- On a successful submission, the visitor is redirected to `message-sent.html`.
- Alongside the real submit button, the "Send via WhatsApp" and "Send via Email" buttons stay as quick alternatives that open the visitor's own app with the message pre-filled. Nothing is sent through those without the visitor pressing send themselves.

## Events and countdowns (`events.html`)

Each event card has a `<div class="countdown" data-event-date="...">` with an ISO date-time (East Africa Time, `+03:00`). `script.js` reads that attribute and updates the days/hours/minutes/seconds every second.

To add a future event, copy one `.event-card-full` block, update its flyer image, details and `data-event-date`, and it will start counting down automatically. Once an event's date passes, its countdown block gets an `is-past` class and the numbers stop at zero, so it is worth removing or replacing past events after each one happens.

## Before this goes live, please check

- **Impact numbers on `index.html`** are sample figures (120+, 60+, 25+, 8), flagged with a note underneath. Replace them with your real, verified counts before launch.
- **Airtel Money number**: only `+255 697 221 882` is shown for donations, as requested. Confirm this is still the correct number.
- **Event details**: Tabasamu Charity is dated 19 Dec 2026 and Mwezeshe Charity 26 Dec 2026. The year for Mwezeshe was assumed from context since the flyer only stated "26th". Please confirm.
- **Legal pages** (Privacy Policy, Terms of Use, Child Protection Policy) are still marked as draft templates in the page text itself and should be reviewed by someone familiar with Tanzanian law before publishing.
- **Google Form link** on `join.html` (membership registration) should be double-checked, since it was carried over as-is.

## SEO

- Every page has a unique title, meta description, canonical URL and Open Graph/Twitter card tags.
- `sitemap.xml` lists every public page at its real address (e.g. `/about.html`); `thank-you.html` and `message-sent.html` are intentionally left out and blocked in `robots.txt` since they are only meant to be seen right after an action, not indexed.
- `site.webmanifest` and the full icon set make the site installable as a home-screen app on mobile.

## Technology partner

Every page footer credits Digidocs Official as the technology partner, with a logo, short description and link, matching the credit format Digidocs uses across its client sites.

---
Built for Heartfelt Care Foundation. Technology partner: [Digidocs Official](https://www.digidocsofficial.com).
