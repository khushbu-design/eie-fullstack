import Link from "next/link";
import { fetchAPI } from "@/lib/api";

export default async function IndustriesPage() {
  const industries = await fetchAPI("/industries");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Industries</h1>

      <ul>
        {industries.data.map((industry) => (
          <li key={industry.id} style={{ marginBottom: "10px" }}>
            <Link href={`/products/${industry.id}`}>
              {industry.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
