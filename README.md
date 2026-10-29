# W+K Finance Reporting Portal

Static site (GitHub Pages) that hosts the Wieden+Kennedy finance reports.
Each report reads its data through the Tableau Embedding API and draws itself.

## Pages
- `index.html`: portal home, with a tile for every report.
- `global-client-portfolio.html`: Global Client Portfolio.
- `office-profitability.html`: Office Profitability.
- Client Profitability, one page per client:
  - `anheuser-busch-inbev.html`
  - `eli-lilly.html`
  - `ford.html`
  - `kraft-heinz.html`
  - `mcdonalds.html`
  - `nike.html`

## Navigation and theme
- A collapsible sidebar (button at the top) lists the pages with numbered sections: 1 Global Client Portfolio,
  2 Office Profitability, 3 Client Profitability with 3.1 to 3.6 in alphabetical order. Its state is remembered.
- Light and Dark mode (button at the bottom of the sidebar), remembered in the browser; the first visit follows
  the system setting.
- The list of pages lives in one place, `assets/portal-shell.js`. To add a page, add it to `PAGES` there and,
  for a client page, to the client tiles in `index.html`.
- Shared files in `assets/`: `portal-shell.css` and `portal-shell.js` (sidebar and theme, every page),
  `report-theme.css` (Dark palette of the report pages), `styles.css` and `app.js` (home page).

## Data sources
- Global Client Portfolio and Office Profitability read `ProfitabilityPortalData/SRC_CPD_ClientOfficeMonth`
  (Tableau Cloud, site `wk`, project Finance Reporting). The workbook is an extract refreshed every 2 hours,
  6 a.m. to 8 p.m. New York time.
- The client pages read `ProfitabilityPortalData/SRC_CPD_ClientParentOfficeMonth`, a separate sheet in the same
  workbook: client x parent office x country x month, USD only, 2025 and 2026. Each page keeps only its own
  client's rows. The client total comes from the `WKI` row; office rows do not add up to it for Indirect Costs
  and Operating Profit, because those are allocated.

## Client pages
- Filters, fixed under the navigation: Year, Through month and Office (several offices can be picked).
  The comparison is always against the same months of the prior year, so the first year in the source has no
  comparison.
- Cards, the revenue trend, the profit bridge and Operating Profit by month follow the filters. The ranking,
  scatter, contribution chart, matrix and tables keep every office and highlight the picked ones.
- If Tableau needs a sign-in, a sign-in box appears at the top of the page. `?source` in the address shows the
  data source block (it sits at the top, hidden) on every report page, not only the client pages.
- The page shows the last data it read (saved in the browser) while it refreshes, and says so in the status line.

## Cloning a client page
Copy any client page and edit only the `window.CLIENT` block at the top of the script:
- `key`: the client's exact name in the data (`ReportingClient`).
- `name`: the name shown on the page.
- `brand`: dark color of the header and the cards.
- `accent`: border and strip color.
- `mark`, `dot`, `label` (optional): fill of the ranking bars, fill of the scatter dots and color of the small
  header label; each defaults to `accent`.

Then add the page to `PAGES` in `assets/portal-shell.js` and to the client tiles in `index.html`.

## Tables
The detailed P&L tables (Global Client Portfolio and Office Profitability) show about 10 rows and scroll inside the
table, with a fixed header.
