'use client';
import { useState } from 'react';
import Link from "next/link";
import { getStrapiMedia } from "@/lib/strapi-media";
import Image from "next/image";

export default function ProductListClient({ products, industryId, categoryId }) {
  const [view, setView] = useState('grid'); // 'grid' or 'list'

  return (
    <>
      <div className="view-toggle">
        <button
          className={`view-btn ${view === 'grid' ? 'active' : ''}`}
          onClick={() => setView('grid')}
          title="Box/Grid View"
        >

          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </button>

        <button
          className={`view-btn ${view === 'list' ? 'active' : ''}`}
          onClick={() => setView('list')}
          title="List View"
        >

          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
        </button>
      </div>

      <div className={`products-grid ${view}`}>
        {products.map((prod, index) => {
          const rawImageUrl = prod.image?.url;
          const imageUrl = rawImageUrl ? getStrapiMedia(rawImageUrl) : null;
          const hasValidImage =
            imageUrl && imageUrl.trim() !== "" && !imageUrl.includes("undefined");

          const productLink = `/products/${industryId}/${categoryId}/${prod.slug}`;

          return (
            <div
              key={prod.id}
              className={`product-card ${view}`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="product-image-wrapper">
                {hasValidImage ? (
                  <Image
                    src={imageUrl}
                    alt={prod.name || "Product image"}
                    width={view === 'grid' ? 400 : 180}
                    height={view === 'grid' ? 300 : 140}
                    quality={82}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="product-image"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                    loading="lazy"
                  />
                ) : (
                  <div className="no-image">
                    <span>Image Coming Soon...</span>
                  </div>
                )}
              </div>

              <div className="product-info">
                <Link href={productLink} className="product-name-link">
                  <h2 className="product-name">{prod.name}</h2>
                </Link>

                <p className="product-desc">
                  {prod.short_description || "No description available."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}