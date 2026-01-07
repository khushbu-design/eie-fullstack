'use client';

import { useCompare } from "@/context/CompareContext";

export default function AddToCompareButton({ product, base }) {
  const { addToCompare, compareList } = useCompare();

  const isAdded = compareList.some((item) => item.id === product.id);

  const handleClick = () => {
    addToCompare({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: base + (product.image?.url || "/placeholder.jpg"),
      specifications: product.specification || [],
      short_description: product.short_description || "",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`btn btn-outline ${isAdded ? "added" : ""}`}
    >
      {isAdded ? "Remove from Compare" : "Add to Compare"}
    </button>
  );
}