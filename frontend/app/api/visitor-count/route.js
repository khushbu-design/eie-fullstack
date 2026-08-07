export async function GET() {
  try {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/api\/?$/, '') || 'https://optimistic-friends-ed5888f6c2.strapiapp.com';
    const res = await fetch(`${base}/api/visitor-count`);
    if (!res.ok) return Response.json({ data: { count: 0 } }, { status: 200 });

    const data = await res.json();
    return Response.json({
      data: { count: data.data?.attributes?.count ?? data.data?.count ?? 0 }
    });
  } catch {
    return Response.json({ data: { count: 0 } });
  }
}

export async function PUT(request) {
  try {
    const { count } = await request.json();
    const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/api\/?$/, '') || 'https://optimistic-friends-ed5888f6c2.strapiapp.com';
    const res = await fetch(`${base}/api/visitor-count`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { count } }),
    });
    return Response.json({ success: res.ok });
  } catch {
    return Response.json({ success: false });
  }
}