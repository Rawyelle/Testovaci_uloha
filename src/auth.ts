import { Buffer } from "buffer";

// funkce pro výměnu authorization code za access token
export async function exchangeCodeForToken(
  code: string,
  clientId: string,
  clientSecret: string,
  redirectUri: string
) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization:
        "Basic " +
        Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
    }),
  });

  return response;
}

// builder pro Spotify authorization URL
export function buildAuthUrl(clientId: string, redirectUri: string, state: string, scope: string = "user-read-private user-read-email") {
  const params = new URLSearchParams({
    client_id: clientId,
    response_type: "code",
    redirect_uri: redirectUri,
    state,
    scope,
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
}