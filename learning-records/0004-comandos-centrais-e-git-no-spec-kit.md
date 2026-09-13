# O fluxo central do Spec Kit separa intenção, decisão e execução

## Contexto

A lição 4 apresentou os comandos centrais do Spec Kit usando a necessidade de exportar estudos como exemplo.

## Aprendizado

- `constitution` define princípios do projeto; `specify` define o que e por que; `plan` define como; `tasks` define a ordem de execução.
- `clarify`, `checklist` e `analyze` funcionam como portões de qualidade antes da implementação.
- `implement` executa `tasks.md`; `converge` compara a implementação com os artefatos e acrescenta o que ainda falta.
- A forma do comando depende do agente: este projeto usa `/speckit-...`, enquanto a documentação também mostra `/speckit....`.
- A extensão de Git é opcional e seu benefício principal é organizar cada mudança com uma fronteira revisável, rastreável e reversível.

## Insight não óbvio

O branch Git e a feature ativa do Spec Kit não são a mesma coisa. O branch ajuda a organizar o trabalho, mas os comandos resolvem a feature pela referência em `.specify/feature.json` (ou configuração equivalente). Trocar de branch não deve ser tratado como garantia de trocar a pasta ativa.

## Próxima prática

Escolher uma necessidade real do projeto, rodar `specify`, observar a `spec.md` criada e identificar uma ambiguidade que mereça `clarify` antes de qualquer `plan`.
