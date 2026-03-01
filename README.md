[![Playwright Tests](https://github.com/Rawyelle/Testovaci_uloha/actions/workflows/ci.yml/badge.svg)](https://github.com/Rawyelle/Testovaci_uloha/actions/workflows/ci.yml)

Pro lokální spůštění bude potřeba si nainstalovat
Node.js (npm je součásti node)
Playwrigth (npm install)
(instalace browserů nebude potřeba, komunikujeme pouze s BE)
.env soubor pro spůštění integračního testu, v případě potřeby pošlu, jinak test běží automaticky
Po instalaci:
npm install
npx playwright test
