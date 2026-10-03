# Contract-Driven Development no Spec Kit

## Insight

Requisitos dizem o que o usuário precisa; contratos descrevem como componentes colaboram; planos locais explicam como cada componente será construído. Um contrato útil especifica comportamento observável, inclusive erros e semântica, não apenas campos e tipos.

## Aplicação

Ao encontrar uma fronteira entre componentes, identificar provedor e consumidores durante `specify`, acordar e versionar a interface durante `plan`, e pedir testes de contrato para ambos os lados em `tasks`. Mocks ajudam, mas não demonstram conformidade do provedor real. Se houver divergência, corrigir a fonte autoritativa e reconciliar os artefatos consumidores.

## Fonte

- [Guia oficial de Contract-Driven Development](https://github.github.io/spec-kit/guides/contract-driven-development.html)
- [Lição 48](../lessons/0048-contract-driven-development.html)
- [Referência rápida](../reference/spec-kit-contract-driven-development.html)