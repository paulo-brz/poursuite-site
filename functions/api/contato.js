// Cloudflare Pages Function: recebe o formulário de contato e envia por e-mail via Resend.
// Variáveis de ambiente (Cloudflare Pages > Settings > Variables and secrets):
//   RESEND_API_KEY  (secret)  chave da API do Resend (https://resend.com)
//   CONTACT_TO      destino das mensagens        (padrão: contato@poursuite.com.br)
//   CONTACT_FROM    remetente verificado no Resend (padrão: Site Poursuite <site@poursuite.com.br>)

const THANKS = {
  pt: '/mensagem-enviada/',
  en: '/en/message-sent/',
  es: '/es/mensaje-enviado/',
  fr: '/fr/message-envoye/',
  it: '/it/messaggio-inviato/',
};

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function reply(request, ok, lang, status = 200) {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  if (wantsJson) {
    return new Response(JSON.stringify({ ok }), {
      status: ok ? 200 : status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  const back = ok ? THANKS[lang] || THANKS.pt : (lang === 'pt' ? '/contato/' : `/${lang}/`) + '?erro=1';
  return Response.redirect(new URL(back, request.url).toString(), 303);
}

export async function onRequestPost({ request, env }) {
  let form;
  try {
    form = await request.formData();
  } catch {
    return reply(request, false, 'pt', 400);
  }
  const lang = THANKS[form.get('lang')] ? form.get('lang') : 'pt';

  // Armadilha para robôs: campo invisível preenchido = descarta em silêncio.
  if (form.get('website')) return reply(request, true, lang);

  const data = {
    name: String(form.get('name') || '').trim().slice(0, 120),
    email: String(form.get('email') || '').trim().slice(0, 160),
    company: String(form.get('company') || '').trim().slice(0, 160),
    phone: String(form.get('phone') || '').trim().slice(0, 40),
    profile: String(form.get('profile') || '').trim().slice(0, 80),
    message: String(form.get('message') || '').trim().slice(0, 5000),
    consent: form.get('consent') === 'yes',
  };

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  if (!data.name || !emailOk || !data.message || !data.consent) {
    return reply(request, false, lang, 422);
  }

  if (!env.RESEND_API_KEY) {
    return reply(request, false, lang, 503);
  }

  const html = `
    <h2>Nova mensagem pelo site (${esc(lang.toUpperCase())})</h2>
    <p><strong>Nome:</strong> ${esc(data.name)}<br>
    <strong>E-mail:</strong> ${esc(data.email)}<br>
    <strong>Empresa:</strong> ${esc(data.company) || '-'}<br>
    <strong>Telefone:</strong> ${esc(data.phone) || '-'}<br>
    <strong>Perfil:</strong> ${esc(data.profile) || '-'}</p>
    <p style="white-space:pre-wrap">${esc(data.message)}</p>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM || 'Site Poursuite <site@poursuite.com.br>',
      to: [env.CONTACT_TO || 'contato@poursuite.com.br'],
      reply_to: data.email,
      subject: `Contato pelo site: ${data.name}${data.company ? ' (' + data.company + ')' : ''}`,
      html,
    }),
  });

  return reply(request, res.ok, lang, 502);
}

export function onRequestGet() {
  return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
}
