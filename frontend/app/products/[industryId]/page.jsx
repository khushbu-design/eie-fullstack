import { fetchAPI } from "@/lib/api";
import Link from "next/link";
import "./style.css";

export default async function IndustryPage({ params }) {
  // મહત્વનું: params ને await કરવું પડે છે (Next.js 13+ App Router rule)
  const { industryId } = await params;

  const industryRes = await fetchAPI(
    `/industries?filters[slug][$eq]=${industryId}&populate=*`
  );

  if (!industryRes.data || industryRes.data.length === 0) {
    return <p className="text-center py-20 text-2xl">Industry not found</p>;
  }

  const industry = industryRes.data[0];

  const categories = await fetchAPI(
    `/categories?filters[industry][id][$eq]=${industry.id}&populate=*`
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px", fontWeight: "600" }}>
        Categories for {industry.name}
      </h1>

      <div className="category-grid">
        {categories.data.length === 0 ? (
          <p className="text-center text-xl text-gray-600">
            No categories found for this industry.
          </p>
        ) : (
          categories.data.map((cat) => (
            <Link
              key={cat.id}
              href={`/products/${industryId}/${cat.slug}`}
              className="category-card"
            >
              <h2 className="cat-title">{cat.name}</h2>
              <p className="cat-desc">Explore all products in this category →</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}