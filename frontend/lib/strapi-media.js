export function getStrapiMedia(url) {
  if (!url) return "/placeholder.jpg";

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  const MEDIA_BASE = "https://popular-boot-8befa4f005.media.strapiapp.com";

  return `${MEDIA_BASE}${url.startsWith("/") ? "" : "/"}${url}`;
}