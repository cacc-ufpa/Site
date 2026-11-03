```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

<!-- CACC-MODELOS-INICIO -->
## Portal do CACC: páginas, conteúdos e modelos Markdown

O site é um portal **estático** com React, TanStack Router e Tailwind. Notícias, disciplinas, oportunidades, eventos e demais conteúdos são administrados com arquivos `.md` em `content/`: você edita o arquivo, revisa e faz commit para publicar. A identidade visual (tema escuro, verde-lima, roxo, fontes e componentes) permanece definida em `src/`.

| Área exibida | Pasta/arquivo de edição | O que o arquivo permite definir |
| --- | --- | --- |
| **Início** (`/`) | Reúne várias coleções | Hero fixo em TSX; faixa do aviso mais recente; próximos eventos; 3 notícias recentes; oportunidades abertas; projetos e atalhos. |
| **Eventos** (`/eventos`) | `content/eventos/*.md` | Data, horário, local, organizador, categoria, imagem, inscrições e `status: upcoming`/`past`. |
| **Gestão** (`/gestao`) | `content/gestao/integrantes.md` | Foto coletiva, diretoria, cargos, biografias, links, destaque e modo de demonstração. |
| **Projetos** (`/projetos`) | `content/projetos/*.md` | Autoria, tecnologias, código, demonstração, `featured` e `month_project`. |
| **Lojinha** (`/lojinha`) | `content/lojinha/*.md` | Preço, fotos, tamanhos, disponibilidade, descrição e contato WhatsApp. |
| **Vida Acadêmica** (`/vida-academica`) | `content/vida-academica/*.md` | Procedimentos, PPCs, estágio, TCC, calendários e links institucionais. |
| **Disciplinas** (`/vida-academica/disciplinas`) | `content/disciplinas/*.md` | PPC, semestre, código, carga horária, pré-requisitos, ementa e bibliografia. |
| **Guias e Calouros** (`/manuais`) | `content/manuais/*.md` | Guias passo a passo com categoria, atualização e links relacionados. |
| **Acervo** (`/acervo`) | `content/acervo/*.md` | Catálogo de links para livros, cursos, ferramentas etc., por categoria. |
| **Oportunidades** (`/oportunidades`) | `content/oportunidades/*.md` | Vagas, bolsas, hackathons, editais, prazo, status e fonte. |
| **Notícias** (`/noticias`) | `content/noticias/*.md` | Publicações com data, categoria, autor, capa, fontes e conteúdo. |
| **Avisos** (faixa da home) | `content/avisos/*.md` | Mensagem breve; `important: false` verde / `true` roxo. |
| **Configuração geral** | `content/site.md` | WhatsApp padrão da lojinha, link de votação, redes, e-mail e período da gestão. |

**Comece pelos modelos** em cada pasta: `modelo-completo.md.example`. Eles não são publicados. Para criar uma notícia, por exemplo, copie `content/noticias/modelo-completo.md.example` para `content/noticias/titulo-da-noticia.md`, preencha os dados e marque `published: true` e `draft: false` quando estiver revisada.

**Atenção:** apenas as coleções **novas** (`noticias`, `oportunidades`, `disciplinas`, `vida-academica`) interpretam `published: false` e `draft: true`. As coleções antigas **não** ocultam rascunhos por esses campos: deixe os modelos com extensão `.md.example` até a publicação.

Em **eventos**, `status: past` força a lista de passados e `status: upcoming` força próximos eventos. Se o campo for omitido, o código decide pela comparação da data do evento com a data atual. Use `YYYY-MM-DD` entre aspas e não use `cancelled` como status de evento: ele não é interpretado.

Para instruções campo a campo, exemplos, imagens, Markdown, filtros, checklists e limitações técnicas, leia **[`docs/GUIA-DE-CONTEUDO.md`](docs/GUIA-DE-CONTEUDO.md)**. O guia resumido permanece em [`content/README.md`](content/README.md). Os procedimentos de instalação do portal estão em [`README-PORTAL.md`](README-PORTAL.md).
<!-- CACC-MODELOS-FIM -->
