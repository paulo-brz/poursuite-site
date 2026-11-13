import type { ServiceKey } from '../i18n/routes';
import type { ImageKey } from '../content/images';

export interface ArticleFrontmatter {
  title: string;
  seoTitle?: string;
  description: string;
  date: string;
  updated?: string;
  related?: ServiceKey;
  image?: ImageKey;
}

type Mod = { frontmatter: ArticleFrontmatter; Content: any; file: string };

const modules = import.meta.glob<Mod>('../articles/*.md', { eager: true });

export const ARTICLES = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function formatDatePt(iso: string) {
  return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(iso + 'T12:00:00Z')
  );
}
