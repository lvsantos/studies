# Publicar uma extensão em catálogos do Spec Kit

A regra mais importante dessa etapa foi separar três camadas de distribuição: instalação direta por URL, catálogo próprio da organização e catálogo da comunidade.

O catálogo da comunidade serve para descoberta pública, não para instalação automática. O fluxo oficial é: pesquisar, rever, decidir e depois adicionar a extensão a um catálogo próprio com `install_allowed: true`, ou instalar via URL para testes ad hoc.

Isso explica a diferença entre descoberta e governança: o time pode usar a comunidade como fonte de ideias, mas a decisão de permitir instalação continua ficando com o catálogo interno ou com a política do ambiente de cada organização.

A publicação formal para a comunidade segue um processo de release + issue de submissão + revisão do mantenedor. O que torna a extensão séria é o conjunto de documentação, semver, release no GitHub e declaração de compatibilidade, não apenas a existência de um repositório.
