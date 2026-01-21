import { fetchAPI } from "@/lib/api";
import Link from "next/link";
import AddToCompareButton from "@/components/AddToCompareButton";
import { getStrapiMedia } from "@/lib/strapi-media";
import "./style.css";

export default async function CategoryProducts({ params }) {
  const { industryId, categoryId } = await params; // await required in Next.js App Router

  const categoryRes = await fetchAPI(
    `/categories?filters[slug][$eq]=${categoryId}&filters[industry][slug][$eq]=${industryId}&populate=*`
  );

  if (!categoryRes.data || categoryRes.data.length === 0) {
    return <p className="text-center py-20 text-2xl">Category not found</p>;
  }

  const category = categoryRes.data[0];

  const query = new URLSearchParams({
    "filters[category][id][$eq]": category.id.toString(),
    "populate[0]": "image",
    "populate[1]": "catalog_pdf",
    "populate[2]": "specification",
  }).toString();

  const products = await fetchAPI(`/products?${query}`);

  return (
    <div className="category-products-page">
      <h1 className="category-title">{category.name}</h1>

      {products.data.length === 0 ? (
        <p className="text-center text-xl text-gray-600">
          No products found in this category.
        </p>
      ) : (
        <div className="products-grid">
          {products.data.map((prod, index) => {
            const imageUrl = getStrapiMedia(prod.image?.url);

            return (
              <div
                key={prod.id}
                className="product-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-image-wrapper">
                  {imageUrl ? (
                    <img 
                      src={imageUrl} 
                      alt={prod.name} 
                      loading="lazy" 
                    />
                  ) : (
                    <div className="no-image">Coming Soon...</div>
                  )}
                </div>

                <h2 className="product-name">{prod.name}</h2>

                <p className="product-desc">{prod.short_description}</p>

                <div className="product-buttons">
                  {prod.catalog_pdf?.url ? (
                    <a
                      href={getStrapiMedia(prod.catalog_pdf.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={`${prod.name.replace(/\s+/g, '_')}.pdf`}
                      className="btn btn-download"
                    >
                      Product PDF
                    </a>
                  ) : (
                    <div 
                      className="btn btn-download" 
                      style={{ 
                        opacity: 0.6, 
                        cursor: 'not-allowed', 
                        background: '#ccc', 
                        color: '#666' 
                      }}
                    >
                      PDF Coming Soon...
                    </div>
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