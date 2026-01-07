import { fetchAPI } from '@/lib/api';
import Link from 'next/link';

export default async function SearchPage({ searchParams }) {
  const { q } = await searchParams;
  const query = q?.trim() || '';
  const base = process.env.NEXT_PUBLIC_STRAPI_URL.replace('/api', '');

  if (!query) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold text-red-700">Search Products</h1>
        <p className="text-xl text-gray-600 mt-4">Type something in the search bar to find products.</p>
      </div>
    );
  }

  const strapiQuery = new URLSearchParams({
    'filters[$or][0][name][$containsi]': query,
    'filters[$or][1][short_description][$containsi]': query,
    'filters[$or][2][model_number][$containsi]': query,
    'filters[$or][3][specification][key][$containsi]': query,
    'filters[$or][4][specification][value][$containsi]': query,
    'filters[$or][5][variants][name][$containsi]': query,
    'filters[$or][6][accessories][name][$containsi]': query,
    'filters[$or][7][spares][name][$containsi]': query,
    'populate[0]': 'image',
    'populate[1]': 'category',
    'populate[2]': 'category.industry',
    'pagination[limit]': '100',
  }).toString();

  let products = [];
  try {
    const res = await fetchAPI(`/products?${strapiQuery}`);
    products = res.data || [];

    console.log('Full Search API Response:', JSON.stringify(res, null, 2));
  } catch (error) {
    console.error('Search API Error:', error);
  }

  return (
    <div className="py-20 max-w-7xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-center mb-12 text-red-700">
        Search Results for "{query}"
      </h1>

      {products.length === 0 ? (
        <p className="text-center text-2xl text-gray-600 py-20">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((productItem) => {

            const id = productItem.id || 'unknown';

            const attr = productItem.attributes || productItem || {};

            const name = attr.name || attr.title || `Product ${id} (No name)`;
            const shortDesc = attr.short_description || attr.description || 'No description available';
            const slug = attr.slug || '';
            const modelNumber = attr.model_number || '';

            const categoryAttr = attr.category?.data?.attributes || attr.category || {};
            const industryAttr = categoryAttr.industry?.data?.attributes || categoryAttr.industry || {};

            const industrySlug = industryAttr.slug || 'products';
            const categorySlug = categoryAttr.slug || 'all';

            let imageUrl = '/placeholder.jpg';
            const imageObj = attr.image?.data || attr.image;
            if (imageObj?.attributes?.url) {
              imageUrl = `${base}${imageObj.attributes.url}`;
            } else if (imageObj?.url) {
              imageUrl = `${base}${imageObj.url}`;
            }

            const href = slug ? `/products/${industrySlug}/${categorySlug}/${slug}` : '/products';

            return (
              <Link
                key={id}
                href={href}
                className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <div className="h-64 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-600 mb-2">{name}</h3>
                  {modelNumber && (
                    <p className="text-sm text-gray-500 mb-2">Model: {modelNumber}</p>
                  )}
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">{shortDesc}</p>
                  <span className="text-red-600 font-semibold hover:underline">
                    View Details →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}