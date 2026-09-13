# Mapa pós-init do Spec Kit

## Contexto

Após executar `specify init --here --integration copilot`, o projeto passou a conter `.github/skills` e `.specify`.

## Aprendizado

- `.github/skills` é a interface de instruções do agente: cada `SKILL.md` descreve uma etapa invocável do processo.
- `.specify` é a infraestrutura do Spec Kit: templates, scripts, memória do projeto, workflows e metadados da integração.
- O ciclo completo recomendado para uma feature de produção é `constitution` -> `specify` -> `clarify` -> `plan` -> `checklist` -> `tasks` -> `analyze` -> `implement` -> `converge`.
- `specify` cria entendimento compartilhado; `plan` decide como construir; `tasks` organiza a execução; `implement` executa; `converge` encontra o que ainda falta.

## Insight não óbvio

As pastas instaladas não são a feature em si. Elas são o sistema que permite ao agente produzir e verificar os artefatos da feature em `specs/<feature>/`.

## Próxima prática

Usar uma necessidade real do projeto para executar `speckit-specify` e observar a criação de `spec.md` e do checklist de qualidade.
