import { fetchAPI } from "@/lib/api";
import ProductDetailsClient from "@/components/ProductDetailsClient";
import { notFound } from "next/navigation";

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