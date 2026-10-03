# Spec Kit em monorepo e submodules

## Insight

O contexto Spec Kit é selecionado pelo projeto que contém `.specify/`, não pela raiz Git. Para uma feature coordenada entre submodules, basta inicializar Spec Kit no pai e manter um ciclo único de spec, plan, tasks e implement; os commits continuam separados por repo. O Spec Kit não herda constitutions locais: o pai mantém regras transversais e instrui o agente a ler os arquivos de constitution versionados e mantidos por cada repo filho.

## Aplicação

Mantenha `.specify/memory/constitution.md` no pai para princípios comuns e a instrução de carregar os documentos locais dos submodules. Cada repo filho mantém sua própria `CONSTITUTION.md`, revisada por seus responsáveis. Liste caminhos, repos e checks no plano/tarefas; o gitlink fixa a revisão dos documentos locais presente no workspace. Um ciclo Spec Kit atende quando os repositórios fazem parte da mesma feature coordenada.

## Fontes

- [Guia oficial do Spec Kit para monorepos](https://github.github.io/spec-kit/guides/monorepo.html)
- [Guia oficial de Contract-Driven Development](https://github.github.io/spec-kit/guides/contract-driven-development.html)
- [Pro Git: Submódulos](https://git-scm.com/book/pt-br/v2/Ferramentas-do-Git-Subm%C3%B3dulos)
- [Lição 49](../lessons/0049-speckit-monorepo-e-submodules.html)
- [Referência rápida](../reference/spec-kit-monorepo-e-submodules.html)
