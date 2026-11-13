import { LANGS, PAGE_KEYS, NOINDEX, SITE, alternatesFor, urlFor } from '../i18n/routes';
import { ARTICLES } from '../lib/articles';

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const entries: string[] = [];

  for (const key of PAGE_KEYS) {
    if (NOINDEX.includes(key)) continue;
    const alts = alternatesFor(key)
      .map((a) => `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`)
      .join('\n');
    for (const lang of LANGS) {
      entries.push(`  <url>\n    <loc>${urlFor(key, lang)}</loc>\n    <lastmod>${today}</lastmod>\n${alts}\n  </url>`);
    }
  }

  entries.push(`  <url>\n    <loc>${SITE}/conteudos/</loc>\n    <lastmod>${today}</lastmod>\n  </url>`);
  for (const a of ARTICLES) {
    entries.push(`  <url>\n    <loc>${SITE}/conteudos/${a.slug}/</loc>\n    <lastmod>${a.updated ?? a.date}</lastmod>\n  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
