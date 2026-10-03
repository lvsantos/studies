# Bundles comunitários: composição não é aprovação

## Insight

Um bundle comunitário distribui como unidade uma composição versionada de extensions, presets, workflows e steps. Resolve repetição e divergência ao preparar setups de papel/equipe; não cria o comportamento das peças nem garante que sejam adequadas ou seguras.

## Evidência prática

- O catálogo comunitário embutido é `discovery-only`: `specify bundle search` e `specify bundle info` permitem descoberta e inspeção, mas instalação por ID exige uma fonte explicitamente `install-allowed`.
- A revisão de submissão verifica metadados e acessibilidade, não audita nem endossa o bundle ou os componentes.
- `info` expande os componentes e versões declaradas. Dependências ainda precisam resolver por componentes empacotados, já instalados ou catálogos ativos; por isso, é preciso revisar também essas origens.
- Instalar um ZIP local não equivale a aprovar dependências externas nem dispensa a inspeção do repositório, da release e dos componentes.

## Aplicação

Para padronizar novos projetos, comparar o conjunto expandido com as necessidades do time, revisar os componentes e suas fontes, então distribuir por catálogo curado pela organização ou artefato versionado revisado. Para uma única capacidade, considerar instalar só a peça individual.

## Fontes

- [Community Bundles](https://github.github.io/spec-kit/community/bundles.html)
- [Referência de bundles](https://github.github.io/spec-kit/reference/bundles.html)
- [Catálogo comunitário](https://github.com/github/spec-kit/blob/main/bundles/catalog.community.json)
