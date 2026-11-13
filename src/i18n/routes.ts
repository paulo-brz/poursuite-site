// Rotas do site em cada idioma. Cada página tem uma chave fixa e um slug traduzido.
// Português é o idioma principal e fica na raiz; os demais ficam em subpastas.

export const SITE = 'https://poursuite.com.br';

export const LANGS = ['pt', 'en', 'es', 'fr', 'it'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'pt';

export const LOCALE: Record<Lang, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
  fr: 'fr',
  it: 'it',
};

export const OG_LOCALE: Record<Lang, string> = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  it: 'it_IT',
};

export const LANG_NAME: Record<Lang, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
};

export const PAGE_KEYS = [
  'home',
  'acquisition',
  'recovery',
  'investigation',
  'duediligence',
  'foreign',
  'about',
  'contact',
  'privacy',
  'thanks',
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

export const SERVICE_KEYS = ['acquisition', 'recovery', 'investigation', 'duediligence', 'foreign'] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SLUGS: Record<PageKey, Record<Lang, string>> = {
  home: { pt: '', en: '', es: '', fr: '', it: '' },
  acquisition: {
    pt: 'aquisicao-de-creditos-judiciais',
    en: 'judicial-credit-acquisition',
    es: 'compra-de-creditos-judiciales',
    fr: 'rachat-de-creances-judiciaires',
    it: 'acquisto-di-crediti-giudiziali',
  },
  recovery: {
    pt: 'recuperacao-de-creditos-por-exito',
    en: 'contingency-fee-debt-recovery',
    es: 'recuperacion-de-creditos-a-exito',
    fr: 'recouvrement-de-creances-au-resultat',
    it: 'recupero-crediti-a-successo',
  },
  investigation: {
    pt: 'investigacao-patrimonial',
    en: 'asset-tracing-brazil',
    es: 'investigacion-patrimonial',
    fr: 'enquete-patrimoniale',
    it: 'indagini-patrimoniali',
  },
  duediligence: {
    pt: 'due-diligence-de-carteiras-de-credito',
    en: 'credit-portfolio-due-diligence',
    es: 'due-diligence-de-carteras-de-credito',
    fr: 'due-diligence-de-portefeuilles-de-creances',
    it: 'due-diligence-di-portafogli-di-crediti',
  },
  foreign: {
    pt: 'credores-estrangeiros',
    en: 'debt-recovery-in-brazil',
    es: 'cobro-de-deudas-en-brasil',
    fr: 'recouvrement-de-creances-au-bresil',
    it: 'recupero-crediti-in-brasile',
  },
  about: { pt: 'quem-somos', en: 'about', es: 'quienes-somos', fr: 'qui-sommes-nous', it: 'chi-siamo' },
  contact: { pt: 'contato', en: 'contact', es: 'contacto', fr: 'contact', it: 'contatti' },
  privacy: {
    pt: 'politica-de-privacidade',
    en: 'privacy-policy',
    es: 'politica-de-privacidad',
    fr: 'politique-de-confidentialite',
    it: 'informativa-privacy',
  },
  thanks: { pt: 'mensagem-enviada', en: 'message-sent', es: 'mensaje-enviado', fr: 'message-envoye', it: 'messaggio-inviato' },
};

/** Páginas que não entram no sitemap nem são indexadas. */
export const NOINDEX: PageKey[] = ['thanks'];

/** Caminho relativo (com barra final) de uma página num idioma. */
export function pathFor(key: PageKey, lang: Lang): string {
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`;
  const slug = SLUGS[key][lang];
  return `${prefix}/${slug ? slug + '/' : ''}`.replace(/\/+/g, '/');
}

export function urlFor(key: PageKey, lang: Lang): string {
  return SITE + pathFor(key, lang);
}

/** Alternativas hreflang de uma página (todas as línguas + x-default em PT). */
export function alternatesFor(key: PageKey) {
  const list = LANGS.map((l) => ({ hreflang: LOCALE[l], href: urlFor(key, l) }));
  list.push({ hreflang: 'x-default', href: urlFor(key, DEFAULT_LANG) });
  return list;
}
