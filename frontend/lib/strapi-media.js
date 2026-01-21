export function getStrapiMedia(url) {
  if (!url) {
    return "/placeholder.jpg"; 
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.replace("/api", "") || "";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${baseUrl}${url.startsWith("/") ? "" : "/"}${url}`;
}