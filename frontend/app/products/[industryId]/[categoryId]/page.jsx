import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import ProductListClient from "@/components/ProductListClient";
import "./style.css";

export async function generateMetadata({ params }) {
  const { industryId, categoryId } = await params;

  const categoryRes = await fetchAPI(
    `/categories?filters[slug][$eq]=${categoryId}&filters[industry][slug][$eq]=${industryId}`
  );

  const categoryName = categoryRes.data?.[0]?.attributes?.name || categoryId;

  return {
    title: `${categoryName} | EIE Instruments`,
    description: `Explore high-quality laboratory testing instruments in ${categoryName} category.`,
    keywords: [`${categoryName} testing`, `${categoryName} instruments`, "laboratory equipment", "EIE Instruments"],
    openGraph: {
      title: `${categoryName} Testing Instruments`,
      description: `Premium testing solutions in ${categoryName} category by EIE Instruments.`,
      url: `https://eieinstruments.co.in/products/${industryId}/${categoryId}`,
    },
  };
}

export default async function CategoryProducts({ params }) {
  const { industryId, categoryId } = await params;
  const categoryRes = await fetchAPI(
    `/categories?filters[slug][$eq]=${categoryId}&filters[industry][slug][$eq]=${industryId}&populate=*`
  );
  if (!categoryRes.data || categoryRes.data.length === 0) {
    return <p className="text-center py-20 text-2xl">Category not found</p>;
  }
  const category = categoryRes.data[0];
  const query = new URLSearchParams({
    "filters[categories][id][$eq]": category.id.toString(),
    "populate[0]": "image",
    "populate[1]": "catalog_pdf",
    "populate[2]": "specification",
    "sort": "createdAt:asc",
  }).toString();
  const products = await fetchAPI(`/products?${query}`);
  return (
    <div className="category-products-page">
      <h1 className="category-title">{category.name}</h1>
      {products.data.length === 0 ? (
        <p className="text-center text-xl text-gray-600 py-10">
          No products found in this category.
        </p>
      ) : (
        <ProductListClient
          products={products.data}
          industryId={industryId}
          categoryId={categoryId}
        />
      )}
    </div>
  );
}