# 03. Reports

Every finance report lives in one of three places: **Tableau Online**, **Google Sites** (which embeds Tableau Online views), or **GitHub** (a portal that draws its own pages from Tableau data). All of them read the FinanceDataMart datasource described in `01-datasources.md`.

## Tableau Online

Site `wk`, project **Finance Reporting**: https://prod-useast-a.online.tableau.com/#/site/wk/

| Workbook | Views | Purpose |
|---|---|---|
| [Global Client Portfolio](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/4160005) (`GlobalClientPortfolioNewDataSourceCPD`) | [Overview](https://prod-useast-a.online.tableau.com/#/site/wk/views/GlobalClientPortfolioNewDataSourceCPD/Overview), [Office Profitability](https://prod-useast-a.online.tableau.com/#/site/wk/views/GlobalClientPortfolioNewDataSourceCPD/OfficeProfitability) | Company-wide client profitability and profitability by office |
| [Client Profitability Dashboard](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/4124852) (`ClientProfitabilityDashboardNewDataSourceCPD`) | [Anheuser-Busch InBev](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboardNewDataSourceCPD/ABInBev) (`ABInBev`), [Eli Lilly](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboardNewDataSourceCPD/EliLilly), [Ford](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboardNewDataSourceCPD/Ford), [Kraft Heinz](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboardNewDataSourceCPD/KraftHeinz), [McDonald's](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboardNewDataSourceCPD/McDonalds), [Nike](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboardNewDataSourceCPD/Nike) | One branded profitability view per client |
| [Financial Performance](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/3907761) (`FinancialPerformance`) | [Overview](https://prod-useast-a.online.tableau.com/#/site/wk/views/FinancialPerformance/Overview) | General ledger account view, shown in Google Sites as General Ledger Account Analysis |
| [Profitability Portal Data](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/4356392) (`ProfitabilityPortalData`) | [`SRC_CPD_ClientOfficeMonth`](https://prod-useast-a.online.tableau.com/#/site/wk/views/ProfitabilityPortalData/SRC_CPD_ClientOfficeMonth), [`SRC_CPD_ClientParentOfficeMonth`](https://prod-useast-a.online.tableau.com/#/site/wk/views/ProfitabilityPortalData/SRC_CPD_ClientParentOfficeMonth) | Data feed for the GitHub portal. Not a report for readers. |

**Validation and test workbooks.** Not reports for readers.

| Workbook | Views | Purpose |
|---|---|---|
| [Financial Data Validation](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/3982433) (`FinancialDataValidation`) | [`Hoja 1`](https://prod-useast-a.online.tableau.com/#/site/wk/views/FinancialDataValidation/Hoja1) | Validation of the data |
| [TEST Embedding API Data](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/4299212) (`TESTEmbeddingAPIData`) | [`Data_ClientSummary`](https://prod-useast-a.online.tableau.com/#/site/wk/views/TESTEmbeddingAPIData/Data_ClientSummary), [`Data_MonthlyPL`](https://prod-useast-a.online.tableau.com/#/site/wk/views/TESTEmbeddingAPIData/Data_MonthlyPL), [`SRC_CPD_ClientOfficeMonth`](https://prod-useast-a.online.tableau.com/#/site/wk/views/TESTEmbeddingAPIData/SRC_CPD_ClientOfficeMonth) | Tests of the Embedding API. The portal pages read the copy of `SRC_CPD_ClientOfficeMonth` in Profitability Portal Data, not this one. |

**Earlier versions.** Do not embed these; use the workbooks above.

| Workbook | Views |
|---|---|
| [Global Client Portfolio](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/3814619) (`GlobalClientPortfolio`) | [Overview](https://prod-useast-a.online.tableau.com/#/site/wk/views/GlobalClientPortfolio/Overview), [Office Profitability](https://prod-useast-a.online.tableau.com/#/site/wk/views/GlobalClientPortfolio/OfficeProfitability) |
| [Client Profitability Dashboard](https://prod-useast-a.online.tableau.com/#/site/wk/workbooks/3513707) (`ClientProfitabilityDashboard`) | [Anheuser-Busch InBev](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboard/Anheuser-BuschInBev), [Eli Lilly](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboard/ProfitabilityEliLilly), [Ford](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboard/ProfitabilityFord), [Kraft Heinz](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboard/KraftHeinz), [McDonald's](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboard/ProfitabilityMcDonalds), [Nike](https://prod-useast-a.online.tableau.com/#/site/wk/views/ClientProfitabilityDashboard/ProfitabilityNike) |

**Which workbook to use.** Use the workbooks in the first table. A workbook with the same name but without "NewDataSourceCPD" in its address is an earlier version, listed above; do not embed it.

## Google Sites

Site `profitability-v2-mvp-2026`, private to Wieden+Kennedy: https://sites.google.com/wk.com/profitability-v2-mvp-2026/home. Each report page is a custom HTML embed of one Tableau Online view.

| Page | Tableau view it embeds |
|---|---|
| `home` | Navigation cards only, no embed |
| `overview` | Global Client Portfolio, Overview |
| `office-profitability` | Global Client Portfolio, Office Profitability |
| `gl-account-analysis` | Financial Performance, Overview |
| `anheuser-busch-inbev`, `eli-lilly`, `kraft-heinz`, `mcdonalds`, `nike` | Client Profitability Dashboard, the view of each client |

**Embed addresses.** Always copy the embed address from the published page.

**Notes for the pages.**
- The saved navigation cards use `onclick="window.top.location.href=this.href; return false;"` instead of a plain link target, as the fix that worked inside the Google Sites frame.
- After changing a dashboard, check the whole embed for clipped content or a second scrollbar and adjust its height.
- The domain that hosts the page (Google Sites, GitHub Pages) must be on the allowed embedding domains of the Tableau Online site, and embedding authentication must be configured there.

## GitHub

The portal is a static site (GitHub Pages). Repository: https://github.com/AAlfonso-WK/finance-reporting-portal. Published site: https://aalfonso-wk.github.io/finance-reporting-portal/index.html. The project copy of the pages is in `production/profitability-portal/`. Each report reads its data through the Tableau Embedding API and draws itself in the browser.

| Page | Report | Address |
|---|---|---|
| `index.html` | Portal home | https://aalfonso-wk.github.io/finance-reporting-portal/index.html |
| `global-client-portfolio.html` | Global Client Portfolio | https://aalfonso-wk.github.io/finance-reporting-portal/global-client-portfolio.html |
| `office-profitability.html` | Office Profitability | https://aalfonso-wk.github.io/finance-reporting-portal/office-profitability.html |
| `anheuser-busch-inbev.html` | Client Profitability, Anheuser-Busch InBev | https://aalfonso-wk.github.io/finance-reporting-portal/anheuser-busch-inbev.html |
| `eli-lilly.html` | Client Profitability, Eli Lilly | https://aalfonso-wk.github.io/finance-reporting-portal/eli-lilly.html |
| `ford.html` | Client Profitability, Ford | https://aalfonso-wk.github.io/finance-reporting-portal/ford.html |
| `kraft-heinz.html` | Client Profitability, Kraft Heinz | https://aalfonso-wk.github.io/finance-reporting-portal/kraft-heinz.html |
| `mcdonalds.html` | Client Profitability, McDonald's | https://aalfonso-wk.github.io/finance-reporting-portal/mcdonalds.html |
| `nike.html` | Client Profitability, Nike | https://aalfonso-wk.github.io/finance-reporting-portal/nike.html |

**Data.** Global Client Portfolio and Office Profitability read the view `SRC_CPD_ClientOfficeMonth` of the Profitability Portal Data workbook. The six client pages read a second view of the same workbook, `SRC_CPD_ClientParentOfficeMonth`: client by parent office by country by month, United States dollars only, 2025 and 2026. Each client page keeps only its own client's rows. The client total comes from the `WKI` row; office rows do not add up to it for Indirect Costs and Operating Profit because those are allocated (`02-metrics.md`). The workbook is an extract that Tableau Online refreshes on a schedule (every 2 hours, 6 a.m. to 8 p.m. New York time); confirm the schedule in Tableau Online. The filters are built from the data the page reads.

**Access.** The pages hold no data. The data loads only for a person who can open the view in Tableau Online, and a sign-in box appears at the top of the page when Tableau asks for one. Access is therefore controlled by the Tableau Online permissions on the Profitability Portal Data workbook, not by the pages. View-level permissions have not been verified; confirm them in Tableau Online before relying on them to restrict a person.

**Data source block.** Every report page has a block with the Tableau view that feeds it. It is hidden at the top of the page and appears when sign-in is needed, when the view fails to load, or when `?source` is added to the address, for example `.../ford.html?source`.

**Navigation and theme.** A collapsible sidebar lists every page: 1 Global Client Portfolio, 2 Office Profitability, 3 Client Profitability (3.1 to 3.6, alphabetical). Light and Dark mode is set from the button at the bottom of the sidebar and remembered in the browser; the first visit follows the system setting. The list of pages is kept in one place, `assets/portal-shell.js`.

**Cached data.** Each page shows the last data it read (saved in the browser) while it refreshes, and says so in the status line.

## What each view contains

Each Google Sites report page embeds one Tableau Online view, as listed in the Google Sites table above (the home page has only navigation cards), so the page shows that view. The GitHub pages are separate pages built from the same data, with their own filters and elements.

### Global Client Portfolio (Tableau Online)

Both views have a year selector, a currency selector (local currency or United States dollars) and five summary cards: Revenue, Direct Contribution, Contribution Margin, Profit and Profit %. Each card shows the selected year, the prior year for the same months, and the change. Cards, rankings and tables cover the months up to the last complete month. Metrics follow `02-metrics.md`.

**Overview.** Company-wide client profitability.
- Filters: Country, Office Code Prefix (a short city code derived from the office code), Parent Office Name and Reporting Client.
- Revenue by Month and Year: monthly bars by year.
- Detailed Client and Office profit and loss table: one row per Reporting Client with Revenue, Direct Labour, Direct Overheads, Direct Contribution, Indirect Costs, Profit and Profit %.

**Office Profitability.** One selected office, compared with the others.
- An Office Selector, in addition to the year and currency selectors.
- Header: the office name and Active Clients (see `02-metrics.md`).
- Four rankings by Parent Office Name, on Revenue, Direct Contribution, Profit and Profit %. The selected office is highlighted.
- Revenue by Month and Year: monthly bars by year.
- Detailed Client and Office profit and loss table for the selected office: one row per Reporting Client. The columns are labelled Revenue, Staff Costs Direct (Direct Labour), Expenses Direct (Direct Overheads), Direct Contribution, Total Overhead (Indirect Costs), Profit and Profit %.

### Client Profitability Dashboard (Tableau Online)

One view per client, with the same layout and the client's own branding. It uses Finance's names: Gross Profit is Direct Contribution and Operating Profit is Profit (alias table in `02-metrics.md`).
- Two metric selectors: a primary metric (Revenue, Gross Profit or Operating Profit) and a secondary metric (Gross Margin or Operating Margin).
- Seven summary cards for the current year up to the last complete month: Revenue, Direct Costs, Gross Profit, Gross Margin, Indirect Costs, Operating Profit and Operating Margin.
- Office ranking by the primary metric, and a plot with one dot per office showing the primary metric against the secondary metric.
- Three comparisons side by side by country and office: Revenue, Gross Profit and Operating Profit.
- Detail Profitability by Office: the profit and loss of each office in United States dollars for the current year. A note on the sheet explains how office-level Operating Profit and Overhead relate to the client total; see `02-metrics.md` for how hierarchy levels differ.

### Financial Performance (Tableau Online)

**Overview.** The general ledger account view, embedded in Google Sites as General Ledger Account Analysis.
- Controls: Accounting Year, Office and Currency Type.
- Four summary cards: Revenue, Expenses, Net Working Capital and Acid-Test, each with the prior year and the change.
- Monthly Operations: three monthly lines (Revenue, Salary and Related, Operating Expenses). The current year runs up to the last complete month and prior years show all months.
- Expense Composition by General Ledger Report Group, Revenue by Client and Revenue by Account, each with the change against the prior year.
- Income Statement Breakdown and Balance Sheet Breakdown tables by General Ledger Report Group and Account Name, with prior year, selected year and percentage change.

### GitHub portal

- **Portal home** (`index.html`): one card for each report, including six client cards.
- **Global Client Portfolio.** Filters: Accounting Year, Country, Reporting Client and Office; the last three accept several values. Five summary cards with prior-year comparison, the Revenue by Month and Year chart (current year up to the latest month, prior year in full), and a sortable Detailed Client profit and loss table with Client, Revenue, Direct Labour, Direct Overheads, Direct Contribution, Indirect Costs, Profit and Profit %.
- **Office Profitability.** Filters: Accounting Year and Office. Five summary cards, the Office Performance Ranking (all Wieden+Kennedy offices on Revenue, Direct Contribution, Profit and Profit %, with the selected office highlighted), the Revenue by Month and Year chart, and a Client profit and loss table with the same columns as the Global Client Portfolio table.

- **Client Profitability** (one page per client, same layout, the client's own branding). Fixed filters under the navigation: Year, Through month and Office (several offices can be picked). The comparison is always against the same months of the prior year, so the first year in the source has no comparison. The page says that the latest month may still be adjusted, because the source does not say whether it is closed.
  - Performance Overview: summary cards, Revenue by Month (line), Office Ranking, Primary vs. Secondary Metric (one dot per office) and Office Contribution to Change in Revenue.
  - Profit Drivers: Profit Bridge (change against the prior year from Revenue to Gross Profit to Operating Profit; with offices picked it stops at Gross Profit) and Operating Profit by Month (monthly or cumulative).
  - Office by Month: a matrix by office and month with a selector for Revenue, Gross Profit or Operating Profit; a click on a cell shows the five measures.
  - P&L Summary by Office and Profitability by Office tables.
  - Cards, trend, bridge and Operating Profit by month follow the filters. Ranking, scatter, contribution chart, matrix and tables keep every office and highlight the picked ones.
  - No country filter: only Mexico City has more than one country (Brazil and Mexico) for Anheuser-Busch InBev, and the `WKI` rows carry no country.
  - To add a client, copy a client page and edit only the `window.CLIENT` block at the top of its script: `key` (the client's exact name in the data, `ReportingClient`), `name`, `brand` (dark color of header and cards), `accent`, and the optional `mark`, `dot` and `label` (ranking bars, scatter dots and header label; each defaults to `accent`) and `image`, `tint`, `shade`, `rule` (banner photo, overlay color, overlay opacity at the top and bottom, and bottom border). Then add the page to `PAGES` in `assets/portal-shell.js` and to the client cards in `index.html`. The banner photos are loaded from Unsplash; if the service fails, the banner shows black and the page still works.

Every report page ends with a block naming the Tableau view that feeds it.

**Known limits of the portal.**
- A month with no row for an office is shown as missing, not as zero. Whether it means "no activity" has not been confirmed with the person who loads the data.
- The banner photos on the client pages come from Unsplash, not from the repository.
- Not tested on mobile or in browsers other than the one used for review.
- The Anheuser-Busch InBev view in Google Sites stops in July; the GitHub page reads the current view.
