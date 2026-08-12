# Edit your academic homepage here

You normally only need to edit **three files** on GitHub.

## 1. Change colors, font sizes, and page width
Open **`CUSTOMIZE.css`** → click the pencil icon → change the value → **Commit changes**.

Examples:

```css
--accent: #d83bb6;       /* pink accent */
--link: #1666c1;         /* hyperlink color */
--body-size: 16px;       /* normal text */
--pub-title-size: 15px;  /* publication title */
--max: 900px;            /* page width */
```

You do **not** need to edit `styles.css` for normal visual changes.

## 2. Add or edit a publication / hyperlink
Open **`data/publications.js`**.

Each publication looks like this:

```js
{
  "number": 106,
  "year": 2026,
  "title": "Paper title",
  "authors": "Author A; Zhang, L.*; Author B",
  "venue": "Nature Communications 2026, 17, 2553.",
  "link": "https://doi.org/10.xxxx/xxxxx",
  "badge": ""
}
```

- Put the DOI or paper URL in **`link`**. The paper title becomes clickable automatically.
- Leave `link` as `""` if there is no link.
- `Zhang, L.` is bolded automatically on the webpage.
- Put `"ESI Highly Cited"` in `badge` when needed.
- The page groups papers by `year` automatically.

## 3. Edit News and citation / h-index numbers
Open **`data/home.js`**.

For a clickable news item, add its URL to `link`:

```js
{
  "date": "2026",
  "text": "Our new paper was published in Nature Communications.",
  "link": "https://doi.org/10.xxxx/xxxxx"
}
```

## Other page text
- About / biography / Education: `index.html`
- Research: `research.html`
- Academic Services: `services.html`
- Contact: `contact.html`

After every edit, click **Commit changes**. GitHub Pages will update automatically.
