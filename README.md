# BloodLink Blog

A responsive, minimalist static blog site inspired by the BloodLink app: red header, pale background, rounded cards, red accents, and green purpose panel. The official logo supplied for this project is stored at `assets/bloodlink-logo.png` and is used throughout the site.

## File tree

```text
BloodLink-Blog/
├── index.html                 # Dashboard / blog listing
├── blog.html                  # Template for every individual blog
├── css/
│   └── style.css              # All styles and responsive layout
├── js/
│   ├── config.js              # Blog posts, images, categories, report email setting
│   └── app.js                 # Search, language, side menu, share button, article rendering
├── assets/
│   └── bloodlink-logo.png     # BloodLink logo (replace this to update site logo)
└── README.md
```

## Run it

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Recommended: use the **Live Server** extension and open `index.html`.
4. Publish the folder to GitHub Pages, Netlify, or Cloudflare Pages for public access.

## Add a blog

Open `js/config.js` and add a new object inside the `blogs` array. Include a unique URL-friendly `slug`, bilingual `category`, `date`, `readMinutes`, `image`, `title`, `excerpt`, and `body.en` / `body.bn` content. The article URL is generated automatically as `blog.html?slug=your-slug`; you do not need to create another HTML file.

For local images, put the image file in `assets/` and use e.g. `image: "assets/my-donation-photo.jpg"`. Starter sample articles use remote Unsplash image URLs; replace them with images you have permission to use.

## Change the BloodLink logo

Replace `assets/bloodlink-logo.png` with your new logo, keeping the same filename. The logo is used in the top header, side menu, main hero, and About section. For best results, use a square PNG image.

## The three-line / side menu: how to edit it

The menu is the panel opened by the three-line button at the top left (sometimes described as the three-dot menu). It is shared by `index.html` and `blog.html`. Its items are:

- **Home** — takes visitors to `index.html`.
- **All blogs** — jumps to the blog list (`#latest` on the home page; `index.html#latest` from article pages).
- **About BloodLink Blog** — jumps to the About section (`#about`).
- **Language: English / বাংলা** — switches the interface language. The top-right English/বাংলা buttons do the same.
- **Report a problem** — opens an email draft using a `mailto:` link.
- **Share this website** — opens the phone/browser share sheet when supported; otherwise copies the URL or displays it in a prompt.

Menu structure and links live in the `<nav class="menu-links">` block in **both** `index.html` and `blog.html`. If you add, remove, or rename a menu item, update both files so the menu stays consistent.

### Change the link shared by “Share this website”

Open `js/app.js`, find `initMenu()`, and inside the `shareButton` click handler find:

```js
const url = location.href;
```

That shares the current page URL (so on an article page it shares that article). To always share your main website URL instead, replace it with your deployed homepage address, for example:

```js
const url = "https://your-domain.example/";
```

Replace the example with your real website URL. If you want the share button to share the current article, keep `location.href` unchanged.

### Change the “About BloodLink Blog” text

The About card is in `index.html` in the section with `id="about"`. Its text is controlled by translation keys in `js/app.js` so it can switch languages. Search for these keys in the `copy` object near the top of `js/app.js`:

```js
aboutTitle: "Small acts. Life-changing impact.",
aboutText: "BloodLink Blog shares approachable information ..."
```

Edit `aboutTitle` and `aboutText` in the **English (`en`)** section, and edit `aboutTitle` and `aboutText` in the **Bangla (`bn`)** section too. Keep the keys unchanged; only replace their text. This ensures the new About content appears in both languages.

The same translation object contains `tagline`, `heroNote`, `heading`, `intro`, `ourPurpose`, and `footerText`, so you can edit those site messages in both languages in the same way.

### Change the report email address

In both `index.html` and `blog.html`, find the `mailto:bloodlink@example.com` URL in the Report a problem link and replace `bloodlink@example.com` with your real support email. You can also update `reportEmail` in `js/config.js` to keep the configuration value consistent. `mailto:` opens the visitor's email app; it does not submit reports to a server.

## Language support

The language toggle and translation text live in `js/app.js`. Edit the `copy.en` and `copy.bn` values for interface text. For every new article, add both `body.en` and `body.bn` if you want the full article available in both languages.

## Important notes

- This is a frontend-only static site. Blog content is stored in `js/config.js`; there is no admin panel, database, authentication, or server-side report submission.
- Search runs in the browser and checks article titles, excerpts, categories, and slugs.
- Medical content is educational only. Blood donation eligibility and transfusion decisions should be confirmed with qualified healthcare professionals and local blood centres.
