# Guia de conteúdo e manutenção — CACC/UFPA

Este manual documenta o **comportamento implementado no código** `src/lib/content.ts` (coleções originais) e `src/lib/portal-content.ts` (portal acadêmico). Os modelos estão em `content/<colecao>/modelo-completo.md.example`; todos são exemplos, **não são dados oficiais**.

## 1. Como funciona o site

- O site usa React + TanStack Router + Tailwind; as páginas mantêm a estética escura do CACC.
- O Vite encontra arquivos `content/**/*.md` durante a compilação; o conteúdo não é atualizado em tempo real. Após o commit/deploy, as páginas refletem os novos arquivos.
- O nome do arquivo vira o *slug*: `content/eventos/oficina-git.md` → `/eventos/oficina-git`. Evite espaços, acentos e maiúsculas no nome.
- `---` delimita o **frontmatter YAML** (metadados). O texto abaixo é **Markdown**. Campos YAML sempre devem estar escritos com a grafia indicada.
- Imagens em `public/images/eventos/capa.jpg` são referenciadas por `/images/eventos/capa.jpg`; não use `public/` no caminho HTML.
- Modelos `.md.example` **não** entram no site; só renomeie para `.md` no momento de publicar. Esses arquivos de exemplo não devem ser copiados diretamente para a pasta publicada sem revisão.
- **Não** é um CMS com editor na web: as alterações são feitas nos arquivos do GitHub ou no projeto local. Alterar Markdown não troca a estrutura do menu, as fontes nem o layout.

### Passo a passo para uma publicação

1. Escolha a coleção e abra `modelo-completo.md.example` nela.
2. Copie para `titulo-descritivo.md` na **mesma pasta**; deixe o arquivo `.example` intacto.
3. Edite os campos do frontmatter. No YAML, listas usam `- item` e valores com caracteres especiais podem exigir aspas.
4. Preencha o corpo com Markdown, sem credenciais, dados pessoais sensíveis, conteúdos sem autorização ou fatos não conferidos.
5. Nas quatro coleções novas, deixe `published: false` e `draft: true` até a revisão. Na hora de publicar: `published: true`, `draft: false`.
6. Rode `npm run build`, confira a página localmente e faça o commit na branch de trabalho; depois envie um PR.

## 2. Mapa das páginas

| Interface | Origem dos dados | Observações |
| --- | --- | --- |
| **Início** `/` | `avisos`, `eventos`, `noticias`, `oportunidades`, `projetos`, `manuais` e `acervo` | O hero é componente TSX; os dados variáveis vêm das coleções. |
| **Eventos** `/eventos` e `/eventos/:slug` | `content/eventos/*.md` | Separação entre próximos e passados. |
| **Gestão** `/gestao` | `content/gestao/integrantes.md` | Um arquivo de configuração. |
| **Projetos** `/projetos` e `/projetos/:slug` | `content/projetos/*.md` | Projeto do mês e lista. |
| **Lojinha** `/lojinha` | `content/lojinha/*.md` + `content/site.md` | Catálogo com modal e pedidos por WhatsApp. |
| **Vida Acadêmica** `/vida-academica` e `/vida-academica/:slug` | `content/vida-academica/*.md` | O hub também tem atalhos fixos para Guias, Disciplinas e Acervo. |
| **Disciplinas** `/vida-academica/disciplinas` e detalhe | `content/disciplinas/*.md` | Filtros por PPC e semestre, além de busca. |
| **Guias/Manuais** `/manuais` e `/manuais/:slug` | `content/manuais/*.md` | Página de leitura com sumário automático. |
| **Acervo** `/acervo` | `content/acervo/*.md` | Cartões que abrem URLs externas; não há artigo interno. |
| **Oportunidades** `/oportunidades` e detalhe | `content/oportunidades/*.md` | Categoria, situação e filtro de inscrições abertas. |
| **Notícias** `/noticias` e detalhe | `content/noticias/*.md` | Categoria, data e as 3 mais recentes na home. |
| **Avisos** (faixa da home) | `content/avisos/*.md` | Somente o aviso mais recente aparece em destaque. |
| **Configuração do site** | `content/site.md` | Links globais e WhatsApp padrão. |

## 3. Eventos — `content/eventos/`

Template: `content/eventos/modelo-completo.md.example`.

| Campo | Tipo | Uso |
| --- | --- | --- |
| `title` | texto | Título do evento. |
| `date` | texto `YYYY-MM-DD` | Data e ordenação; necessária para classificar automaticamente. |
| `time`, `location` | texto | Horário e local. |
| `category` | texto | Etiqueta: oficina, palestra, defesa etc. |
| `organizer` | texto | Organizador. |
| `image` | caminho ou URL | Capa; vazio usa o tratamento gráfico existente. |
| `registration_url` | URL | Link de inscrição, se aplicável. |
| `status` | `past`, `upcoming` ou omitido | Controla listagem passada/futura. |

**Regra exata:** `past: true` é calculado quando `status === "past"` **ou** quando `status !== "upcoming"` e a `date` é anterior à data atual. Portanto, `status: upcoming` **força** o evento a continuar nos próximos mesmo se a data já passou; `status: past` **força** a lista de passados. A data é comparada em formato `YYYY-MM-DD` usando o dia UTC do JavaScript: eventos próximos da meia-noite podem ter diferença de fuso. Não há status de cancelamento implementado: não use `cancelled` esperando uma categoria própria. Para cancelar, atualize o texto e oriente os estudantes.

**Início:** o primeiro item de `proximosEventos` vira o cartão principal; os seguintes aparecem na lista à direita. O resumo do card vem do primeiro parágrafo útil do Markdown. Escreva um parágrafo inicial curto, antes de `##`.

## 4. Projetos — `content/projetos/`

Template: `content/projetos/modelo-completo.md.example`.

- `title`: título; `author`: estudantes/equipe; `description`: texto dos cards.
- `image`: foto/capa; `technologies`: lista YAML de tecnologias.
- `repository_url`: link do código; `demo_url`: link da demonstração.
- `featured: true` coloca o projeto à frente na ordenação; não garante sozinho o título **Projeto do Mês**.
- `month_project: true` faz o projeto aparecer como **Projeto do Mês**. Use em **um único arquivo**. O site pega o primeiro que encontrar depois da ordenação, se houver mais de um.
- O corpo Markdown aparece na página individual; a home mostra os primeiros projetos da lista ordenada.
- `content/site.md` tem `vote_url`, usado no botão de votação do projeto do mês.

## 5. Gestão — `content/gestao/integrantes.md`

Modelo: `content/gestao/modelo-integrantes.md.example`.

- `demo`: booleano, sinaliza dados de demonstração. Deixe `false` com informações reais revisadas.
- `intro`: texto de apresentação; `photo`: imagem da gestão, se houver.
- `members`: lista de integrantes, cada um com `name`, `role`, `bio`, `photo`, `highlight` (`true`/`false`) e `links` (`[{ label, url }]`).
- O componente lê **o primeiro arquivo** encontrado no diretório `gestao/`; por segurança, **edite o arquivo `integrantes.md` existente e não crie outro `.md` nesta pasta**.
- O texto Markdown após o frontmatter não é usado nesse módulo.

## 6. Lojinha — `content/lojinha/`

Modelo: `content/lojinha/modelo-completo.md.example`.

- `title`, `price`: nome e preço em texto (ex.: `"R$ 35,00"`). Não há conversão numérica ou cálculo de frete.
- `images`: lista dos arquivos de foto; `images[0]` vira capa do cartão.
- `sizes`: lista de tamanhos; para adesivos use `[]`.
- `availability`: texto livre que só aparece se preenchido (por exemplo, `"Pré-venda"`). **Não representa controle automático de estoque**.
- `whatsapp`: número específico do produto; quando vazio, é usado o `whatsapp` de `content/site.md`.
- O corpo Markdown é exibido na janela de detalhes. O botão **Pedir no WhatsApp** abre uma conversa; não há checkout.

## 7. Guias e Calouros — `content/manuais/`

Modelo: `content/manuais/modelo-completo.md.example`.

- `title`, `description`: nome e resumo.
- `category`: categoria usada para agrupar os guias (ex.: `Primeiros passos`, `Sistemas acadêmicos`, `Procedimentos`).
- `updated`: última conferência em `YYYY-MM-DD`.
- `related`: lista de pares `label`/`url` mostrada após o artigo. Ex.: 

  ```yaml
  related:
    - label: "Central de serviços"
      url: "https://exemplo.org"
  ```

- O corpo do Markdown usa o renderizador `src/lib/content.ts`. Quando houver **mais de dois títulos `##`** (três ou mais), o site mostra um **sumário lateral no desktop e expansível no celular**.
- Estes guias continuam acessíveis por `/manuais` mesmo quando anunciados como "Guias e Calouros" em Vida Acadêmica. Não remova as URLs antigas.

## 8. Acervo — `content/acervo/`

Modelo: `content/acervo/modelo-completo.md.example`.

- `title` (nome do material), `type` (Livro, Curso, Vídeo, Artigo, Ferramenta, Repositório), `category`, `description`, `url`, `image`.
- Categorias válidas para os filtros atuais (use **exatamente** a grafia):
  1. Introdução à Computação
  2. Algoritmos e Estruturas de Dados
  3. Desenvolvimento Web
  4. Inteligência Artificial
  5. Redes de Computadores
  6. Cibersegurança
  7. Sistemas Operacionais
  8. Matemática e Computação
- Os cards são links para `url`. O corpo Markdown **não é utilizado**, portanto descreva brevemente em `description`.
- Sem imagem o site monta uma capa visual usando título, tipo e categoria.

## 9. Avisos — `content/avisos/`

Modelo: `content/avisos/modelo-completo.md.example`.

- `title`: título da faixa; `date`: dia de publicação `YYYY-MM-DD`.
- `important: false` → faixa **verde**; `important: true` → faixa **roxa**, conforme o tema atual.
- O conteúdo Markdown é a mensagem da faixa. O site seleciona **o primeiro aviso depois de ordenar por data decrescente**; não há expiração automática.
- Para um aviso que deixou de ser relevante, remova/arquive o `.md` ou publique outro mais recente. Para uma matéria longa, use `noticias/`.

## 10. Notícias — `content/noticias/`

Modelo: `content/noticias/modelo-completo.md.example`.

- `title`, `description`, `date`, `updated`, `category`, `author`, `image`, `source_url` e corpo Markdown.
- `category` forma automaticamente os filtros; mantenha padrões consistentes como `Acadêmico`, `CACC`, `Pesquisa`, `Comunidade`.
- `date` é a data da notícia para ordenação **descendente**, não uma data de agendamento; publicar no futuro **não posterga** a exibição automaticamente.
- Até três notícias mais recentes aparecem na home (imagem é opcional); as demais em `/noticias`.
- `published: false` **ou** `draft: true` ocultam o item, mesmo que o arquivo termine em `.md`. Quando pronto: `published: true`, `draft: false`.
- `source_url` é aceito somente quando começa com `http://` ou `https://`.

## 11. Oportunidades — `content/oportunidades/`

Modelo: `content/oportunidades/modelo-completo.md.example`.

- `title`, `description`, `category`, `organization`, `date`, `deadline`, `status`, `source_url`, `tags`, corpo Markdown.
- O mural possui filtro por categoria e opção **Apenas inscrições abertas**. A home exibe até três oportunidades classificadas como abertas.
- `deadline`: `YYYY-MM-DD`, se confirmado. **Sem prazo e sem status não significa aberta**.
- `status`: `aberta`, `encerrada`, `cancelada`, `fechada`, `sem_prazo` ou vazio (situação a confirmar).
- `encerrada`, `cancelada` e `fechada` são sempre tratadas como fechadas, mesmo com data de inscrição futura.
- Quando existe `deadline`, o sistema considera inscrições abertas até o dia indicado (inclusive), exceto nos três status fechados. Mesmo `status: aberta` com prazo passado ficará fechada.
- Sem `deadline`, apenas `status: aberta` ou `status: sem_prazo` é considerado aberto. `sem_prazo` deve ser usado apenas quando a fonte de fato não especifica data-limite.
- `tags`: lista de palavras-chave; sem garantia de que todas estejam exibidas como filtro em todos os cards.
- `published: false` ou `draft: true` ocultam a oportunidade. Confirme sempre o edital original.
- A data atual usada pelo cálculo de prazo é da zona `America/Belem`; edite a fonte se a vaga for de outro fuso e o prazo encerrar por horário.

## 12. Disciplinas — `content/disciplinas/`

Modelo: `content/disciplinas/modelo-completo.md.example`.

- `title`, `code`, `ppc`, `semester`, `workload`, `prerequisites`, `description`, `source_url` e corpo Markdown.
- `ppc` aceita lista, por exemplo `["2010", "2024"]`; informe múltiplos PPCs **somente quando os dados forem realmente equivalentes**.
- `semester` é texto, como `"1"`, e o catálogo o ordena numericamente; `prerequisites` é lista YAML.
- Busca por nome, código e descrição; filtros por PPC e semestre são derivados dos arquivos publicados.
- A ementa, bibliografia e orientações ficam no corpo Markdown. Separe **dados oficiais** de **dicas dos alunos**; registre o link do PPC em `source_url`.
- `published: false` ou `draft: true` ocultam a disciplina até sua revisão.

## 13. Vida Acadêmica — `content/vida-academica/`

Modelo: `content/vida-academica/modelo-completo.md.example`.

- `title`, `description`, `category`, `updated`, `source_url` e corpo Markdown.
- Use para procedimentos, calendários, PPCs, TCC, estágio e normas que merecem página própria.
- Não substitui **Manuais**: preferencialmente, use `manuais/` quando o conteúdo for um passo a passo operacional e `vida-academica/` quando for um tema acadêmico amplo, regulamento ou referência.
- O hub `/vida-academica` possui blocos fixos para Guias, Disciplinas e Acervo. Os artigos desta pasta aparecem na seção de informações acadêmicas.
- `published: false` ou `draft: true` ocultam o item.

## 14. Configuração geral — `content/site.md`

Modelo de referência: `content/modelo-site.md.example`. **Modifique o arquivo existente.**

- `whatsapp`: número para a lojinha com DDI/DDD, sem caracteres extras; pode ser sobrescrito por produto.
- `vote_url`: endereço do formulário de votação do projeto do mês; link aparece quando preenchido.
- `instagram`, `email`, `gestao_periodo`: dados globais disponíveis para os componentes atuais. Nem todos são necessariamente exibidos em todas as páginas.
- A home (Hero e composição gráfica) é controlada em `src/routes/index.tsx`, com complementos em `src/components/site/PortalHome.tsx`. **Não existe um Markdown genérico que altera o layout da página inicial**.

## 15. Regras de Markdown e design

```md
## Seção que aparece no sumário

Parágrafo com **negrito**, *itálico* e [link](https://exemplo.org).

- Lista de itens
- Outro item

| Coluna A | Coluna B |
| --- | --- |
| Dado 1 | Dado 2 |

```

Para blocos de código, use três crases e o nome da linguagem (por exemplo `ts`, `bash` ou `python`). O estilo `.prose-cacc` do site mantém a identidade escura do tema.

**Cuidado com segurança:** o site injeta o HTML gerado de Markdown em algumas páginas. Não aceite HTML arbitrário de pessoas não confiáveis; revise PRs e links, sobretudo imagens e URLs externas.

## 16. Checklist antes do commit

- [ ] Usei um arquivo com nome simples (`meu-titulo.md`) na pasta correta.
- [ ] Copiei o modelo e substituí TODOS os textos fictícios, fontes e caminhos.
- [ ] Confirmei título, data e categoria; datas usam `YYYY-MM-DD` entre aspas.
- [ ] Fotos e documentos são próprios/licenciados/autorizados e os caminhos existem em `public/`.
- [ ] Fontes oficiais, editais, PPCs e oportunidades foram conferidos e estão atuais.
- [ ] Novos módulos: `published: true` e `draft: false` na hora de publicar.
- [ ] Coleções antigas: não confiei em `published: false` para esconder rascunhos.
- [ ] Evento: conferi `status: past/upcoming` ou optei por omitir para classificação automática.
- [ ] Oportunidade: conferi status e `deadline` na fonte oficial.
- [ ] Gestão, Projeto do Mês e `site.md`: atualizei somente o singleton correto.
- [ ] Rodei `npm run build` e testei mobile e desktop.
- [ ] `git diff --check` passou e nenhum conteúdo anterior foi removido sem intenção.

## 17. Onde mudar a interface, se necessário

| Objetivo | Código principal |
| --- | --- |
| Cores, fontes e elementos globais | `src/styles.css` |
| Cabeçalho, rodapé e menu | `src/components/site/Shell.tsx` |
| Hero e eventos na home | `src/routes/index.tsx` |
| Notícias, oportunidades e atalhos na home | `src/components/site/PortalHome.tsx` |
| Tipos, leitura e comportamento das coleções antigas | `src/lib/content.ts` |
| Tipos, leitura e filtros das coleções novas | `src/lib/portal-content.ts` |
| Páginas individuais antigas | `src/routes/eventos.$slug.tsx`, `src/routes/projetos.$slug.tsx`, `src/routes/manuais.$slug.tsx` |
| Artigos das coleções novas | `src/components/site/PortalArticle.tsx` |

Não edite código apenas para publicar conteúdo regular: os templates Markdown são suficientes na maioria dos casos.
