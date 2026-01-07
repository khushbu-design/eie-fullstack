import { fetchAPI } from "@/lib/api";
import Link from "next/link";

export default async function ProductsPage() {
  const industries = await fetchAPI("/industries?populate=*");

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>Industries</h1>

      <style>{`
        .card {
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          animation: fadeIn 0.6s ease forwards;
          opacity: 0;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          border-color: #9d0000 !important;
        }

        .icon-box img {
          transition: transform 0.4s ease;
        }

        .card:hover .icon-box img {
          transform: scale(1.15);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {industries.data.map((item) => (
          <Link
            key={item.id}
            href={`/products/${item.slug}`}
            className="card"
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "10px",
              textDecoration: "none",
              color: "#000",
              textAlign: "center",
              background: "#fff",
            }}
          >
            <div
              className="icon-box"
              style={{
                width: "120px",
                height: "120px",
                border: "2px solid #d60000",
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
                overflow: "hidden",
              }}
            >
              {item.image && (
                <img
                  src={
                    process.env.NEXT_PUBLIC_STRAPI_URL.replace("/api", "") +
                    item.image.url
                  }
                  style={{
                    width: "70%",
                    height: "70%",
                    objectFit: "contain",
                  }}
                />
              )}
            </div>

            <h2 style={{ fontSize: "20px", marginTop: "15px" }}>{item.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
