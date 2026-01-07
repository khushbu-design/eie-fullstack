import { fetchAPI } from "@/lib/api";

export default async function TestPage() {
  const data = await fetchAPI("/industries?populate=*");

  return (
    <div style={{ padding: "40px" }}>
      <h1>Industries List</h1>

      {data.data.map((item) => (
        <div key={item.id} style={{ marginBottom: "40px" }}>
          {/* ICON BOX */}
          <div
            style={{
              width: "120px",
              height: "120px",
              border: "2px solid #d60000",
              borderRadius: "12px",
              background: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            {item.image && (
              <img
                src={`http://localhost:1337${item.image.url}`}
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          <h2>{item.name}</h2>
          <p>Slug: {item.slug}</p>
        </div>
      ))}
    </div>
  );
}
