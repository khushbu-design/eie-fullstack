import { fetchAPI } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import { getStrapiMedia } from "@/lib/strapi-media";
import { toTitleCase } from "@/lib/utils";

export const metadata = {
  title: "Search Products | EIE Instruments",
  description:
    "Search for lab testing equipment, instruments by name, model or keyword.",
  keywords: [
    "search products",
    "lab testing instruments",
    "material testing",
    "EIE Instruments",
  ],
};

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q?.trim() || "";

  if (!query) {
    return (
      <div className="py-32 text-center px-4">
        <h1 className="text-4xl font-bold text-red-700">Search Products</h1>
        <p className="text-xl text-gray-600 mt-6">
          Search bar ma product name, model number athva keyword type karo.
        </p>
      </div>
    );
  }

  const strapiQuery = new URLSearchParams();

  strapiQuery.append("filters[$or][0][name][$containsi]", query);
  strapiQuery.append("filters[$or][1][model_number][$containsi]", query);
  strapiQuery.append("fields", "name,slug,short_description,model_number");
  strapiQuery.append("populate[image][fields]", "url");
  strapiQuery.append("populate[0]", "image");
  strapiQuery.append("populate[1]", "categories");
  strapiQuery.append("populate[categories][populate][0]", "industry");
  strapiQuery.append("publicationState", "live");
  strapiQuery.append("pagination[limit]", "50");
  strapiQuery.append("sort", "name:asc");

  const queryString = strapiQuery.toString();

  let products = [];
  let error = null;

  try {
    const res = await fetchAPI(`/products?${queryString}`);
    products = res.data || [];
  } catch (err) {
    console.error("❌ API Error:", err);
    error = "Products load karva ma problem aavi – thodi var pachi try karo.";
  }

  const displayQuery = query.replace(/\s+/g, " ").trim();

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-700">
        Search Results for "{displayQuery}"
      </h1>

      {error && (
        <div className="bg-red-50 text-red-700 p-8 rounded-xl text-center mb-10">
          {error}
        </div>
      )}

      {products.length === 0 && !error ? (
        <div className="text-center py-20">
          <div className="text-8xl mb-6">🔍</div>
          <p className="text-2xl font-medium text-black-700">
            No Product Found!!
          </p>
          <p className="text-lg text-black-500 mt-4">
            We Will Back Soon With This Product!! Stay Connected!!.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((item, index) => {
            const p = item || {};

            const name = toTitleCase(
              p.name || `Product #${item.id || index + 1}`
            );
            const slug = p.slug || "";
            const shortDesc =
              p.short_description || "No description available";
            const modelNumber = p.model_number || "N/A";

            const firstCat = p.categories?.[0] || {};
            const industry = firstCat.industry || {};

            const industrySlug = industry.slug || "products";
            const categorySlug = firstCat.slug || "uncategorized";

            const href = slug
              ? `/products/${industrySlug}/${categorySlug}/${slug}`
              : "/products";

            const imageUrl = getStrapiMedia(p.image?.url);

            return (
              <Link
                key={item.id || `prod-${index}`}
                href={href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-red-500 transition-all duration-300 flex flex-col min-h-[420px]"
              >
                <div className="relative h-[260px] bg-white border-b border-gray-100 p-5 flex items-center justify-center">
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={320}
                    height={240}
                    className="object-contain max-h-full w-auto group-hover:scale-105 transition-transform duration-500"
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-red-600 line-clamp-2 min-h-[3rem]">
                    {name}
                  </h3>

                  {modelNumber !== "N/A" && (
                    <p className="text-sm text-red-600 font-medium mt-1">
                      Model: {modelNumber}
                    </p>
                  )}

                  <p className="text-sm md:text-base text-gray-600 mt-3 line-clamp-4 flex-grow">
                    {shortDesc}
                  </p>

                  <div className="mt-auto pt-4 text-red-600 font-medium">
                    View Details →
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}