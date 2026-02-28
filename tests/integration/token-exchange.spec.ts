import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
import { exchangeCodeForToken } from "../../src/auth";

// načtení .env proměnných pro Client ID/Secret
dotenv.config();

test.describe("Token Exchange - Integration Test with dummy code", () => {
  test("should return 400 for invalid/expired authorization code", async () => {
    const clientId = process.env.SPOTIFY_CLIENT_ID!;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
    const redirectUri = process.env.REDIRECT_URI!;
    
    // neplatný code (negativní test)
    const dummyCode = "dummy_invalid_code_123";

    // voláme Spotify API
    const response = await exchangeCodeForToken(
      dummyCode,
      clientId,
      clientSecret,
      redirectUri
    );

    // očekáváme, že Spotify vrátí 400 pro neplatný code
    expect(response.status).toBe(400);

    // Parsování JSON odpovědi
    const body = await response.json();

    // ověřujeme, že chyba je typu "invalid_grant"
    expect(body).toHaveProperty("error");
    expect(body.error).toBe("invalid_grant");
  });
});

test('dummy', async () => {
  expect(true).toBe(true);
});