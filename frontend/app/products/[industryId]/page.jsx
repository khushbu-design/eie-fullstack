import { fetchAPI } from "@/lib/api";
import Link from "next/link";
import "./style.css"; 

export default async function IndustryPage({ params }) {
  const { industryId } = params;

  const industryRes = await fetchAPI(
    `/industries?filters[slug][$eq]=${industryId}&populate=*`
  );

  if (!industryRes.data || industryRes.data.length === 0) {
    return <p>Industry not found</p>;
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
        {categories.data.map((cat) => (
          <Link
            key={cat.id}
            href={`/products/${industryId}/${cat.slug}`}
            className="category-card"
          >
            <h2 className="cat-title">{cat.name}</h2>
            <p className="cat-desc">Explore all products in this category →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
