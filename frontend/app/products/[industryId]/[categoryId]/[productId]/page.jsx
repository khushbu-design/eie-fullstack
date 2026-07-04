import { fetchAPI } from "@/lib/api";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { productId } = await params;

  const productRes = await fetchAPI(
    `/products?filters[slug][$eq]=${productId}&fields=name,short_description`
  );

  const product = productRes.data?.[0]?.attributes || {};

  return {
    title: `${product.name || productId} | EIE Instruments`,
    description: product.short_description || `Detailed specifications and features of ${product.name || 'this product'}.`,
    keywords: [product.name, "laboratory instrument", "testing equipment", "EIE Instruments"],
    openGraph: {
      title: product.name || "Product Details",
      description: product.short_description || "High-quality laboratory testing instrument",
      url: `https://eieinstruments.co.in/products/${(await params).industryId}/${(await params).categoryId}/${productId}`,
    },
  };
}

export default async function ProductDetails({ params }) {
  const { productId, industryId, categoryId } = await params;
  const query = new URLSearchParams({
    "filters[slug][$eq]": productId,
    "populate[image][populate]": "*",
    "populate[catalog_pdf][populate]": "*",
    "populate[specification][populate]": "*",
    "populate[accessories][populate]": "image",
    "populate[spares][populate]": "image",
    "populate[variants][populate][image][populate]": "*",
    "populate[variants][populate][specification][populate]": "*",
  }).toString();
  const productRes = await fetchAPI(`/products?${query}`);
  if (!productRes?.data?.length) {
    notFound();
  }
  const product = productRes.data[0];
  const base = process.env.NEXT_PUBLIC_STRAPI_URL.replace("/api", "");
  return (
    <ProductDetailsClient
      product={product}
      base={base}
      industryId={industryId}
      categoryId={categoryId}
    />
  );
}