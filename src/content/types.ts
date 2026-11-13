import type { PageKey, ServiceKey } from '../i18n/routes';

export interface Meta {
  title: string;
  description: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  h2: string;
  paras?: string[];
  bullets?: string[];
}

export interface ServiceContent {
  /** Nome curto (menu, cartões, breadcrumbs). */
  name: string;
  /** Resumo de uma frase usado na home e nos links entre páginas. */
  summary: string;
  h1: string;
  lede: string;
  forWhomTitle: string;
  forWhom: string[];
  sections: Section[];
  faq: Faq[];
  ctaTitle: string;
  ctaText: string;
}

export interface Content {
  ui: {
    skip: string;
    menu: string;
    close: string;
    services: string;
    about: string;
    insights?: string;
    contact: string;
    language: string;
    home: string;
    ctaPrimary: string;
    ctaSecondary: string;
    readMore: string;
    faqTitle: string;
    otherServices: string;
    footerTagline: string;
    footerServices: string;
    footerCompany: string;
    footerContact: string;
    legalName: string;
    cnpj: string;
    rights: string;
    privacy: string;
    notLawFirm: string;
    breadcrumb: string;
  };
  meta: Record<PageKey, Meta>;
  home: {
    h1: string;
    lede: string;
    trail: {
      title: string;
      execution: string;
      executionDetail: string;
      debtor: string;
      debtorDetail: string;
      nodes: { label: string; detail: string }[];
      caption: string;
    };
    servicesTitle: string;
    servicesIntro: string;
    audienceTitle: string;
    audience: { title: string; text: string }[];
    methodTitle: string;
    methodIntro: string;
    steps: { title: string; text: string }[];
    insightTitle: string;
    insightText: string[];
    internationalTitle: string;
    internationalText: string;
    internationalLink: string;
    faq: Faq[];
    finalTitle: string;
    finalText: string;
  };
  services: Record<ServiceKey, ServiceContent>;
  about: {
    h1: string;
    lede: string;
    sections: Section[];
    principlesTitle: string;
    principles: { title: string; text: string }[];
  };
  contact: {
    h1: string;
    lede: string;
    formTitle: string;
    name: string;
    email: string;
    company: string;
    phone: string;
    profile: string;
    profiles: string[];
    message: string;
    messageHint: string;
    consent: string;
    submit: string;
    sending: string;
    error: string;
    directTitle: string;
    emailLabel: string;
    addressLabel: string;
    address: string;
    confidentiality: string;
  };
  privacy: {
    h1: string;
    updated: string;
    sections: Section[];
  };
  thanks: {
    h1: string;
    text: string;
    back: string;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
}
