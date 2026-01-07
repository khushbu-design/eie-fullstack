export async function fetchAPI(path) {
  const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!API_URL) {
    throw new Error("❌ NEXT_PUBLIC_STRAPI_URL is missing in .env.local");
  }

  const url = `${API_URL}${path}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    const text = await res.text();
    console.error("Strapi API Error:", res.status, res.statusText, text);
    console.error("Requested URL:", url);
    throw new Error(`Strapi error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}