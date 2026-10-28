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
