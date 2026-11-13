import { SITE, LOCALE, LANGS, type Lang } from '../i18n/routes';
import { COMPANY } from '../content';
import type { Faq } from '../content/types';

const ORG_ID = `${SITE}/#organization`;

export function organization(lang: Lang, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': ORG_ID,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    taxID: COMPANY.taxId,
    url: SITE + '/',
    logo: `${SITE}/logo-512.png`,
    image: `${SITE}/og/${lang}.png`,
    email: COMPANY.email,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY.street,
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.region,
      postalCode: COMPANY.postalCode,
      addressCountry: COMPANY.country,
    },
    areaServed: { '@type': 'Country', name: 'Brazil' },
    knowsLanguage: LANGS.map((l) => LOCALE[l]),
  };
}

export function website(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE + '/',
    name: 'Poursuite',
    inLanguage: LOCALE[lang],
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function faqPage(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function service(lang: Lang, name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    inLanguage: LOCALE[lang],
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Brazil' },
  };
}

export function article(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: opts.url,
    url: opts.url,
    inLanguage: 'pt-BR',
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    image: `${SITE}/og/pt.png`,
  };
}
