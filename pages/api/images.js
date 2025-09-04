export default async function handler(req, res) {
  const api = process.env.NEXT_PUBLIC_API_URL || 'http://95.217.239.121:4000/';  
  const url = `${api}/photos`;
  const r = await fetch(url);
  const j = await r.json();
  res.status(r.status).json(j);
}
