export default async function handler(req, res) {
  const api = process.env.NEXT_PUBLIC_API_URL || 'https://bernardo-api-divine-silence-5344.fly.dev';
  const url = `${api}/photos`;
  const r = await fetch(url);
  const j = await r.json();
  res.status(r.status).json(j);
}
