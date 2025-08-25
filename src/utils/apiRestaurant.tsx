const base_url = import.meta.env.VITE_API_BASE_URL;

export async function getMenu() {
  const res = await fetch(`${base_url}/menu`, {
    headers: { "Accept": "application/json" },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to fetch menu: ${res.status} → ${text}`);
  }
  const data = res.json()
  return data;
}