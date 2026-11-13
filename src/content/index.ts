import type { Content } from './types';
import type { Lang } from '../i18n/routes';
import pt from './pt';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';

export const CONTENT: Record<Lang, Content> = { pt, en, es, fr, it };

export function t(lang: Lang): Content {
  return CONTENT[lang];
}

export const COMPANY = {
  name: 'Poursuite',
  legalName: 'Poursuite Investments Consultoria Ltda.',
  taxId: '38.425.501/0001-92',
  email: 'contato@poursuite.com.br',
  street: 'Av. Brigadeiro Faria Lima, 2369, cj. 1102',
  district: 'Jardim Paulistano',
  city: 'São Paulo',
  region: 'SP',
  postalCode: '01452-922',
  country: 'BR',
};
