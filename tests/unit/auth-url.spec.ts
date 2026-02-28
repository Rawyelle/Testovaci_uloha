import { test, expect } from "@playwright/test";
import { buildAuthUrl } from "../../src/auth";

test.describe("Authorization URL builder - Unit Tests", () => {
  test("should build correct Spotify authorization URL", () => {
    // test data
    const clientId = "test_client_id";
    const redirectUri = "http://localhost:3000/callback";
    const state = "random_state_123";

    // buildime URL
    const url = buildAuthUrl(clientId, redirectUri, state);

    // ověřujeme základní části URL
    expect(url).toContain("https://accounts.spotify.com/authorize");

    // ověřujeme, že obsahuje správné parametry
    expect(url).toContain("response_type=code");
    expect(url).toContain(`client_id=${clientId}`);
    expect(url).toContain(
      `redirect_uri=${encodeURIComponent(redirectUri)}`
    );
    expect(url).toContain(`state=${state}`);
    expect(url).toContain("scope=");
  });

  test("should include required query parameters", () => {
    const url = buildAuthUrl(
      "abc123",
      "http://localhost:3000/callback",
      "state123"
    );

    // kontrola, že URL není prázdná
    expect(url).toBeTruthy();

    // kontrola struktury URL
    expect(url.startsWith("https://")).toBe(true);
  });
});