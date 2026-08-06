export function toTitleCase(str) {
  if (!str || typeof str !== "string") return str || "";
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}