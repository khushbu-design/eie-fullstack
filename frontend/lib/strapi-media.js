export function getStrapiMedia(url) {
  if (!url) {
    return "/logo-1.png";
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace("/api", "") || "";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}