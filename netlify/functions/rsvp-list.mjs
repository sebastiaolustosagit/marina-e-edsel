// Retorna as confirmações + resumo, protegido por senha (conferida no servidor).
const TABLE = 'rsvp_marina_edsel';

export default async (request) => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'method_not_allowed' }, 405);
  }

  let body = {};
  try {
    body = await request.json();
  } catch {
    return json({ ok: false, error: 'bad_body' }, 400);
  }

  const pw = (body.password || '').toString();
  const expected = process.env.DASHBOARD_PASSWORD || '';
  if (!expected || pw !== expected) {
    return json({ ok: false, error: 'unauthorized' }, 401);
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_KEY;
  if (!url || !key) {
    return json({ ok: false, error: 'server_misconfigured' }, 500);
  }

  let rows = [];
  try {
    const res = await fetch(
      `${url}/rest/v1/${TABLE}?select=*&order=created_at.desc`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } }
    );
    if (!res.ok) {
      const detail = (await res.text()).slice(0, 200);
      return json({ ok: false, error: 'db_error', detail }, 502);
    }
    rows = await res.json();
  } catch (e) {
    return json({ ok: false, error: 'fetch_failed', detail: String(e).slice(0, 200) }, 502);
  }

  const vai = (r) => /^sim/i.test((r.comparecimento || '').trim());
  const confirmados = rows.filter(vai);
  const naoVao = rows.filter((r) => !vai(r));
  const summary = {
    registros: rows.length,
    confirmados: confirmados.length,
    nao_poderao: naoVao.length,
    total_convidados: confirmados.reduce((s, r) => s + (parseInt(r.pessoas, 10) || 0), 0)
  };

  return json({ ok: true, summary, rows });
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });
}
