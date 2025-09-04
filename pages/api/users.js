export default async function handler(req, res) {
  const api = process.env.NEXT_PUBLIC_API_URL || 'http://95.217.239.121:4000/'; 
  const url = `${api}/users`;
  if (req.method === 'GET') {
    const r = await fetch(url);
    const j = await r.json();
    return res.status(r.status).json(j);
  }
  if (req.method === 'POST') {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const j = await r.json();
    return res.status(r.status).json(j);
  }
  res.setHeader('Allow', ['GET','POST']);
  res.status(405).end();
}
