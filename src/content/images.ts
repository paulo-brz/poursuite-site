import type { Lang } from '../i18n/routes';

// Fotos do site (Unsplash, licença Unsplash: uso comercial livre). Arquivos em public/img/<chave>-{1600,800,thumb}.webp
export type ImageKey =
  | 'home'
  | 'acquisition'
  | 'recovery'
  | 'investigation'
  | 'duediligence'
  | 'foreign'
  | 'about'
  | 'art-cessao'
  | 'art-devedor';

export const IMAGE_SOURCES: Record<ImageKey, string> = {
  home: 'https://unsplash.com/photos/0phxYpfFHpg',
  acquisition: 'https://unsplash.com/photos/OQMZwNd3ThU',
  recovery: 'https://unsplash.com/photos/K-ZsC7YdJ6Y',
  investigation: 'https://unsplash.com/photos/Eye_or7LxxQ',
  duediligence: 'https://unsplash.com/photos/QV5VoI18Ld8',
  foreign: 'https://unsplash.com/photos/NndKt2kF1L4',
  about: 'https://unsplash.com/photos/y-OydrG9JW4',
  'art-cessao': 'https://unsplash.com/photos/GJao3ZTX9gU',
  'art-devedor': 'https://unsplash.com/photos/FuFaLog6qN0',
};

export const ALT: Record<Lang, Record<ImageKey, string>> = {
  pt: {
    home: 'Rio Pinheiros e Ponte Estaiada, em São Paulo, perto da sede da Poursuite na Faria Lima',
    acquisition: 'Pessoa assinando um contrato de cessão de crédito',
    recovery: 'Pilhas de processos e pastas de documentos antigos',
    investigation: 'Vista aérea de prédios residenciais e comerciais em São Paulo',
    duediligence: 'Calculadora, gráficos e planilhas de análise financeira sobre a mesa',
    foreign: 'Navio de carga com contêineres chegando ao porto',
    about: 'Prédios e área verde na zona oeste de São Paulo',
    'art-cessao': 'Assinatura de contrato com caneta-tinteiro',
    'art-devedor': 'Arquivo com processos antigos numerados',
  },
  en: {
    home: 'Pinheiros River and the Octávio Frias de Oliveira Bridge in São Paulo, near Poursuite’s office on Faria Lima',
    acquisition: 'Person signing a claim assignment agreement',
    recovery: 'Stacks of old case files and document folders',
    investigation: 'Aerial view of residential and office buildings in São Paulo',
    duediligence: 'Calculator, charts and financial analysis papers on a desk',
    foreign: 'Container ship arriving at port',
    about: 'Buildings and green areas in the west of São Paulo',
    'art-cessao': 'Signing a contract with a fountain pen',
    'art-devedor': 'Archive of old numbered case files',
  },
  es: {
    home: 'Río Pinheiros y puente Octávio Frias de Oliveira en São Paulo, cerca de la oficina de Poursuite en Faria Lima',
    acquisition: 'Persona firmando un contrato de cesión de crédito',
    recovery: 'Pilas de expedientes y carpetas de documentos antiguos',
    investigation: 'Vista aérea de edificios residenciales y de oficinas en São Paulo',
    duediligence: 'Calculadora, gráficos y papeles de análisis financiero sobre la mesa',
    foreign: 'Buque portacontenedores llegando al puerto',
    about: 'Edificios y zonas verdes en el oeste de São Paulo',
    'art-cessao': 'Firma de un contrato con pluma estilográfica',
    'art-devedor': 'Archivo de expedientes antiguos numerados',
  },
  fr: {
    home: 'La rivière Pinheiros et le pont Octávio Frias de Oliveira à São Paulo, près du bureau de Poursuite sur la Faria Lima',
    acquisition: 'Signature d’un contrat de cession de créance',
    recovery: 'Piles de dossiers de procédure et de chemises anciennes',
    investigation: 'Vue aérienne d’immeubles résidentiels et de bureaux à São Paulo',
    duediligence: 'Calculatrice, graphiques et documents d’analyse financière sur un bureau',
    foreign: 'Porte-conteneurs arrivant au port',
    about: 'Immeubles et espaces verts dans l’ouest de São Paulo',
    'art-cessao': 'Signature d’un contrat au stylo plume',
    'art-devedor': 'Archives de dossiers anciens numérotés',
  },
  it: {
    home: 'Il fiume Pinheiros e il ponte Octávio Frias de Oliveira a San Paolo, vicino all’ufficio di Poursuite sulla Faria Lima',
    acquisition: 'Firma di un contratto di cessione del credito',
    recovery: 'Pile di fascicoli processuali e cartelle di documenti',
    investigation: 'Veduta aerea di edifici residenziali e uffici a San Paolo',
    duediligence: 'Calcolatrice, grafici e documenti di analisi finanziaria sulla scrivania',
    foreign: 'Nave portacontainer in arrivo al porto',
    about: 'Edifici e aree verdi nella zona ovest di San Paolo',
    'art-cessao': 'Firma di un contratto con la penna stilografica',
    'art-devedor': 'Archivio di vecchi fascicoli numerati',
  },
};
