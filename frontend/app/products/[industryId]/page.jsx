import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import { getStrapiMedia } from "@/lib/strapi-media";
import "./style.css";

export async function generateMetadata({ params }) {
  const { industryId } = await params;
  const industryRes = await fetchAPI(
    `/industries?filters[slug][$eq]=${industryId}`
  );
  const industryName =
    industryRes.data?.[0]?.attributes?.name ||
    industryRes.data?.[0]?.name ||
    industryId;

  return {
    title: `${industryName} | EIE Instruments`,
    description: `Explore laboratory testing instruments and categories for ${industryName} industry.`,
    keywords: [
      `${industryName} testing`,
      `${industryName} instruments`,
      "laboratory equipment",
      "EIE Instruments",
    ],
    openGraph: {
      title: `${industryName} Testing Instruments`,
      description: `Premium laboratory testing solutions for ${industryName} industry by EIE Instruments.`,
      url: `https://eieinstruments.co.in/products/${industryId}`,
    },
  };
}

export default async function IndustryPage({ params }) {
  const { industryId } = await params;

  const industryRes = await fetchAPI(
    `/industries?filters[slug][$eq]=${industryId}&populate=*`
  );

  if (!industryRes.data || industryRes.data.length === 0) {
    return <p className="text-center py-20 text-2xl">Industry not found</p>;
  }

  const industry = industryRes.data[0];

  const categoriesRes = await fetchAPI(
    `/categories?filters[industry][slug][$eq]=${industryId}&populate=*&sort=name:asc`
  );

  const categories = categoriesRes.data || [];

  const categoriesWithCount = await Promise.all(
    categories.map(async (cat) => {
      const countRes = await fetchAPI(
        `/products?filters[categories][id][$eq]=${cat.id}&publicationState=live`
      );
      const productCount = countRes.meta?.pagination?.total || 0;
      return {
        ...cat,
        productCount,
      };
    })
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px", fontWeight: "600" }}>
        Categories in {industry.attributes?.name || industry.name}
      </h1>

      <div className="category-grid">
        {categoriesWithCount.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            No categories found for this industry.
          </p>
        ) : (
          categoriesWithCount.map((cat) => {
            const catAttr = cat.attributes || cat;

            let imageUrl = null;
            if (catAttr.image?.data?.attributes?.url) {
              imageUrl = catAttr.image.data.attributes.url;
            } else if (catAttr.image?.url) {
              imageUrl = catAttr.image.url;
            } else if (catAttr.image?.attributes?.url) {
              imageUrl = catAttr.image.attributes.url;
            }

            return (
              <Link
                key={cat.id}
                href={`/products/${industryId}/${catAttr.slug}`}
                className="category-card"
              >
                <div className="category-image-wrapper">
                  <img
                    src={getStrapiMedia(imageUrl)}
                    alt={catAttr.name || "Category image"}
                    className="category-image"
                  />
                </div>

                <h2 className="cat-title">
                  {catAttr.name || "Unnamed Category"}
                </h2>

                <p className="cat-desc">
                  <strong>{cat.productCount}</strong>{" "}
                  {cat.productCount === 1 ? "Product" : "Products"} →
                </p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
}