import { fetchAPI } from '@/lib/api';
import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia } from '@/lib/strapi-media';

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q?.trim() || '';

  const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace('/api', '') || 'https://popular-boot-8befa4f005.strapiapp.com';

  if (!query) {
    return (
      <div className="py-20 md:py-32 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700">Search Products</h1>
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          Type product name, model, or keyword in the search bar above
        </p>
      </div>
    );
  }

  // Fixed & correct populate syntax for Strapi v4/v5
  const strapiQuery = new URLSearchParams({
    'filters[$or][0][name][$containsi]': query,
    'filters[$or][1][short_description][$containsi]': query,
    'filters[$or][2][model_number][$containsi]': query,
    // Correct populate – array format works best
    'populate[image][populate]': '*',
    'populate[category][populate]': 'industry',
    'pagination[limit]': '24',
  }).toString();

  let products = [];
  let error = null;

  try {
    const res = await fetchAPI(`/products?${strapiQuery}`);
    products = res.data || [];
  } catch (err) {
    console.error('Search API Error:', err);
    error = 'Failed to load search results. Please try again later.';
  }

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-red-700">
          Search Results for "<span className="text-gray-700">{query}</span>"
        </h1>
        <p className="text-gray-600 text-lg">
          {products.length} products found
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-6 rounded-xl text-center mb-10">
          {error}
        </div>
      )}

      {products.length === 0 && !error ? (
        <div className="text-center py-20">
          <div className="text-8xl mb-6">🔍</div>
          <p className="text-2xl font-medium text-gray-700">No products found</p>
          <p className="text-lg text-gray-500 mt-3">
            Try different keywords or check spelling
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((item) => {
            const p = item.attributes || item;
            const name = p.name || 'Product without name';
            const slug = p.slug || '';
            const shortDesc = p.short_description || 'No description available';
            const modelNumber = p.model_number || '';

            const category = p.category?.data?.attributes || {};
            const industry = category.industry?.data?.attributes || {};

            const industrySlug = industry.slug || 'products';
            const categorySlug = category.slug || 'all';
            const href = slug ? `/products/${industrySlug}/${categorySlug}/${slug}` : '/products';

            // Most reliable image path – works 100%
            const imageObj = p.image?.data?.attributes || p.image;
            const imageUrl = imageObj?.url 
              ? getStrapiMedia(imageObj.url) 
              : '/placeholder.jpg';

            return (
              <Link
                key={item.id}
                href={href}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:border-red-500 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] bg-gray-50">
                  <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAErgJ7J4l7bwAAAABJRU5ErkJggg=="
                  />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[2.8rem]">
                    {name}
                  </h3>

                  {modelNumber && (
                    <p className="text-sm text-gray-500 mt-1">Model: {modelNumber}</p>
                  )}

                  <p className="text-sm md:text-base text-gray-600 mt-3 line-clamp-3 min-h-[4.5rem]">
                    {shortDesc}
                  </p>

                  <div className="mt-4 text-red-600 font-medium text-sm md:text-base">
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