import { fetchAPI } from "@/lib/api";
import Link from "next/link";
import AddToCompareButton from "@/components/AddToCompareButton";
import { getStrapiMedia } from "@/lib/strapi-media";
import Image from "next/image";
import "./style.css";

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
    "filters[categories][id][$eq]": category.id.toString(),   // ← Changed from category to categories
    "populate[0]": "image",
    "populate[1]": "catalog_pdf",
    "populate[2]": "specification",
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
        <div className="products-grid">
          {products.data.map((prod, index) => {
            const rawImageUrl = prod.image?.url;
            const imageUrl = rawImageUrl ? getStrapiMedia(rawImageUrl) : null;

            const hasValidImage =
              imageUrl && imageUrl.trim() !== "" && !imageUrl.includes("undefined");

            return (
              <div
                key={prod.id}
                className="product-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="product-image-wrapper">
                  {hasValidImage ? (
                    <Image
                      src={imageUrl}
                      alt={prod.name || "Product image"}
                      width={400}
                      height={300}
                      quality={78}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                      loading="lazy"
                    />
                  ) : (
                    <div className="no-image">
                      <span>Coming Soon...</span>
                    </div>
                  )}
                </div>

                <h2 className="product-name">{prod.name}</h2>
                <p className="product-desc">
                  {prod.short_description || "No description available."}
                </p>

                <div className="product-buttons">
                  {prod.catalog_pdf?.url ? (
                    <a
                      href={getStrapiMedia(prod.catalog_pdf.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={`${prod.name.replace(/\s+/g, "_")}.pdf`}
                      className="btn btn-download"
                    >
                      Product PDF
                    </a>
                  ) : (
                    <div className="btn btn-download disabled">PDF Coming Soon...</div>
                  )}

                  <Link href="/contact" className="btn btn-primary">
                    Instant Quote
                  </Link>

                  <Link
                    href={`/products/${industryId}/${categoryId}/${prod.slug}`}
                    className="btn btn-primary"
                  >
                    More Info
                  </Link>

                  <AddToCompareButton product={prod} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}