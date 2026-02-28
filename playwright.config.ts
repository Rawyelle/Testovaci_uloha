import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',        // složka s testy
  testMatch: '**/*.spec.ts', // zahrne všechny podsložky (unit i integration)
  timeout: 30000,
  use: {
    headless: true,          // testy poběží bez zobrazení browseru
  },
  reporter: [['list'], ['html']], // seznam testů + HTML report
});