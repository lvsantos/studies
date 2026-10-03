# Distinguir os workflows oficiais first-party

## Insight

Os workflows `speckit`, `bugfix` e `assess` resolvem perguntas diferentes: entregar feature, reparar comportamento quebrado e decidir se uma ideia merece investimento. `approve`/`reject` são decisões de execução de um gate, não vereditos de domínio.

## Evidência prática

- `speckit` contém gates antes de plan e tasks, mas `reject` aborta; não há loop de revisão automático.
- `bugfix` revisa o diagnóstico antes de `fix`; somente `fix` altera fonte. O estado `completed` do workflow não garante resultado `verified` no artefato de teste.
- `assess` grava `go`, `needs-clarification` ou `kill` antes do gate final. Aprovar o gate não altera o veredito nem executa `specify`.
- Runs pausados retomam pelo mesmo `run_id`; rejeitar um gate configurado para abort encerra aquela execução sem remover os relatórios existentes.

## Aplicação

Escolher o fluxo pela pergunta e revisar o artefato de domínio, além do estado do motor, antes de decidir o próximo passo.

## Fontes

- [Definições oficiais de workflows](https://github.com/github/spec-kit/tree/main/workflows)
- [Referência de workflows](https://github.github.io/spec-kit/reference/workflows.html)
- [Agentic Bug Fix](https://github.github.io/spec-kit/reference/agentic-bugfix.html)
- [Agentic Idea Assessment](https://github.github.io/spec-kit/reference/agentic-assessment.html)