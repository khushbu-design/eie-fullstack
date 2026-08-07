export async function POST(request) {
  try {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/api\/?$/, '') || 'https://optimistic-friends-ed5888f6c2.strapiapp.com';
    const body = await request.json();
    const res = await fetch(`${base}/api/visitor-logs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          page: body.page || 'Unknown',
          ip: body.ip,
          city: body.city || 'Ahmedabad',
          country: body.country || 'India',
          userAgent: body.userAgent || 'Unknown',
          referrer: body.referrer || '',
        }
      }),
    });
    return Response.json({ success: res.ok });
  } catch {
    return Response.json({ success: false });
  }
}

export async function GET() {
  try {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL?.replace(/\/api\/?$/, '') || 'https://optimistic-friends-ed5888f6c2.strapiapp.com';
    const res = await fetch(`${base}/api/visitor-logs?sort=timestamp:desc&pagination[limit]=200`);
    const data = await res.json();
    return Response.json(data);
  } catch {
    return Response.json({ data: [] });
  }
}