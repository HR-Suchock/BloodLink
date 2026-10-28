# BloodLink Blog — Complete Owner's Manual

This README is the main guide for editing, publishing, measuring, and maintaining the BloodLink Blog website. You do not need to create a new HTML page for every article. The site is a static HTML/CSS/JavaScript project; article content is stored in `js/articles.js`; website settings are stored separately in `js/config.js`.

> **Important:** Make a backup of the current website folder before making changes. After editing, test the site locally, then upload/publish the whole project folder.

## Contents

1. [What each file does](#1-what-each-file-does)
2. [Edit the website on your computer](#2-edit-the-website-on-your-computer)
3. [Publish or update the live website](#3-publish-or-update-the-live-website)
4. [Add, edit, or remove a blog](#4-add-edit-or-remove-a-blog)
5. [Images and accessible alt text](#5-images-and-accessible-alt-text)
6. [Change the logo, colors, and page text](#6-change-the-logo-colors-and-page-text)
7. [Edit the three-line menu](#7-edit-the-three-line-menu)
8. [SEO basics and metadata](#8-seo-basics-and-metadata)
9. [Open Graph/social sharing previews](#9-open-graphsocial-sharing-previews)
10. [Sitemap and robots.txt](#10-sitemap-and-robotstxt)
11. [Google Search Console](#11-google-search-console)
12. [Google Analytics 4](#12-google-analytics-4)
13. [404 page and privacy policy](#13-404-page-and-privacy-policy)
14. [Loading states and troubleshooting](#14-loading-states-and-troubleshooting)
15. [Before every release checklist](#15-before-every-release-checklist)
16. [Useful official resources](#16-useful-official-resources)

---

## 1. What each file does

```text
BloodLink-Blog/
├── index.html       Homepage, article list, homepage SEO metadata, Analytics snippet
├── blog.html        Shared template for individual article URLs
├── 404.html         Custom not-found page (supported by GitHub Pages)
├── privacy.html     Privacy policy page
├── sitemap.xml      List of public URLs for search engines
├── robots.txt       Search crawler instructions and sitemap location
├── css/
│   └── style.css    Colors, layout, cards, mobile styling, loading indicators
├── js/
│   ├── config.js    Website settings: URL, Analytics ID, report email, language
│   ├── articles.js  All published blog articles (edit this for normal publishing)
│   └── app.js       Search, filters, menu, language, rendering, page metadata
├── assets/
│   └── bloodlink-logo.png
├── ARTICLE-TEMPLATE.js  Copy-and-paste starter template for new articles
└── README.md        This owner's manual
```

**For normal publishing, edit `js/articles.js` and use `ARTICLE-TEMPLATE.js`. Edit `js/config.js` only for website-wide settings.** Use a plain-text/code editor such as Visual Studio Code. Do not edit files in a word processor such as Microsoft Word.

## 2. Edit the website on your computer

### On a computer (recommended)

1. Download the latest project ZIP and extract it.
2. Open the extracted `BloodLink-Blog` folder in Visual Studio Code.
3. Open `ARTICLE-TEMPLATE.js` for the article template, then add the copied article object to `js/articles.js`. Open `js/config.js` only for website-wide settings.
4. Open `index.html` with the VS Code **Live Server** extension to test the website. If you open files by double-clicking them, some browser features and URL behaviour may not work as expected.
5. Check the homepage, open an article, test search, switch English/Bangla, open the menu, and check the privacy and 404 pages.

### On Android

You can edit the files with a code editor that supports HTML, CSS, and JavaScript, but managing a ZIP and publishing updates is usually easier on a computer. If you edit on Android, keep the folder structure and exact file names unchanged.

## 3. Publish or update the live website

This project currently uses URLs based on `https://suchock.github.io/`. If you use a different GitHub Pages username/repository or a custom domain, update every example URL mentioned in this guide and the files.

### Publish with GitHub Pages

1. Sign in to GitHub and create or open the repository that will host the website.
2. Upload the **contents** of the `BloodLink-Blog` folder, including `index.html`, `blog.html`, `404.html`, `privacy.html`, `sitemap.xml`, `robots.txt`, and the `css`, `js`, and `assets` folders. Do not upload only the ZIP file.
3. In the repository, open **Settings → Pages**.
4. Under the build/deployment source, select the branch you publish from (commonly `main`) and the correct folder (commonly `/(root)`), then save.
5. Wait for GitHub Pages to finish deploying. Open the public URL shown in Settings → Pages.
6. Test the homepage and a direct article URL on the live domain.

For a project repository such as `username.github.io/repository-name/`, the public URL may include `/repository-name/`. In that case, paths and canonical URLs must match the actual deployed location. A custom domain needs additional setup in GitHub Pages and DNS.

### Update an already-published site

1. Edit the local files.
2. Test them.
3. Upload/commit the changed files to the same repository and branch.
4. Wait for deployment and hard-refresh the website.
5. Test the live version, not just the local version.

**Never assume an update is live just because you saved a local file.**

## 4. Add, edit, or remove a blog

Open `ARTICLE-TEMPLATE.js` to get a ready-made article structure. Published article objects live in the `window.BLOODLINK_BLOGS` array inside `js/articles.js`.

### Add a blog

Copy the object from `ARTICLE-TEMPLATE.js`, paste it inside the `window.BLOODLINK_BLOGS` array in `js/articles.js`, and change all of its values. Make sure objects are separated with commas. Keep the final object's trailing comma valid JavaScript (modern browsers accept it).

Example structure:

```js
{
  slug: "healthy-donation-preparation",
  category: { en: "Donor Guide", bn: "রক্তদানের নির্দেশিকা" },
  date: "2026-10-26",
  readMinutes: 5,
  image: "assets/donation-preparation.jpg",
  imageAlt: {
    en: "A blood donation worker preparing equipment",
    bn: "রক্তদানের সরঞ্জাম প্রস্তুত করছেন একজন কর্মী"
  },
  title: {
    en: "How to Prepare for Blood Donation",
    bn: "রক্তদানের জন্য কীভাবে প্রস্তুতি নেবেন"
  },
  excerpt: {
    en: "Practical steps to discuss with your donation centre before donating.",
    bn: "রক্তদানের আগে কেন্দ্রের সঙ্গে আলোচনা করার কিছু ব্যবহারিক বিষয়।"
  },
  metaDescription: {
    en: "Learn practical ways to prepare for blood donation and what to confirm with your local donation centre.",
    bn: "রক্তদানের প্রস্তুতি এবং স্থানীয় রক্তদান কেন্দ্রের সঙ্গে কী নিশ্চিত করবেন তা জানুন।"
  },
  ogImage: "https://YOUR-SITE-URL/assets/donation-preparation.jpg",
  body: {
    en: [
      {
        heading: "Before your appointment",
        paragraphs: [
          "Write your first paragraph here.",
          "Write another paragraph here."
        ]
      },
      {
        heading: "Ask the donation centre",
        bullets: [
          "Confirm the current eligibility requirements.",
          "Follow the instructions provided by qualified staff."
        ]
      },
      {
        callout: "Eligibility and clinical advice must be confirmed with qualified healthcare professionals."
      }
    ],
    bn: [
      {
        heading: "অ্যাপয়েন্টমেন্টের আগে",
        paragraphs: [
          "এখানে প্রথম বাংলা অনুচ্ছেদ লিখুন।",
          "এখানে দ্বিতীয় বাংলা অনুচ্ছেদ লিখুন।"
        ]
      },
      {
        heading: "রক্তদান কেন্দ্রকে জিজ্ঞাসা করুন",
        bullets: [
          "বর্তমান যোগ্যতার নিয়ম নিশ্চিত করুন।",
          "যোগ্য স্বাস্থ্যকর্মীদের নির্দেশনা অনুসরণ করুন।"
        ]
      },
      {
        callout: "রক্তদানের যোগ্যতা ও চিকিৎসাসংক্রান্ত পরামর্শ যোগ্য স্বাস্থ্যকর্মীর কাছ থেকে নিশ্চিত করুন।"
      }
    ]
  }
}
```

This is a template example; replace the example URL, image, content, and date with your real details.

### Rules for article fields

- `slug`: unique, lowercase, URL-friendly text with hyphens. Do not reuse a slug. Example: `healthy-donation-preparation`.
- `category`: add English and Bangla labels.
- `date`: use `YYYY-MM-DD`.
- `readMinutes`: estimated reading time in minutes.
- `image`: image path or image URL.
- `imageAlt`: describe the meaningful content of the image in English and Bangla. Do not stuff it with keywords.
- `title`, `excerpt`: write both English and Bangla versions.
- `metaDescription`: recommended for each article. Write a clear, unique summary; it is a search-result description suggestion, not a guaranteed snippet.
- `ogImage`: an optional **Open Graph image** used as the preview picture when someone shares an article link in apps such as Facebook, Messenger, WhatsApp, or other social platforms. It is not the article's main image itself; it tells link-preview crawlers which image to show. Use a full public HTTPS URL, for example `https://your-real-domain.com/assets/donation-preparation.jpg`. The image must load without signing in. A wide image around 1200 × 630 pixels is a useful general choice. If you leave `ogImage` empty, this website falls back to the article's `image`, then to the site's default image. `ogImage` is optional for the site to work, but recommended if you want a deliberate, attractive share preview. Social apps may cache previews, and some crawlers may not read JavaScript-generated article metadata; see Section 9 for the limitation and testing advice.
- `body.en` and `body.bn`: article content for both languages. Supported block types include `heading` + `paragraphs`, `heading` + `bullets`, and `callout`.

### Article URL — how it works, and where to change your website address

Each article uses the same `blog.html` template. The article is identified by its unique `slug`, so the URL looks like this:

`https://YOUR-SITE-URL/blog.html?slug=healthy-donation-preparation`

You **do not** make a separate HTML file for every article, and you **do not** need to change the URL inside every article object.

#### Set the base website URL in one place

1. Open `js/config.js`.
2. Find this line:

   ```js
   siteUrl: "https://suchock.github.io",
   ```
3. Replace only the URL inside the quotes with your real public website's base URL, then save.

Examples:

- If your site opens at `https://suchock.github.io/`, use `siteUrl: "https://suchock.github.io"`.
- If it opens at `https://suchock.github.io/bloodlink-blog/`, use `siteUrl: "https://suchock.github.io/bloodlink-blog"` (include the repository subpath).
- If you use a custom domain such as `https://blog.example.com/`, use `siteUrl: "https://blog.example.com"`.

Do not add `blog.html` or a slug to `siteUrl`; it should be the base address only, without a trailing slash. The app uses this setting to build the absolute article canonical URL and metadata URL. The links between the homepage and articles are relative links, so you don't have to edit each card or article when the domain changes.

#### What still needs updating after a domain or repository-path change?

Some files are static and cannot automatically update themselves from `config.js`. After changing your public address, update these **one-time website-wide settings**:

- `sitemap.xml`: change the domain/path in every `<loc>` URL.
- `robots.txt`: change the `Sitemap:` URL.
- `index.html`, `blog.html`, `privacy.html`, and `404.html`: update their default canonical/Open Graph URLs and any absolute asset URLs if present.
- Google Search Console: verify the correct public property and submit the sitemap again if needed.
- Google Analytics: confirm the web data stream website URL is correct.

You do **not** have to edit these files every time you publish a new article. Only update the sitemap when adding/removing article URLs, and update static metadata when the site's base address changes.

#### Example of a final article URL

If your site base is `https://suchock.github.io` and the article slug is `healthy-donation-preparation`, the URL is:

`https://suchock.github.io/blog.html?slug=healthy-donation-preparation`

If your site is published in a repository subfolder, include that folder in the base URL. Always copy the real address from the browser after the site is deployed and test it in a private/incognito tab.

### Edit a blog

Find the object with the matching `slug` in `js/articles.js`, then change its title, excerpt, date, image, metadata, or body. Keep the slug the same if you want to preserve its existing link.

### Remove a blog

Remove that article object from the `blogs` array, taking care not to delete a comma or bracket that belongs to another article. Then remove its URL from `sitemap.xml` if that URL is listed there. If the article was already indexed or shared, consider leaving a useful replacement page or redirect if your hosting setup supports it.

### Health information quality

Blood donation eligibility and medical decisions vary by person and location. Use reputable sources, cite them in articles where appropriate, and have medical claims checked by qualified healthcare professionals. The blog is educational and must not replace professional medical advice.

### Easier publishing: use the article template file

You do not need to write the HTML for each article. Follow this routine every time:

1. Open `ARTICLE-TEMPLATE.js` in a code editor.
2. Copy the complete object between the outer `{` and `}` (do not copy the explanatory comment at the top).
3. Open `js/articles.js` and find the `window.BLOODLINK_BLOGS = [` list.
4. Paste the copied object before the final closing `];`. Add a comma after the previous article object if it does not already have one.
5. Replace the sample `slug`, title, category, date, image, alt text, excerpt, metadata, and article body in both English and Bangla.
6. Save the file, preview the homepage, search for a phrase from the new article, and open its article link.
7. Add its URL to `sitemap.xml`, then upload all changed files to GitHub.

**Important:** `ARTICLE-TEMPLATE.js` is a starter template, not a published article and not a file that the website loads. The live website automatically displays objects added to `js/articles.js`. This is how a static GitHub Pages site works without a server or database.

You can use these block types in `body.en` and `body.bn`:

```js
{ heading: "Section heading", paragraphs: ["Paragraph one.", "Paragraph two."] }
{ heading: "Key points", bullets: ["First point", "Second point"] }
{ callout: "Important highlighted note." }
```

Use a unique slug such as `how-to-help-a-donor`. Do not use spaces, uppercase letters, or reuse another article's slug. Put the image file in `assets/` and make sure the image path and alt text are correct.

## 5. Images and accessible alt text

### Add an image

1. Put your image in `assets/`, for example `assets/donation-preparation.jpg`.
2. In the article object, set `image: "assets/donation-preparation.jpg"`.
3. Add meaningful `imageAlt.en` and `imageAlt.bn` text.
4. Check that the image loads on the live site.

Use images you own or have permission to publish. Compress large images before uploading so the mobile site loads faster. Use descriptive file names such as `blood-donation-centre.jpg`, not `IMG_001.jpg`.

### What makes good alt text?

Alt text should explain the meaningful information in the image, especially for visitors using screen readers or when an image fails to load.

Good: `alt: "A healthcare worker preparing a blood donation kit"`

Avoid: `alt: "blood donation blood donor best blood donation Bangladesh BloodLink"`.

Decorative images should use empty alt text (`alt=""`) when appropriate. Logos should have concise alt text such as `BloodLink logo`. When adding a new image directly to HTML, include an `alt` attribute.

## 6. Change the logo, colors, and page text

### Change the logo

Replace `assets/bloodlink-logo.png` with your new square PNG, keeping the same file name. Check that the logo still looks clear in the header and on mobile.

### Change theme colors and layout

Open `css/style.css`. Search for the existing red color (commonly `#c90012`) and change it carefully wherever it appears. The stylesheet controls the header, buttons, cards, borders, spacing, typography, responsive layout, and loading indicators. Make a backup before changing many values.

### Change homepage text and translations

Open `js/app.js` and find the `copy` object. The `en` section contains English interface text; the `bn` section contains Bangla text. Edit the values, but keep each property/key name unchanged. For example, edit `heading`, `intro`, `heroNote`, `aboutTitle`, `aboutText`, and `footerText` in both language sections.

### Change the website's main settings

Open `js/config.js`. Current settings include:

```js
siteName: "BloodLink Blog",
siteUrl: "https://suchock.github.io",
ogImage: "https://suchock.github.io/assets/bloodlink-logo.png",
googleAnalyticsId: "G-XXXXXXXXXX",
reportEmail: "bloodlink@example.com",
defaultLanguage: "en",
```

Change these to the real deployed website URL, public share image, Google Analytics Measurement ID, and support email. Keep the quotes and commas. The Analytics ID is also written directly in the HTML pages in this version, so follow Section 12 and update each page as described there.

### What are `siteUrl` and `ogImage`?

- **`siteUrl`** is the base public address of your website. Set it once in `js/config.js`. The code uses it to construct canonical and article metadata URLs. Do not put a particular article's slug in this setting.
- **`ogImage`** is the default image used for social link previews when sharing the homepage or an article without its own `ogImage`. It should be a public, absolute HTTPS URL. It does not create or upload the image: you must put the image in `assets/` and point to its public URL. For an article-specific preview, set `ogImage` on that article in `js/articles.js`. If omitted/empty, the article image is used as a fallback.

You normally change `siteUrl` only if the website's domain or repository path changes, not when adding an article. For every new article, give it a unique `slug`; the URL is built automatically from the base URL and that slug. The sitemap is a separate static file, however, so add the new article URL to `sitemap.xml` as explained in Section 10.

## 7. Edit the three-line menu

The menu is the panel opened by the three-line button at the top left. The links appear in both `index.html` and `blog.html`.

- **Home:** takes visitors to the homepage.
- **All blogs:** goes to the article list.
- **About BloodLink Blog:** goes to the About section on the homepage.
- **Language:** switches between English and Bangla.
- **Report a problem:** opens the visitor's email app.
- **Share this website:** opens the browser/device share sheet where supported; otherwise, it uses the site's fallback behaviour.

### Change the Share link

Open `js/app.js`, find `initMenu()` and the share button handler. If you see:

```js
const url = location.href;
```

the current page URL is shared. To always share the homepage, use:

```js
const url = "https://YOUR-REAL-DOMAIN/";
```

Use your real deployed homepage URL, including any repository subpath if applicable. Keep `location.href` if sharing the current article URL is preferred.

### Change the About BloodLink Blog text

In `js/app.js`, edit `aboutTitle` and `aboutText` in both `copy.en` and `copy.bn`. The About section's layout is in `index.html`; its styling is in `css/style.css`. If you want to remove the entire About section, remove its HTML section and any menu/footer links that point to it.

### Change the report email

Replace the placeholder `bloodlink@example.com` with your real support address in the Report a problem link in **both** `index.html` and `blog.html`. Also set `reportEmail` in `js/config.js` to the same address if the application uses that setting. A `mailto:` link only opens an email draft; it does not deliver or store a report automatically.

### Add/remove menu links

Edit the `<nav class="menu-links">` block in both `index.html` and `blog.html`. Update both copies to keep the menu consistent. Check that every link points to an existing page or section.

## 8. SEO basics and metadata

SEO helps search engines understand your pages; it cannot guarantee ranking or indexing.

### What is already included?

- A page title and meta description in the HTML.
- Canonical URL on pages where configured.
- Open Graph and Twitter card metadata on the homepage and static pages.
- Article-specific metadata updated by the JavaScript article renderer.
- `sitemap.xml` and `robots.txt`.
- A custom `404.html`.

### Homepage metadata

Open `index.html`. In the `<head>` section, edit:

```html
<title>BloodLink Blog | Donate Blood, Save Lives</title>
<meta name="description" content="A clear, accurate summary of the homepage.">
<link rel="canonical" href="https://YOUR-REAL-DOMAIN/">
```

Use a unique title and natural summary that accurately describe the page. Do not repeat keywords unnaturally. The canonical URL should be the preferred public URL, not a local `file:///` path or preview URL.

### Article metadata

For each article, add `metaDescription.en` and `metaDescription.bn` in its object in `js/articles.js`. Also add `ogImage` if you want a particular social preview image. The article renderer sets metadata in the browser for the selected article.

**Important technical limitation:** Because all article URLs share `blog.html` and article metadata is set by JavaScript after page load, some search/social crawlers may only see the generic initial `blog.html` metadata. If you need reliably unique metadata for every article in every crawler, use a build process that generates a separate static HTML file per article or move to a server-rendered/static-site generator setup. Search Console URL inspection can help you see what Google can render, but it does not guarantee that every crawler behaves the same way.

### Canonical URL

A canonical tag tells search engines which URL is the preferred version of a page. Keep it accurate. If you change domain or move the website into a repository subfolder, update canonical URLs accordingly. Avoid accidentally making all article pages canonical to the homepage.

### Content practices that help

- Give each article a specific, useful title.
- Write original, genuinely helpful content.
- Use descriptive headings and short paragraphs.
- Link related articles to one another.
- Use relevant image alt text.
- Make the site work well on mobile and load quickly.
- Correct factual errors and update outdated content.
- Do not buy links, copy articles, or stuff keywords.
- Search engines decide whether and how to index pages; a sitemap is a discovery hint, not a guarantee.

## 9. Open Graph/social sharing previews

Open Graph metadata helps apps such as Facebook and Messenger create a preview with a title, description, and image when a URL is shared. The Twitter/X card metadata serves a similar purpose.

### Choose an image

1. Create a clean BloodLink-branded preview image. A wide image around **1200 × 630 pixels** is a useful general target.
2. Upload it to a public location, for example `assets/bloodlink-social.jpg`.
3. Use the full absolute HTTPS URL in the metadata, for example `https://YOUR-REAL-DOMAIN/assets/bloodlink-social.jpg`.
4. Upload the image to `assets/` and set `ogImage` in `js/config.js` to its full public HTTPS URL. Update the default `og:image` / `twitter:image` tags in the static HTML files as well, so they have a good fallback before JavaScript runs.
5. For individual articles, set that article's `ogImage` in `js/articles.js`. This is optional: when empty, the article's main `image` is used as the fallback.

The image must be publicly accessible without login. A local computer path will not work for visitors or crawlers. Some social platforms cache previews, so changes may take time to appear.

### Test a share preview

After publishing, share the real public URL in a private test message or use the platform's current official preview/debug tool if available. Test the homepage and article URL separately. If the article preview still shows the generic page metadata, that is the JavaScript-rendering limitation described above; use generated per-article HTML for the most reliable result.

## 10. Sitemap and robots.txt

### What does a sitemap do?

`sitemap.xml` lists the canonical public URLs you want search engines to discover. It does not force search engines to index them.

The current sitemap includes the homepage, privacy page, and the three starter article URLs. **Whenever you add or remove an article, update `sitemap.xml` manually** in this version.

### Add a URL to `sitemap.xml`

Open `sitemap.xml`. Copy a `<url>...</url>` entry and update the `<loc>` value to the exact public URL. For example:

```xml
<url>
  <loc>https://YOUR-REAL-DOMAIN/blog.html?slug=healthy-donation-preparation</loc>
</url>
```

Place the entry inside `<urlset>`. Use the exact live domain and any repository subpath. Do not put example URLs or local URLs in the live sitemap. Remove entries for permanently deleted pages. Save the file as UTF-8 XML and check that tags are properly closed.

If you add a custom domain or change the hosting path, update **every** `<loc>` entry. The homepage and privacy policy should also be listed. Do not add search-result pages, test pages, or URLs that return errors.

### What does `robots.txt` do?

The current `robots.txt` allows crawlers and points to the sitemap. Its sitemap line must match the actual public sitemap URL, for example:

```text
User-agent: *
Allow: /
Sitemap: https://YOUR-REAL-DOMAIN/sitemap.xml
```

Do not use `robots.txt` to hide private information. A disallow rule is not access control. Do not block CSS or JavaScript files that search engines need to render the site.

### Submit the sitemap

After publishing, open Google Search Console (Section 11), choose your property, select **Sitemaps**, enter `sitemap.xml` (or the full URL if requested), and submit. Check the status later for errors. Re-submit after major URL changes if needed.

## 11. Google Search Console

Search Console is free and helps you monitor Google Search discovery, indexing, and search performance. It is different from Google Analytics.

1. Open the official Google Search Console website: https://search.google.com/search-console/
2. Sign in with the Google account you want to use to manage the site.
3. Choose the property type:
   - **URL prefix** is often simpler for a GitHub Pages URL.
   - **Domain** property covers a whole domain and usually requires DNS verification; use it if you control the domain and can change its DNS records.
4. Enter the exact public website URL, including `https://` and any repository subpath where applicable.
5. Follow Google's verification instructions. Use the method available for your property. If using an HTML verification file, upload it to the exact published root Google specifies and keep it there. If using a meta tag, put the exact supplied tag in the homepage `<head>`. Do not invent a verification code.
6. After verification, open **Sitemaps**, submit your sitemap, and check its status.
7. Use **URL Inspection** to test the homepage and important article URLs. Request indexing when offered, but remember Google decides when or whether to index.
8. Check **Pages/Indexing** for errors, **Core Web Vitals** when data is available, and **Performance → Search results** for impressions, clicks, search queries, and average position.
9. Revisit periodically. A new site may take time to appear in Google.

If verification fails, check that the property URL exactly matches the deployed URL and that the verification file/tag is actually live. GitHub Pages does not require a special sitemap plugin; the `sitemap.xml` file is served as a normal static file.

Official help: https://support.google.com/webmasters/

## 12. Google Analytics 4

Google Analytics (GA4) measures website usage, such as visits and page views. **The code currently contains a placeholder ID (`G-XXXXXXXXXX`), so real tracking will not work until you replace it with your own Measurement ID.** Do not use someone else's Analytics ID.

### A. Create an Analytics account and property

1. Open https://analytics.google.com/.
2. Sign in with the Google account that should own the site's analytics.
3. Open **Admin** (gear icon).
4. If you do not have an Analytics account, create one and follow the setup prompts.
5. Create a GA4 property named something like `BloodLink Blog`. Select the reporting time zone and currency appropriate for your reporting needs.
6. Create a **Web** data stream.
7. Enter your real website URL, such as `https://YOUR-REAL-DOMAIN/`, and name the stream `BloodLink Blog`.
8. Finish setup and open the web data stream details.
9. Copy the **Measurement ID**. It looks like `G-ABC123DE45`. This ID is not a password, but only use the ID from your own property.

Google's setup instructions can change: https://support.google.com/analytics/

### B. Add the Measurement ID to this project

This version has the GA snippet directly in these four HTML files:

- `index.html`
- `blog.html`
- `404.html`
- `privacy.html`

In each file, search for `G-XXXXXXXXXX` and replace **every occurrence** with your actual ID. Each file normally has the ID in both the script URL and the `gtag('config', ...)` call. Both must match. Do not paste your entire Google account details; only replace the placeholder ID.

Also open `js/config.js` and change:

```js
googleAnalyticsId: "G-XXXXXXXXXX",
```

to your same real ID. Keep the value in all locations consistent. Save all files and publish the changes.

### C. Test Analytics

1. Open the public website in a new browser tab.
2. Accept or configure any consent choice if you have added a consent tool; do not assume consent handling is automatically included by this starter site.
3. In Analytics, open **Reports → Realtime**.
4. Visit the homepage and an article page. It may take a short while for activity to appear.
5. If no visit appears, check that the ID was replaced in all four files, the live deployment finished, your browser is not blocking Analytics, and the URL matches the configured web stream.
6. Use the browser developer tools/network panel on a computer if you are comfortable doing so, or follow Google's troubleshooting help.

Analytics data can be delayed and may be affected by ad blockers, privacy settings, consent requirements, and browser restrictions. Do not use a single missing realtime visit as proof that all tracking is broken.

### D. Understand the reports

- **Realtime:** activity happening recently.
- **Reports / Acquisition:** how visitors found the site, when those reports are available.
- **Engagement:** pages and screens, events, and engagement metrics.
- **Landing pages:** which pages visitors enter through, when available.
- **Events:** interactions GA4 records. The starter integration mainly provides standard page-view tracking; custom events for searches, language switching, and share clicks are not configured automatically.

Analytics shows aggregated usage, not a list of every visitor's identity. Do not attempt to collect unnecessary personal or sensitive information.

### E. Privacy and consent responsibilities

Before enabling Analytics for the public, review applicable privacy and cookie requirements for your visitors and hosting context. Update `privacy.html` to accurately explain the analytics provider, the information collected, purposes, retention/settings where relevant, and contact details. If your legal obligations or audience require consent before non-essential analytics, implement a suitable consent mechanism and ensure Analytics does not run before consent where required. This starter site does **not** include a full consent-management platform or legal review.

Never claim the site does not use analytics after you have enabled GA4. Keep the privacy policy aligned with the actual implementation.

## 13. 404 page and privacy policy

### Custom 404 page and offline mini-games

`404.html` is the themed error page for visitors who request a page that does not exist. GitHub Pages serves a root `404.html` for missing pages. Test it after publishing by opening a made-up path such as `https://YOUR-REAL-DOMAIN/this-page-should-not-exist`. Some local preview servers may show their own error page instead.

The 404 page also includes two small games that run locally in the browser without game libraries or network requests:

- **Blood Drop Catch:** tap/click the falling blood drops before the timer ends. Use Start/Restart to play again.
- **Blood Group Memory:** flip cards and find matching blood-group symbols. Match all pairs to finish.

The game code and styles are inside `404.html`, so you do not need to install anything or upload additional game files. The games are for entertainment only and do not provide medical advice. Test the games on both mobile and desktop after publishing.

### Privacy policy

Open `privacy.html` to edit the policy. Update the website name, support contact, analytics description, and any statements about cookies or collected information so they match the actual site. If you add forms, comments, accounts, advertising, embedded videos, or other third-party services later, update the policy accordingly.

A starter privacy page is not legal advice and may not satisfy every legal requirement. Review it for the countries and audience your website serves.

## 14. Loading states and troubleshooting

### Loading states

The article renderer includes a loading status while content is prepared. Test with a normal article and a slug that does not exist. A missing article should show a not-found message rather than an endless spinner.

### Search bar behavior

The search field filters articles as the visitor types. It searches article titles, summaries, categories, slugs, metadata, and article text in both languages. The × button clears the query; on a keyboard, Escape clears it too. If search results seem wrong, check that the article text is present in `js/articles.js`, then refresh the published page after deployment.

### Common issues

**Article is missing from the homepage**
- Check that its object is inside `window.BLOODLINK_BLOGS` in `js/articles.js`.
- Check commas, quotes, braces, and brackets.
- Check that the browser console has no JavaScript errors.

**Article link opens “Article not found”**
- Ensure the URL slug matches the article's `slug` exactly.
- Check that both `js/config.js` and `js/articles.js` load and the URL uses the correct deployment path.

**Image is broken**
- Check the spelling and capitalization of the filename.
- Confirm the file is uploaded to `assets/`.
- Check the full URL for remote images and confirm they are publicly accessible.

**English/Bangla text does not change**
- Check that both language values exist.
- Keep translation keys unchanged in `js/app.js`.
- Check that the language buttons and JavaScript load.

**Website works locally but not on GitHub Pages**
- Check that every referenced file was uploaded.
- File and folder names are case-sensitive on hosting.
- Check whether the repository uses a subpath.
- Confirm the latest deployment succeeded.

**Google does not show the website yet**
- Verify the site in Search Console.
- Submit `sitemap.xml`.
- Check URL Inspection and indexing reports.
- Ensure pages are public and not accidentally blocked.
- Wait; indexing is not instant or guaranteed.

**Analytics shows no visitors**
- Replace the placeholder ID in all four HTML pages and `js/config.js`.
- Confirm you are checking the matching GA4 property.
- Check privacy/consent settings, browser blockers, and the deployed source.

### Brand size and search-bar design

The homepage hero logo and title are intentionally smaller on mobile, with reduced vertical spacing. The search bar is a single clean white field with a simple red magnifier, focus styling, and a clear button. These refinements live at the end of `css/style.css`; keep the final override block when editing the stylesheet. The search JavaScript in `js/app.js` searches article bodies as well as titles and summaries.

## 15. Before every release checklist

Use this list before publishing a change:

- [ ] I made a backup or can restore the previous version.
- [ ] Homepage works on mobile and desktop.
- [ ] All article links open the correct article.
- [ ] Search, categories, menu, sharing, and language toggle work.
- [ ] New images load and have useful alt text.
- [ ] Article titles, dates, English/Bangla content, and meta descriptions are correct.
- [ ] The canonical and social preview URLs use the real public domain.
- [ ] `sitemap.xml` includes new public articles and excludes removed ones.
- [ ] `robots.txt` points to the correct sitemap URL.
- [ ] Google Analytics ID is correct and consistent across the four HTML files and `js/config.js`.
- [ ] Privacy policy reflects the actual analytics and data practices.
- [ ] The custom 404 page works on the deployed host.
- [ ] Changes are uploaded and the live website has been tested.

## 16. Useful official resources

- Google Analytics: https://analytics.google.com/
- Analytics Help: https://support.google.com/analytics/
- Google Search Console: https://search.google.com/search-console/
- Search Console Help: https://support.google.com/webmasters/
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Sitemaps overview: https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- Robots.txt overview: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Open Graph protocol: https://ogp.me/
- GitHub Pages documentation: https://docs.github.com/pages

---

**Owner's rule:** If you change the public domain, update `siteUrl` and `ogImage` in `js/config.js`, the canonical and social metadata in the HTML files, every URL in `sitemap.xml`, the sitemap address in `robots.txt`, and the URL configured in Google Analytics/Search Console.


## 17. 404 page: styling, logo, links, and mini-games

The `404.html` page is now **self-contained**: its layout and game styles are written inside that file, so it does not rely on `css/style.css` loading correctly. The BloodLink logo is embedded directly in the HTML as an image data URL, preventing a broken logo path on the error page. The page links back to the homepage and to `privacy.html`; the two mini-games run locally in the browser and do not need an external game library.

### If your GitHub Pages site is at the domain root

For a site like `https://suchock.github.io/`, leave this setting in `404.html` as:

```js
const SITE_BASE_PATH = '';
```

### If your site is in a repository subfolder

For a project URL like `https://username.github.io/my-blog/`, set it to the repository path (include the leading slash, but not a trailing slash):

```js
const SITE_BASE_PATH = '/my-blog';
```

This setting updates the 404 page's Home links. The rest of the site's pages and metadata should also use the correct project path if you publish under a repository subfolder.

### Test the page after publishing

1. Confirm `404.html` is in the same published root as `index.html`.
2. Open a deliberately nonexistent URL on the live site.
3. Confirm the red header, logo, background, cards, and footer are styled even if `css/style.css` is unavailable.
4. Click **Back to BloodLink Blog** and **Privacy Policy** to check the links.
5. Start Blood Drop Catch and tap the drop; restart Blood Group Memory and match the pairs.
6. On a computer, inspect the main document's HTTP status in DevTools → Network. A proper not-found response should normally return status `404`.

If the logo is changed in the main site later, replace the embedded image in `404.html` too, or ask for the 404 page to be regenerated with the new logo.


## 404 mini-game: BloodLink Rescue Rush

The first game on `404.html` is now **BloodLink Rescue Rush**, replacing the simple tap-the-drop game. Start a 30-second round, move the BloodLink basket left/right using the arrow keys or on-screen controls, catch red blood drops (+10 points), and avoid green germs (lose one of three lives). The game is drawn on a local HTML canvas and uses no external libraries or network requests. The second Blood Group Memory game remains available.

To adjust the game, edit the first game markup, the `.rescue-*` CSS rules, or the `BloodLink Rescue Rush` JavaScript section inside `404.html`. Keep the element IDs consistent (`rescue-start`, `rescue-canvas`, `rescue-status`, `rescue-left`, `rescue-right`, and `rescue-arena`). After changes, test on both a phone and a computer.


### 404 mini-game titles look blank or have low contrast

The game title bars in `404.html` use white text on the BloodLink red background. Keep `.game-card h3` text color as `#fff` and its background as `#c90012`. Avoid adding a later `.game-card h3` rule that changes the text to red, because it will override the contrast styling. On mobile, the heading margin is adjusted to match the card's smaller padding.


## 17. Fixing 404 page navigation (Back, Home, and Privacy Policy)

The 404 page uses three different navigation behaviours:

- **Back arrow (←):** returns to the previous page when the visitor arrived from the same website. If the visitor opened the 404 page directly, the arrow falls back to the homepage.
- **Home:** always opens the BloodLink Blog homepage.
- **Back to BloodLink Blog:** also opens the homepage.
- **Privacy Policy:** opens `privacy.html`.

### Why links can fail on GitHub Pages

A URL beginning with `/`, such as `/index.html`, points to the domain root. That works for a user site such as `https://suchock.github.io/`, but a project site hosted under `https://username.github.io/repository-name/` needs the repository prefix. The updated `404.html` rewrites the links to include the base path. It recognises `suchock.github.io` as a root site and attempts to detect the first path segment for other GitHub Pages project sites.

### If your website is published in a subfolder

Open `404.html` and find this line in its navigation script:

```js
const MANUAL_BASE_PATH = '';
```

For a project URL like `https://username.github.io/BloodLink-Blog/`, change it to:

```js
const MANUAL_BASE_PATH = '/BloodLink-Blog';
```

Use the exact repository path, with no trailing slash. For `https://suchock.github.io/`, leave it empty (`''`). Then commit the updated `404.html`.

### Test all four links after publishing

1. Open a fake URL on your live site so the 404 page appears.
2. Click **Home** and **Back to BloodLink Blog**; both should open the homepage.
3. Click **Privacy Policy** in the footer; it should open `privacy.html`.
4. Open the fake URL by clicking a broken link from within your site, then click the arrow; it should return to the previous same-site page. If you type the fake URL directly, the arrow should take you to the homepage.
5. If a link still fails, check the deployed URL and `MANUAL_BASE_PATH`, and confirm `index.html` and `privacy.html` exist in the published root.
