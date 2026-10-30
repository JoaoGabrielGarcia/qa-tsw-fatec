# qa-tsw-fatec

Implementação dos três exercícios de Qualidade e Testes de Software em TypeScript, com Jest e desenvolvimento orientado a testes (TDD). Os testes foram escritos antes das implementações.

## Requisitos

- Node.js 20 ou superior
- npm

## Build e execução dos testes

Na raiz do repositório:

```bash
npm install
npm run build
npm test
```

Para executar os testes e gerar a cobertura em texto, HTML e LCOV:

```bash
npm run test:coverage
```

O relatório HTML fica em `coverage/lcov-report/index.html`; o resumo LCOV, em `coverage/lcov.info`.

## Exercício 1 — Triângulos

`classifyTriangle(a, b, c)` classifica os lados como escaleno, isósceles ou equilátero e retorna inválido quando algum lado não é inteiro positivo ou a desigualdade triangular não é satisfeita. Os testes incluem os três tipos válidos, as três permutações do isósceles, lado zero, lado negativo, os seis arranjos para soma igual e menor que o terceiro lado, e três zeros.

## Exercício 2 — Pessoa e e-mail

`PersonDAO.isValidToInclude(person)` acumula erros para nome fora do formato, idade fora de [1, 200], ausência de e-mails e cada endereço inválido. A validação do nome aceita letras Unicode separadas por espaços; o e-mail exige partes não vazias no formato local@domínio.extensão.

## Exercício 3 — Salário

`calculateNetSalary(baseSalary, position)` aplica as faixas de desconto especificadas para DESENVOLVEDOR, DBA, TESTADOR e GERENTE. Os testes cobrem os valores-limite e o valor imediatamente abaixo de cada limite.

## Evidências de cobertura

Geradas com `npm run test:coverage` (Jest/Istanbul). Percentuais medidos sobre os arquivos de cada exercício:

| Exercício | Statements | Branches | Functions | Lines |
| --- | ---: | ---: | ---: | ---: |
| 1 — Triângulos | 100% | 100% | 100% | 100% |
| 2 — Pessoa e e-mail | 100% | 100% | 100% | 100% |
| 3 — Salário | 100% | 100% | 100% | 100% |

Os relatórios detalhados por arquivo são produzidos no diretório `coverage/` ao executar o comando de cobertura.
