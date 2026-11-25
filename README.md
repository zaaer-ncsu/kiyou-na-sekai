# 器用な世界 — A Japanese portfolio website

A lightweight, editable website for **WLJA 401**. Written in plain **HTML, CSS, and JavaScript**. There are **no external libraries, accounts, build tools, font downloads, or trackers**.

## Open the website

Open `index.html` in any web browser. It works even without an internet connection. If you prefer, use **VS Code → Live Server**; edits to saved files will then reload automatically.

## How to edit it throughout the semester

1. **Edit an assignment:** Open its file in `pages/` (e.g. `pages/food-poem.html`) and replace the marked placeholder paragraphs. Keep the outer `<main>`, `<article>`, and navigation elements.
2. **Add a photo:** Copy your photo into `assets/images/` and insert this markup into the desired page:

   ```html
   <figure class="media-frame">
     <img src="../assets/images/my-origami.jpg" alt="折り紙の作品">
     <figcaption class="media-caption">自分で作った折り紙。</figcaption>
   </figure>
   ```

   Replace the existing `<div class="media-placeholder">…</div>` with the `<img>`; avoid keeping both. Keep photos reasonably compressed (e.g., 1400px wide JPEG/WebP, around 100–400 KB each). Write useful alt text.
3. **Edit a contents card:** In `site.js`, find its entry in `WORKS` and change the `title`, `english`, `summary`, `category`, or `glyph`. The stationary grid is generated in that order. The homepage's default moving view deliberately mixes their order; neither view shows status badges.
4. **Change colors:** Near the top of `styles.css`, edit `--red`, `--teal`, `--bg`, and other site-wide variables. The dedicated **TABLE OF CONTENTS CARDS** block near the bottom controls each card category's gradient and accent: dark red = 授業の作品, teal = 特別な経験, brighter red = 私について.
5. **Add a new page:** Duplicate an HTML file under `pages/`, rename it, edit the text, update `data-page="filename-without-html"`, and add a matching object to `WORKS` in `site.js`.
6. **For the final presentation:** Remove the visible draft-tip boxes (`<div class="draft-box">…</div>`) and replace placeholder pictures. No card status values need updating.

**Writing note:** The assignment says Japanese writing should be done individually, with drafts prepared in Google Docs. The website is a presentation framework; the final Japanese text should be yours and incorporate course feedback.

## Site structure

```text
index.html                 Home, cover, filterable table of contents
styles.css                 Full responsive design; edit theme variables here
site.js                    Shared navigation, work cards, and category filters
pages/                     One easy-to-edit HTML file per topic
  about.html               ③ Editor profile
  career.html              ④ Career feature and résumé slot (L4)
  food-poem.html           ⑤ Food poem (L5)
  onomatopoeia.html        Onomatopoeia advertisement
  origami-experience.html  体験してみて / 日本で折り紙を経験して
  favorite-words.html      ⑨ Favorite word
  past-work.html           ⑩ Older work (optional)
  free-corner.html         Embroidery corner
  afterword.html           Afterword
  reflection.html          ふりかえり
  speech.html              Extra: Duke speech contest
  award.html               Extra: second-year Japanese award
  japan.html               Extra: study abroad
assets/images/             Add your own pictures here
```

The table of contents is numbered consecutively from the current `WORKS` list in `site.js`. **Cover/title** and **contents** are part of the homepage, rather than separate pages.

## Original tentative schedule (check the latest class updates)

| Week | Section or milestone |
| --- | --- |
| 9 | 企画書１ / food poem |
| 10 | Onomatopoeia ad |
| 11 | Past works (optional) + Japanese learning history |
| 13 | Reflection + afterword |
| 14 | Original plan: opinion/letter (later replaced by reflection) |
| 15 | Layout and design finishing |
| 16 | Final presentation and publication |

Other pieces include the earlier career feature, favorite words, and editor introduction. Follow the instructor's latest updates if deadlines change.

## Table of contents filters

Each contents card follows the former Spotlight design, with the whole card clickable. The words at the bottom identify its category (授業の作品 / 特別な経験 / 私について), not a status.

- **Open the homepage normally:** no filter button is selected. One horizontal row scrolls right-to-left, mixing dark red, teal, and bright red cards. Hovering anywhere over the moving row pauses it; keyboard focus also pauses it. The sticky 一時停止 / 再生 button remains just above the moving row while that section is visible, including on touchscreens. The moving row uses the `WORKS` content, so you do not maintain duplicates.
- **Click すべて / All:** switches to the original stationary 3-column grid **in the numbered WORKS order**. Clicking Class, Highlights, or About similarly stops the movement and displays only that category, still in its numbered order. A normal visit (without a `?filter=` query) always starts with the animated view. A direct link such as `index.html?filter=highlights#works` opens in the filtered grid view.
- **Accessibility:** the repeated animation group is hidden from screen readers and the keyboard. When a visitor has reduced motion enabled in Windows or the browser, the row starts paused, with a visible ▶ 再生 control to explicitly start the animation; it never shows a horizontal scrollbar. The numbered All filter remains available as a stationary alternative.
- **Edit appearance:** the `MOVING TABLE OF CONTENTS` block at the end of `styles.css` holds animation speed (`82s` on desktop, `94s` on phones), card width, edge fade, and pause-button styles. `mixedWorks()` in `site.js` decides the moving order.

There is no separate Spotlight section or repeated favorite-words block on the homepage. The large 「強がらないで」 display is now on `pages/favorite-words.html` instead.

## Article pages

All subpages use a **single 1080-pixel-wide reading column** on desktop, with no redundant left sidebar. Their page headers, draft instructions, images, and previous/next navigation are preserved. Adjust `.article-layout` in `styles.css` if you want to make them narrower or wider. The Favorite Words page includes a prominent quotation panel at the top.

## Publish once at the end

**GitHub Pages:** Create a repository, upload the *contents of this folder* into its top level, and enable **Settings → Pages → Deploy from a branch → `main` / root**. Your site will appear at the repository's Pages URL. No framework is needed.

**Alternative:** Upload the folder to a static hosting service that accepts HTML/CSS/JS. Internal links are all relative, so it can also be hosted under a subdirectory.

**Privacy check:** Before publishing publicly, check that your résumé and photos do not expose details you would rather keep private. It is fine to omit contact details entirely.

## Design principles

- Portfolio website rather than literal magazine spreads; dark graphite and red, restrained teal accents.
- Responsive on phones and desktops.
- Text is selectable and accessible; real headings, links, keyboard controls, alt text support, reduced motion.
- No network requests or dependencies. Everything can live in a single folder.
