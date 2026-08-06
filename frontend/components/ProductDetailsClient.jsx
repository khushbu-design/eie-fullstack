"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { useCompare } from "@/context/CompareContext";
import { getStrapiMedia } from "@/lib/strapi-media";
import { toTitleCase } from "@/lib/utils";
import "./style.css";

export default function ProductDetailsClient({
  product,
  base,
  industryId,
  categoryId,
  categories = [],
}) {
  const { addToCompare, compareList } = useCompare();
  const isAdded = compareList?.some((p) => p.id === product.id);

  const handleCompareToggle = () => {
    addToCompare({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: getStrapiMedia(product.image?.url),
      specifications: product.specification || [],
    });
  };

  const mainImage = getStrapiMedia(product.image?.url);
  const displayName = toTitleCase(product.name);

  const firstCat = categories[0] || {};
  const industryName =
    firstCat.industry?.name ||
    firstCat.industry?.attributes?.name ||
    industryId;
  const industrySlug = firstCat.industry?.slug || industryId;

  return (
    <div className="product-wrapper">
      {/* BREADCRUMB */}
      <div
        style={{
          marginBottom: "30px",
          fontSize: "14px",
          color: "#666",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <Link href="/" style={{ color: "#d60000", textDecoration: "none" }}>
          Home
        </Link>
        <span>/</span>
        <Link href="/products" style={{ color: "#d60000", textDecoration: "none" }}>
          Shop by Category
        </Link>
        <span>/</span>
        <Link
          href={`/products/${industrySlug}`}
          style={{ color: "#d60000", textDecoration: "none" }}
        >
          {industryName}
        </Link>

        {categories.map((cat, index) => {
          const catName = cat.name || cat.attributes?.name || "";
          const catSlug = cat.slug || cat.attributes?.slug || "";
          return (
            <span
              key={cat.id || index}
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <span>/</span>
              <Link
                href={`/products/${industrySlug}/${catSlug}`}
                style={{ color: "#d60000", textDecoration: "none" }}
              >
                {catName}
              </Link>
            </span>
          );
        })}
      </div>

      {/* TOP SECTION */}
      <div className="top-section">
        <div className="image-box">
          <img
            src={mainImage}
            className="main-image"
            alt={displayName}
            loading="lazy"
          />
        </div>

        <div className="details-box">
          <h1 className="product-title">{displayName}</h1>

          {product.model_number && (
            <div className="model-number">
              Model Number : <strong>{product.model_number}</strong>
            </div>
          )}

          <p className="short-desc">{product.short_description || ""}</p>

          <div className="btn-group">
            {product.catalog_pdf?.url ? (
              <a
                className="btn secondary"
                href={getStrapiMedia(product.catalog_pdf.url)}
                target="_blank"
                rel="noopener noreferrer"
                download={`${product.name.replace(/\s+/g, "_")}.pdf`}
              >
                Product PDF
              </a>
            ) : (
              <div
                className="btn secondary"
                style={{
                  opacity: 0.6,
                  cursor: "not-allowed",
                  background: "#ccc",
                  color: "#666",
                }}
              >
                PDF Coming Soon...
              </div>
            )}

            <Link href="/contact" className="btn primary">
              Instant Quote
            </Link>

            <button
              onClick={handleCompareToggle}
              className={`btn outline ${isAdded ? "active" : ""}`}
            >
              {isAdded ? "Remove from Compare" : "Add to Compare"}
            </button>
          </div>
        </div>
      </div>

      {/* VARIANTS */}
      {product.variants && product.variants.length > 0 && (
        <div className="variants-section-final">
          <h2 className="variants-title-final">Variants</h2>
          <div className="variants-grid-final">
            {product.variants.map((variant) => {
              const isVariantAdded = compareList.some(
                (p) => p.id === variant.id
              );
              const variantImage = getStrapiMedia(variant.image?.url);
              const variantName = toTitleCase(
                variant.name || variant.model_number || "Variant"
              );

              return (
                <div key={variant.id} className="variant-card-final">
                  <div className="variant-name-final">{variantName}</div>

                  <div className="variant-image-box">
                    <img
                      src={variantImage}
                      alt={variantName}
                      loading="lazy"
                    />
                  </div>

                  <div className="variant-buttons-final">
                    {variant.slug ? (
                      <Link
                        href={`/products/${industryId}/${categoryId}/${variant.slug}`}
                        className="btn maroon"
                      >
                        More Info
                      </Link>
                    ) : (
                      <button className="btn maroon disabled" disabled>
                        No Details Available
                      </button>
                    )}

                    <button
                      onClick={() =>
                        addToCompare({
                          id: variant.id,
                          slug: variant.slug || variant.id,
                          name:
                            variant.name ||
                            variant.model_number ||
                            product.name + " Variant",
                          image: variantImage,
                          specifications: variant.specification || [],
                        })
                      }
                      className={`btn maroon ${isVariantAdded ? "active" : ""}`}
                    >
                      {isVariantAdded
                        ? "Remove from Compare"
                        : "Add to Compare"}
                    </button>

                    <Link href="/contact" className="btn maroon">
                      Instant Quote
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TABS */}
      <div className="tabs-container">
        <input type="radio" id="tab1" name="tab" defaultChecked />
        <label htmlFor="tab1" className="tab-btn">
          Details
        </label>

        <input type="radio" id="tab2" name="tab" />
        <label htmlFor="tab2" className="tab-btn">
          Technical Specifications
        </label>

        <input type="radio" id="tab3" name="tab" />
        <label htmlFor="tab3" className="tab-btn">
          Accessories
        </label>

        <input type="radio" id="tab4" name="tab" />
        <label htmlFor="tab4" className="tab-btn">
          Spares
        </label>

        <div className="tab-content">
          <div className="rich-text-content">
            {product.long_description ? (
              <BlocksRenderer content={product.long_description} />
            ) : (
              <p className="empty">Coming Soon...</p>
            )}
          </div>
        </div>

        <div className="tab-content">
          <div className="spec-box">
            {product.specification && product.specification.length > 0 ? (
              <ul className="spec-list">
                {product.specification.map((item, i) => (
                  <li
                    key={i}
                    className="spec-item"
                    style={{ "--i": i + 1 }}
                  >
                    <span className="spec-key">{item.key || "—"}</span>
                    <span className="spec-value">{item.value || "—"}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty">Coming Soon...</p>
            )}
          </div>
        </div>

        <div className="tab-content">
          <div className="accessory-grid">
            {product.accessories && product.accessories.length > 0 ? (
              product.accessories.map((acc) => (
                <div key={acc.id} className="accessory-card">
                  <img
                    src={getStrapiMedia(acc.image?.url)}
                    alt={toTitleCase(acc.name)}
                    loading="lazy"
                  />
                  <p className="acc-name">{toTitleCase(acc.name)}</p>
                  <Link
                    href={`/products/${industryId}/${categoryId}/${acc.slug || acc.id}`}
                    className="btn-view-more"
                  >
                    View More
                  </Link>
                </div>
              ))
            ) : (
              <p className="empty">Coming Soon...</p>
            )}
          </div>
        </div>

        <div className="tab-content">
          <div className="accessory-grid">
            {product.spares && product.spares.length > 0 ? (
              product.spares.map((sp) => (
                <div key={sp.id} className="accessory-card">
                  <img
                    src={getStrapiMedia(sp.image?.url)}
                    alt={toTitleCase(sp.name)}
                    loading="lazy"
                  />
                  <p className="acc-name">{toTitleCase(sp.name)}</p>
                  <Link
                    href={`/products/${industryId}/${categoryId}/${sp.slug || sp.id}`}
                    className="btn-view-more"
                  >
                    View More
                  </Link>
                </div>
              ))
            ) : (
              <p className="empty">Coming Soon...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}