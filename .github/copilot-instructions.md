# Copilot Instructions — Plataforma ONG

## Objetivo
Gerar e ajustar arquivos do projeto "ONG_Plataforma" para atender à entrega da disciplina: interface visual profissional, responsiva e acessível. Produzir HTML, CSS e pequenos trechos de JavaScript conforme especificações.

## Estrutura do repositório
Gere/ative os arquivos abaixo, mantendo exatamente essa estrutura:


## Regras gerais de implementação
- Use **HTML5 semântico** (header, nav, main, section, footer, form, etc.).
- CSS em um único arquivo `css/style.css` (pode modularizar depois).
- Evitar JS desnecessário; quando usado, colocar somente em `js/script.js`.
- Código limpo, indentado com 2 espaços.
- Comentários breves no CSS e HTML explicando seções importantes.

## Design System — Variáveis CSS (obrigatórias)
No topo de `css/style.css` criar bloco `:root` com:
- **Cores (mínimo 8)**: variáveis para primária, secundária, sucesso, aviso, erro, fundo, card, texto, borda.
- **Tipografia (mínimo 5 tamanhos)**: variáveis para títulos, subtítulos, texto, pequeno.
- **Espaçamento modular**: variáveis para 8px, 16px, 24px, 32px, 48px, 64px.

Exemplo de nomes:


## Grid e responsividade
- Implementar container grid de **12 colunas** usando CSS Grid para o layout principal.
- Definir **5 breakpoints**: 1200px, 992px, 768px, 576px, 400px.
- Usar Flexbox para alinhamentos internos (botões, cards, nav items).
- Garantir que `.cards` e `.galeria` se ajustem usando `repeat(12, 1fr)` / `auto-fit` conforme apropriado.

## Componentes obrigatórios
Copilot deve gerar/ajustar:

### Navegação
- Menu principal horizontal para desktop.
- Submenu dropdown para itens de projetos.
- Menu hambúrguer para mobile (toggle via `js/script.js`).

### Cards de projeto
- Cards responsivos com imagem, título, descrição e tags.
- Hover com leve elevação e transição; imagem com `object-fit: cover`.
- Suportar placeholders (`via.placeholder.com`) quando não houver imagens reais.

### Botões
- Classes `.btn` e `.btn-voltar` com estados: `:hover`, `:focus`, `:active`, `:disabled`.
- Acessibilidade: `aria-label` quando necessário.

### Formulário (cadastro.html)
- Formulário com: Nome, Email, Telefone, Categoria (select), Mensagem (textarea), Checkbox de consentimento e botão enviar.
- Regras de validação visual com pseudo-classes `:invalid` / `:valid`.
- Mensagens inline de erro/sucesso (elementos com classes `.alert`).

### Componentes de feedback
- `.alert` (success, error, info)
- Modal simples (HTML + CSS + small JS para abrir/fechar)
- Toasts (simples, posicionamento bottom-right)

### Badges/Tags
- Classe `.tag` com variações (categoria, status).

## Acessibilidade (a11y)
- Todos os `img` devem ter `alt` significativos.
- Contraste de cores adequado (focar contraste entre texto e fundo).
- Focus visível para elementos interativos (outline customizado).
- Usar atributos ARIA quando o componente for dinâmico (ex.: `aria-expanded` no hambúrguer).

## Exemplos de snippets esperados
Copilot deve propor exemplos prontos como:
- Cabeçalho com `nav` e submenu.
- Bloco `.area-imagens` com `.galeria` e 3 `.item`.
- Formulário com validação por HTML5 e mensagens visuais.

## JavaScript mínimo (js/script.js)
- Toggle do menu hambúrguer.
- Abrir/fechar modal.
- Mostrar toast de confirmação de envio (simulação).

## Mensagens de commit sugeridas
- `feat: adicionar design system e grid responsivo`
- `feat: implementar nav com hambúrguer e submenu`
- `style: cards de projeto e componentes visuais`
- `fix: ajustes de responsividade e acessibilidade`

## Observações finais
- Não adicionar dependências externas (CDNs) sem explicação. Fontes do sistema (Arial) preferíveis.
- Todos os caminhos devem ser relativos (`css/style.css`, `js/script.js`, `imagens/...`).
- Gerar código seguro, sem executar scripts externos.
