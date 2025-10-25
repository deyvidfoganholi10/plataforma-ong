# Instruções para Agentes AI - Plataforma ONG

Este documento fornece orientações essenciais para agentes AI trabalhando neste projeto.

## Visão Geral da Arquitetura

Este é um projeto web front-end simples para uma plataforma de ONG, estruturado da seguinte forma:

- `index.html` - Página inicial com informações sobre a ONG
- `projetos.html` - Página de projetos sociais
- `cadastro.html` - Formulário de cadastro de voluntários
- `style.css` - Estilos globais do site
- `script.js` - JavaScript para interatividade do formulário

### Padrões de Desenvolvimento

1. **Estrutura HTML**:
   - Uso consistente de `lang="pt-BR"` em todas as páginas
   - Header com navegação e footer padronizados
   - Seções principais envolvidas por `<main>`

2. **Estilização**:
   - Cores principais: 
     - Verde: `#4CAF50` (elementos de destaque)
     - Fundo: `#f4f4f9`
   - Tipografia: Arial como fonte principal
   - Layout responsivo com `max-width: 800px` para o conteúdo principal

3. **Formulários**:
   - Campos obrigatórios marcados com `required`
   - Estrutura padrão: label + input
   - Feedback via alert JavaScript para submissão

## Ambiente de Desenvolvimento

### Configuração de Debug
O projeto usa configuração para Chrome DevTools:
```json
{
    "url": "http://localhost:8080",
    "webRoot": "${workspaceFolder}"
}
```

### Convenções de Código
- Indentação: 2 espaços para HTML, 4 espaços para CSS/JS
- Classes CSS em português, seguindo nomenclatura descritiva (ex: `sobre`, `contato`, `cadastro`)
- Comentários em português

## Dicas de Desenvolvimento
1. Use o servidor local na porta 8080 para desenvolvimento
2. Mantenha a estrutura de navegação consistente entre as páginas
3. Siga o padrão de formulário estabelecido em `cadastro.html` para novos formulários
4. Respeite o esquema de cores definido em `style.css`