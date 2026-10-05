# W+K Finance Reporting Portal

Static site (GitHub Pages) that hosts the Wieden+Kennedy finance reports.
Each report reads its data through the Tableau Embedding API and draws itself.

## Pages
- `index.html`: portal home.
- `global-client-portfolio.html`: Global Client Portfolio.
- `office-profitability.html`: Office Profitability.

## Data source
Both reports read `ProfitabilityPortalData/SRC_CPD_ClientOfficeMonth` (Tableau Cloud, site `wk`,
project Finance Reporting). The workbook is an extract refreshed every 2 hours, 6 a.m. to 8 p.m. New York time.

## Pending before go-live
- Add the Pages domain to the Tableau allow-list for embedding.
