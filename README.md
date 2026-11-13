# Site Poursuite (poursuite.com.br)

Site estático em [Astro](https://astro.build), em 5 idiomas (PT na raiz; `/en/`, `/es/`, `/fr/`, `/it/`). Publicado na hospedagem HostGator (cPanel) da Poursuite.

## Estrutura

- `src/i18n/routes.ts`: idiomas, chaves de página e slugs traduzidos (a URL de cada página em cada idioma)
- `src/content/{pt,en,es,fr,it}.ts`: todo o texto do site, por idioma
- `src/articles/*.md`: artigos da seção Conteúdos (só PT, por enquanto)
- `src/views/`: layout de cada tipo de página (home, serviço, quem somos, contato etc.)
- `functions/api/contato.js`: envio do formulário de contato por e-mail (Resend)
- `public/_redirects`: redirecionamento 301 das URLs do WordPress antigo
- `public/_headers`: cabeçalhos de segurança e cache

## SEO incluído

- Uma URL por serviço e por idioma, com slug traduzido
- `hreflang` recíproco entre os 5 idiomas + `x-default`, também no `sitemap.xml`
- `canonical`, meta description, Open Graph (imagem por idioma) e Twitter Card
- Dados estruturados: FinancialService (empresa), WebSite, Service, FAQPage, BreadcrumbList e Article
- `lang="pt-BR"` correto (o site antigo declarava `pt-PT`)
- Um H1 por página e hierarquia de títulos
- Fontes servidas pelo próprio site (sem Google Fonts, melhor para LGPD/GDPR e velocidade)

## Comandos

```bash
npm install
npm run dev      # servidor local em http://localhost:4321
npm run build    # gera o site em dist/
```

## Publicar no Cloudflare Pages

1. Suba esta pasta para um repositório no GitHub.
2. Cloudflare > Workers & Pages > Create > Pages > Connect to Git > escolha o repositório.
3. Build command: `npm run build`. Output directory: `dist`.
4. Em Settings > Variables and secrets, crie:
   - `RESEND_API_KEY` (secret): chave do Resend, com o domínio poursuite.com.br verificado
   - `CONTACT_TO` (opcional): e-mail que recebe as mensagens (padrão: contato@poursuite.com.br)
   - `CONTACT_FROM` (opcional): remetente (padrão: `Site Poursuite <site@poursuite.com.br>`)
5. Em Custom domains, adicione `poursuite.com.br` e `www.poursuite.com.br`.
6. Depois de no ar, envie `https://poursuite.com.br/sitemap.xml` no Google Search Console.

## Adicionar um artigo

Crie `src/articles/slug-do-artigo.md` com o cabeçalho:

```md
---
title: 'Título do artigo'
seoTitle: 'Título para o Google | Poursuite'
description: 'Resumo de até 160 caracteres.'
date: '2026-11-12'
related: investigation   # acquisition | recovery | investigation | duediligence | foreign
---
```

## Fotos

As fotos (pasta `public/img`) são do Unsplash, sob a licença Unsplash (uso comercial gratuito, sem obrigação de crédito). A origem de cada uma está em `src/content/images.ts`. Para trocar uma foto, substitua os três arquivos `<chave>-1600.webp`, `<chave>-800.webp` e `<chave>-thumb.webp` (1600×600, 800×300 e 480×320).

## Publicação na HostGator (cPanel)

O site gerado fica versionado na pasta `dist/` deste repositório.

1. Rode `npm run build` e faça commit da pasta `dist/` atualizada.
2. Envie para o GitHub (`git push`).
3. No cPanel, abra **Git™ Version Control**, clique em **Gerenciar** no repositório `poursuite-site`, aba **Pull or Deploy**: **Update from Remote** e depois **Deploy HEAD Commit**.

O arquivo `.cpanel.yml` copia `dist/` para `public_html` sem apagar nada. Redirecionamentos e cabeçalhos ficam em `public/.htaccess`; o formulário de contato usa `public/api/contato.php` (função `mail()` da hospedagem, destino contato@poursuite.com.br).

O WordPress antigo foi guardado (não apagado) fora da pasta pública.
