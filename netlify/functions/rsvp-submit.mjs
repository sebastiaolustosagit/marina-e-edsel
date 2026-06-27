// Recebe a confirmação de presença e grava no Supabase (service key fica no servidor).
const TABLE = 'rsvp_marina_edsel';

export default async (request) => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }

  // Lê o corpo (aceita urlencoded ou JSON)
  let data = {};
  const ct = request.headers.get('content-type') || '';
  try {
    if (ct.includes('application/json')) {
      data = await request.json();
    } else {
      const text = await request.text();
      data = Object.fromEntries(new URLSearchParams(text));
    }
  } catch {
    return json({ ok: false, error: 'bad_body' }, 400);
  }

  // Honeypot anti-spam: se preenchido, finge sucesso e ignora
  if ((data['bot-field'] || '').toString().trim()) {
    return json({ ok: true });
  }

  const nome = (data.nome || '').toString().trim().slice(0, 120);
  const comparecimento = (data.comparecimento || '').toString().trim().slice(0, 60);
  let pessoas = parseInt(data.pessoas, 10);
  if (!Number.isFinite(pessoas) || pessoas < 1) pessoas = 1;
  if (pessoas > 50) pessoas = 50;

  if (!nome || !comparecimento) {
    return json({ ok: false, error: 'missing_fields' }, 422);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) {
    return json({ ok: false, error: 'server_misconfigured' }, 500);
  }

  try {
    const res = await fetch(`${url}/rest/v1/${TABLE}`, {
      method: 'POST',
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal'
      },
      body: JSON.stringify({ nome, comparecimento, pessoas })
    });
    if (!res.ok) {
      const detail = (await res.text()).slice(0, 200);
      return json({ ok: false, error: 'db_error', detail }, 502);
    }
  } catch (e) {
    return json({ ok: false, error: 'fetch_failed', detail: String(e).slice(0, 200) }, 502);
  }

  return json({ ok: true });
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}
