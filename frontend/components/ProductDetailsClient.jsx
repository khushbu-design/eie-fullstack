'use client';

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import { useCompare } from "@/context/CompareContext";
import "./style.css";

export default function ProductDetailsClient({ product, base, industryId, categoryId }) {
  const { addToCompare, compareList } = useCompare();

  const isAdded = compareList?.some((p) => p.id === product.id);

  const handleCompareToggle = () => {
    addToCompare({
      id: product.id,
      slug: product.slug,
      name: product.name,
      image: base + (product.image?.url || "/placeholder.jpg"),
      specifications: product.specification || [], 
    });
  };

  return (
    <div className="product-wrapper">

      <div className="top-section">
        <div className="image-box">
          <img
            src={base + (product.image?.url || "/placeholder.jpg")}
            className="main-image"
            alt={product.name}
          />
        </div>

        <div className="details-box">
          <h1 className="product-title">{product.name}</h1>

          {product.model_number && (
            <div className="model-number">
              Model Number : <strong>{product.model_number}</strong>
            </div>
          )}

          <p className="short-desc">{product.short_description || ""}</p>

          <div className="btn-group">
            {product.catalog_pdf?.url && (
              <a
                className="btn secondary"
                href={base + product.catalog_pdf.url}
                target="_blank"
                rel="noreferrer"
              >
                Product PDF
              </a>
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

      {product.variants && product.variants.length > 0 && (
        <div className="variants-section-final">
          <h2 className="variants-title-final">Variants</h2>
          <div className="variants-grid-final">
            {product.variants.map((variant) => {
              const isVariantAdded = compareList.some((p) => p.id === variant.id);

              const variantImage = variant.image?.url 
                ? base + variant.image.url 
                : base + (product.image?.url || "/placeholder.jpg");

              return (
                <div key={variant.id} className="variant-card-final">
                  <div className="variant-name-final">
                    {variant.name || variant.model_number || "Variant"}
                  </div>

                  {variant.image?.url && (
                    <img 
                      src={variantImage} 
                      alt={variant.name} 
                      className="variant-image-preview" 
                      style={{ width: "100%", height: "180px", objectFit: "contain", marginBottom: "12px", borderRadius: "8px" }}
                    />
                  )}

                  <div className="variant-buttons-final">
                    <Link
                      href={`/products/${industryId}/${categoryId}/${variant.slug || variant.id}`}
                      className="btn maroon"
                    >
                      More Info
                    </Link>

                    <button
                      onClick={() =>
                        addToCompare({
                          id: variant.id,
                          slug: variant.slug || variant.id,
                          name: variant.name || variant.model_number || product.name + " Variant",
                          image: variantImage,
                          specifications: variant.specification || [], // આ મહત્વનું છે!
                        })
                      }
                      className={`btn maroon ${isVariantAdded ? "active" : ""}`}
                    >
                      {isVariantAdded ? "Remove from Compare" : "Add to Compare"}
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

      <div className="tabs-container">
        <input type="radio" id="tab1" name="tab" defaultChecked />
        <label htmlFor="tab1" className="tab-btn">Details</label>

        <input type="radio" id="tab2" name="tab" />
        <label htmlFor="tab2" className="tab-btn">Technical Specifications</label>

        <input type="radio" id="tab3" name="tab" />
        <label htmlFor="tab3" className="tab-btn">Accessories</label>

        <input type="radio" id="tab4" name="tab" />
        <label htmlFor="tab4" className="tab-btn">Spares</label>

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
                  <li key={i} className="spec-item" style={{ "--i": i + 1 }}>
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
                  {acc.image?.url ? (
                    <img src={base + acc.image.url} alt={acc.name} />
                  ) : (
                    <div className="no-img">Coming Soon...</div>
                  )}
                  <p className="acc-name">{acc.name}</p>
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
                  {sp.image?.url ? (
                    <img src={base + sp.image.url} alt={sp.name} />
                  ) : (
                    <div className="no-img">Coming Soon...</div>
                  )}
                  <p className="acc-name">{sp.name}</p>
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