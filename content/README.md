# Como publicar conteúdo no site do CACC

Cada item é um arquivo `.md` próprio. Basta criar o arquivo na pasta certa (e a imagem em `public/images/...`) — ele aparece no site após publicar. Nenhum código precisa ser alterado. O nome do arquivo vira o endereço (ex.: `eventos/oficina-git.md` → `/eventos/oficina-git`). Use letras minúsculas e hífens.

Campos marcados com * são obrigatórios. Campos de imagem podem ficar vazios (`""`): o site mostra um espaço "imagem pendente".

## eventos/
`title*`, `date*` (AAAA-MM-DD), `time`, `location`, `category`, `organizer`, `image` (`/images/eventos/arquivo.jpg`), `registration_url`, `status` (`upcoming` ou `past`; se omitido, é calculado pela data). Corpo: descrição completa.

## projetos/
`title*`, `author*`, `description*`, `image`, `technologies` (lista), `repository_url`, `demo_url`, `featured`, `month_project` (true em apenas um).

## acervo/
`title*`, `type*` (Livro, Curso, Vídeo, Artigo, Ferramenta, Repositório), `category*` (uma das áreas: Introdução à Computação, Algoritmos e Estruturas de Dados, Desenvolvimento Web, Inteligência Artificial, Redes de Computadores, Cibersegurança, Sistemas Operacionais, Matemática e Computação), `description`, `url*`, `image`.

## manuais/
`title*`, `description*`, `category*`, `updated`, `related` (lista de `label` + `url`). Use `##` para seções — elas geram o sumário.

## avisos/
`title*`, `date*`, `important` (true = fundo roxo na capa). O aviso mais recente aparece na página inicial.

## lojinha/
`title*`, `price*`, `images` (lista), `sizes` (lista), `availability` (só preencha se confirmado), `whatsapp` (opcional; senão usa o de `site.md`).

## gestao/integrantes.md
Lista `members` com `name`, `role`, `bio`, `photo`, `highlight` (presidência etc.), `links`. Troque `demo: true` por `false` ao inserir dados reais.

## site.md
Número de WhatsApp da lojinha, link do formulário de votação do projeto do mês, período da gestão.

<!-- CACC-MODELOS-INICIO -->
## Modelos completos e como publicar

Cada pasta de conteúdo possui um `modelo-completo.md.example` com **todos os campos relevantes** e um corpo de exemplo. Copie-o para um arquivo `nome-com-hifens.md`, altere os campos e só então publique. O `.example` é ignorado pelas importações `*.md` do Vite.

| Pasta | Campos e comportamentos importantes |
| --- | --- |
| `eventos/` | `title`, `date`, `time`, `location`, `category`, `organizer`, `image`, `registration_url`, `status: upcoming / past` ou status ausente para classificação automática pela data. |
| `projetos/` | `title`, `author`, `description`, `image`, `technologies: []`, `repository_url`, `demo_url`, `featured: true/false`, `month_project: true/false`. |
| `acervo/` | `title`, `type`, `category`, `description`, `url`, `image`. Abre link externo, corpo Markdown não é usado. |
| `manuais/` | `title`, `description`, `category`, `updated`, `related: [{ label, url }]`. Três ou mais títulos `##` geram sumário. |
| `avisos/` | `title`, `date`, `important`. Mais recente aparece na home; importante é roxo, normal é verde. |
| `lojinha/` | `title`, `price`, `images: []`, `sizes: []`, `availability`, `whatsapp`. Sem carrinho/estoque automático. |
| `gestao/` | Arquivo único `integrantes.md`: `demo`, `intro`, `photo`, `members` (nome, cargo, bio, foto, destaque, links). |
| `noticias/` | `title`, `description`, `date`, `updated`, `category`, `author`, `image`, `source_url`, `published`, `draft`. |
| `oportunidades/` | `title`, `description`, `category`, `organization`, `date`, `deadline`, `status`, `source_url`, `tags`, `published`, `draft`. |
| `disciplinas/` | `title`, `code`, `ppc`, `semester`, `workload`, `prerequisites`, `description`, `source_url`, `published`, `draft`. |
| `vida-academica/` | `title`, `description`, `category`, `updated`, `source_url`, `published`, `draft`. |
| `site.md` | Arquivo único: `whatsapp`, `vote_url`, `instagram`, `email`, `gestao_periodo`. Use `content/modelo-site.md.example` como referência. |

**Não crie segundos arquivos `.md` em `gestao/` ou outro `site.md`**: esses conteúdos são de configuração única. Modifique os arquivos existentes.

**Rascunhos:** `published: false` e `draft: true` ocultam itens somente nas quatro coleções novas. Nos conteúdos originais, até `published: false` seria ignorado. Mantenha modelos e rascunhos antigos em `.md.example`.

**Imagens:** arquivos em `public/images/...` são referenciados por `/images/...`. **Datas:** `YYYY-MM-DD` entre aspas. **Links externos:** use `https://...` e revise as fontes. **Markdown:** `##` seções, listas, tabelas, links e blocos de código continuam funcionando nos artigos.

O manual detalhado, com explicações e limitações reais do código, está em [`docs/GUIA-DE-CONTEUDO.md`](../docs/GUIA-DE-CONTEUDO.md).
<!-- CACC-MODELOS-FIM -->
