# Automation Exercise - Testes E2E com Cypress

Projeto de automação de testes WEB para o site [Automation Exercise](https://automationexercise.com), construído com **Cypress**, padrão **Page Objects** e relatórios com **cypress-mochawesome-reporter**. A execução contínua é feita via **GitHub Actions**.

## Dependências

| Ferramenta | Versão | Finalidade |
| --- | --- | --- |
| [Node.js](https://nodejs.org) | >= 20 (recomendado 22) | Runtime |
| [Cypress](https://www.cypress.io) | ^16 | Framework de testes E2E |
| [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) | ^5 | Relatório HTML com gráficos e screenshots embutidos |

## Instalação

```bash
npm install
```

Para validar a instalação do binário do Cypress:

```bash
npx cypress verify
```

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run cy:open` | Abre o Cypress em modo interativo |
| `npm run cy:run` | Executa todos os testes em modo headless e gera o relatório |
| `npm run cy:run:chrome` | Executa no Chrome |
| `npm run cy:run:firefox` | Executa no Firefox |
| `npm run clean:reports` | Remove os relatórios anteriores |

Para apontar para outro ambiente: `CYPRESS_BASE_URL=https://outro-ambiente npm run cy:run`.

## Estrutura do projeto

```text
.
├── .github/workflows/cypress.yml   # Pipeline de CI
├── cypress.config.js               # Configuração do Cypress e do reporter
└── cypress/
    ├── e2e/                        # Specs organizadas por funcionalidade
    │   ├── auth/                   # login.cy.js, register.cy.js
    │   ├── home/                   # home.cy.js
    │   └── products/               # products.cy.js
    ├── fixtures/                   # Massa de dados estática
    ├── reports/                    # Relatório gerado (ignorado pelo git)
    └── support/
        ├── api/                    # Chamadas de API para preparar/limpar dados
        ├── pages/                  # Page Objects
        │   ├── components/         # Componentes reutilizáveis (ex.: Header)
        │   ├── BasePage.js
        │   ├── HomePage.js
        │   ├── LoginPage.js
        │   ├── SignupPage.js
        │   ├── ProductsPage.js
        │   └── index.js            # Ponto único de importação
        ├── utils/                  # Geração de dados dinâmicos
        ├── commands.js             # Comandos customizados
        └── e2e.js                  # Hooks globais e registro do reporter
```

## Boas práticas adotadas

- **Page Objects**: seletores e ações ficam nas páginas; as specs contêm apenas o fluxo e as asserções.
- **Modularização**: componentes (`Header`), utilitários e comandos separados por responsabilidade.
- **Seletores estáveis**: uso preferencial de atributos `data-qa` e IDs em vez de classes de estilo ou XPath.
- **Sem `cy.wait()` fixo**: sincronização baseada nas retentativas automáticas do Cypress.
- **Retentativas** em modo `run` (`retries.runMode = 2`) para mitigar instabilidades de rede.

## Relatórios

Ao final do `cy:run`, o relatório HTML é gerado em `cypress/reports/html/index.html`, com gráficos e screenshots das falhas embutidos.

## CI/CD (GitHub Actions)

O workflow [.github/workflows/cypress.yml](.github/workflows/cypress.yml) é executado em:

- `push` e `pull_request` para a branch `main`;
- agendamento de segunda a sexta às 09:00 UTC;
- disparo manual (`workflow_dispatch`), com escolha do navegador.

Etapas: checkout, setup do Node (com cache do npm), `npm ci`, execução dos testes e publicação dos artefatos `cypress-report` (sempre) e `cypress-screenshots` (em caso de falha).

## Adicionando novos testes

1. Crie ou reutilize um Page Object em `cypress/support/pages` e exporte-o em `index.js`.
2. Crie a spec em `cypress/e2e/<funcionalidade>/<nome>.cy.js`.
