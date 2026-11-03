# Portal Acadêmico do CACC — extensão incremental

Esta migração adiciona **Vida Acadêmica**, **Oportunidades** e **Notícias** ao site existente, mantendo os documentos e a aparência do redesign anterior. Guias e Acervo permanecem nas rotas antigas `/manuais` e `/acervo`, mas passam a ser acessados pela página `/vida-academica`.

## Onde publicar

Cada publicação é um arquivo `.md` em uma das coleções:

- `content/noticias/` — notícias e comunicados completos (aparecem também na página inicial)
- `content/oportunidades/` — vagas, editais, bolsas, estágios, hackathons e seleções (oportunidades com inscrição confirmada aparecem na home)
- `content/disciplinas/` — ementas, bibliografia, pré-requisitos e PPCs; navegação em `/vida-academica/disciplinas`
- `content/vida-academica/` — páginas de procedimentos e orientações acadêmicas

Os modelos `modelo.md.example` **não aparecem no site**. Duplique o modelo desejado, renomeie com um slug descritivo (ex.: `bolsa-iniciacao-cientifica.md`), atualize o frontmatter e defina `published: true` depois de revisar.

## Frontmatter de cada coleção

### Notícias

```yaml
---
title: "Título"
description: "Resumo"
date: "2026-11-03"
category: "Acadêmico"
author: "CACC"
image: "" # opcional, usar arquivo servido em /public ou URL confiável
source_url: "https://..." # opcional; fonte original
published: true
---
```

### Oportunidades

```yaml
---
title: "Título da vaga/edital"
description: "Resumo"
category: "Bolsa" # Estágio, IC, Monitoria, Hackathon, Emprego etc.
organization: "Instituição responsável"
date: "2026-11-03"
deadline: "2026-12-10" # YYYY-MM-DD; omita se não houver
status: "aberta" # aberta | encerrada | cancelada | sem_prazo
source_url: "https://..."
published: true
---
```

O site nunca presume que uma oportunidade sem prazo esteja aberta: ela só entra em “abertas” quando `status` é `aberta` ou `sem_prazo`, ou quando existe um prazo futuro conhecido. `status: encerrada` ou `cancelada` prevalece mesmo que o prazo ainda não tenha expirado.

### Disciplinas

```yaml
---
title: "Nome oficial"
code: "Código oficial"
ppc: ["2024"]  # Pode aceitar mais de uma matriz, se os dados forem equivalentes
semester: "1"
workload: "60h"
prerequisites: []
description: "Resumo"
source_url: "https://..."
published: true
---
```

Não publique códigos, cargas horárias ou pré-requisitos antes de conferir com o PPC correspondente. Se uma disciplina é diferente entre PPCs, prefira arquivos separados.

### Páginas de Vida Acadêmica

```yaml
---
title: "Procedimento"
description: "Resumo"
category: "Estágio e TCC"
updated: "2026-11-03"
source_url: "https://..."
published: true
---
```

## Markdown

O corpo usa **o mesmo renderizador `renderMarkdown()` de `src/lib/content.ts`**: títulos `##` e `###`, listas, links, imagens, tabelas, trechos de código etc. O sumário lateral é criado automaticamente quando o texto contém ao menos três títulos de nível 2. Não é necessário instalar um CMS ou alterar o carregador original.

**Segurança:** como a aplicação renderiza HTML do Markdown, permita edições apenas de colaboradores de confiança e revise os PRs antes de publicar. Evite inserir HTML arbitrário em documentos.

## Rotas novas

- `/vida-academica`
- `/vida-academica/disciplinas`
- `/vida-academica/disciplinas/$slug`
- `/vida-academica/$slug`
- `/oportunidades`
- `/oportunidades/$slug`
- `/noticias`
- `/noticias/$slug`

As rotas existentes de Eventos, Projetos, Gestão, Lojinha, Acervo e Manuais **não são removidas**.

## Instalação

1. Crie uma branch de trabalho (`git switch -c feature/portal-academico`) depois de confirmar `git status --short` vazio.
2. Baixe `cacc-portal-academico.zip` e `instalar_portal_cacc.py` para `~/Downloads`.
3. Na raiz do site: `python3 ~/Downloads/instalar_portal_cacc.py --zip ~/Downloads/cacc-portal-academico.zip --check`.
4. Se a prévia estiver correta: execute o mesmo comando com `--apply`.
5. `npm run build && npm run dev`; verifique as páginas e `git diff --check`.
6. Adicione arquivos Markdown reais quando as informações estiverem confirmadas e envie um PR para a `main`.

O instalador não substitui arquivos existentes sem necessidade. Ele **só modifica o `NAV` no Shell e insere componentes independentes na home**; todos os outros códigos existentes ficam intocados. Se a estrutura local divergir, a instalação é interrompida para revisão.

<!-- CACC-MODELOS-INICIO -->
## Modelos de publicação para todas as áreas

Agora existem modelos completos `modelo-completo.md.example` nas pastas de Eventos, Projetos, Lojinha, Manuais, Avisos, Acervo, Notícias, Oportunidades, Disciplinas e Vida Acadêmica. Os conteúdos especiais de Gestão e configuração geral também têm modelos de referência. Esses arquivos **não aparecem no site** até serem copiados como `.md` e preenchidos.

Para a lista de campos, fluxos de publicação, classificação `past/upcoming`, funcionamento das oportunidades abertas, categorias, links e imagens, consulte [`docs/GUIA-DE-CONTEUDO.md`](docs/GUIA-DE-CONTEUDO.md) e o índice em [`content/README.md`](content/README.md). A página inicial reúne conteúdos de outras áreas; seu layout não é editado por um `.md` específico.
<!-- CACC-MODELOS-FIM -->
