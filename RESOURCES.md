# GitHub Spec Kit Resources

## Knowledge

- [Spec Kit: installation guide](https://github.github.io/spec-kit/installation.html)
  Fonte primaria para pre-requisitos, instalacao do `specify-cli` e canais oficiais de distribuicao; confirma que Git e opcional no Spec Kit basico e necessario quando a extensao de Git esta habilitada.
- [Spec Kit: quickstart](https://github.github.io/spec-kit/quickstart.html)
  Fonte primaria para instalar o CLI e inicializar um projeto, incluindo o fluxo com GitHub Copilot.
- [Spec Kit: Agentic SDD reference](https://github.github.io/spec-kit/reference/agentic-sdd.html)
  Referencia detalhada dos comandos, artefatos, argumentos e relacoes entre as etapas do fluxo.
- [GitHub Spec Kit repository](https://github.com/github/spec-kit)
  Codigo-fonte, releases e documentacao mantidos pelo projeto; use para conferir mudancas e versoes.
- [Spec Persistence Models](https://github.github.io/spec-kit/concepts/spec-persistence.html)
  Fonte primaria para os tres modelos de mutacao de artefatos (flow-back, flow-forward, living spec).
- [Evolving Specs in Existing Projects](https://github.github.io/spec-kit/guides/evolving-specs.html)
  Fonte primaria para o loop operacional de cada modelo de persistencia no dia a dia.
- [Adopting Spec Kit in an Existing Project](https://github.github.io/spec-kit/guides/existing-projects.html)
  Fonte primaria para quando e como essa decisao aparece pela primeira vez em um projeto ja existente.
- [Spec Kit customization guide](https://github.github.io/spec-kit/guides/customization.html)
  Fonte primaria para escolher entre extensoes, presets, overrides locais, workflows e bundles ao adaptar o Spec Kit.
- [Spec Kit extensions reference](https://github.github.io/spec-kit/reference/extensions.html)
  Referencia primaria para ciclo de vida, catalogos, configuracao, hooks, prioridades e governanca de extensoes.
- [Spec Kit Community Extensions](https://github.github.io/spec-kit/community/extensions.html)
  Fonte primaria para a categoria de extensoes da comunidade, seu papel como catalogo de descoberta e os avisos de risco e manutencao do projeto.
- [Spec Kit extensions README](https://github.com/github/spec-kit/blob/main/extensions/README.md)
  Documento essencial para entender a diferenca entre catalogos proprios, catalogos comunitarios e instalacao por URL direta.
- [Spec Kit extension development guide](https://github.com/github/spec-kit/blob/main/extensions/EXTENSION-DEVELOPMENT-GUIDE.md)
  Guia oficial para criar um manifesto, registrar comandos, estruturar a extensao e testar a instalacao local.
- [Spec Kit extension API reference](https://github.com/github/spec-kit/blob/main/extensions/EXTENSION-API-REFERENCE.md)
  Referencia tecnica do manifesto, hooks, config, registradores e layout de arquivos da extensao.
- [Spec Kit extension publishing guide](https://github.com/github/spec-kit/blob/main/extensions/EXTENSION-PUBLISHING-GUIDE.md)
  Guia oficial do passo a passo para preparar a release, validar o pacote e submeter a extensao a catalogos públicos.
- [Spec Kit extension user guide](https://github.com/github/spec-kit/blob/main/extensions/EXTENSION-USER-GUIDE.md)
  Guia do usuario para descobrir, instalar, configurar e gerenciar extensoes em projetos reais.
- [Spec Kit RFC extension system](https://github.com/github/spec-kit/blob/main/extensions/RFC-EXTENSION-SYSTEM.md)
  Documento arquitetural que explica principios, manifestos, catalogos, hooks e seguranca do sistema de extensoes.
- [Spec Kit community catalog](https://github.com/github/spec-kit/blob/main/extensions/catalog.community.json)
  Catalogo bruto que mostra como as extensoes da comunidade sao descritas e organizadas antes da instalacao.
- [Spec Kit community catalog website](https://speckit-community.github.io/extensions/all-extensions)
  Index web para navegar pelos pacotes comunitarios e localizar categorias, autores e atualizacoes.
- [Spec Kit Bug Fixing Quickstart](https://github.github.io/spec-kit/guides/bugfix.html)
  Guia oficial para instalar a extensao de bug fix, reproduzir o fluxo assess → fix → test e avaliar quando ela e apropriada.
- [Spec Kit Agentic Bug Fix reference](https://github.github.io/spec-kit/reference/agentic-bugfix.html)
  Referencia oficial dos comandos `/speckit.bug.assess`, `/speckit.bug.fix` e `/speckit.bug.test`, incluindo o contrato de artefatos e o significado de verified, partial e failed.
- [Spec Kit Idea Assessment Quickstart](https://github.github.io/spec-kit/guides/assessment.html)
  Guia oficial para instalar e usar a extensao assess, validando se uma ideia merece investimento antes de entrar no fluxo de especificacao.
- [Spec Kit Agentic Idea Assessment reference](https://github.github.io/spec-kit/reference/agentic-assessment.html)
  Referencia oficial dos comandos `/speckit.assess.*`, dos artefatos em `.specify/assessments/<slug>/` e das regras de go, needs-clarification e kill.
- [Spec Kit assess extension README](https://github.com/github/spec-kit/blob/main/extensions/assess/README.md)
  Documento da propria extensao que detalha a pipeline, os artefatos, as guardrails e a relacao entre assessment e especificacao.
- [Spec Kit Coding Agent Context extension](https://github.com/github/spec-kit/blob/main/extensions/agent-context/README.md)
  README oficial da extensao bundled e opt-in que sincroniza a secao gerenciada dos arquivos de contexto dos agentes.
- [Spec Kit Git Branching Workflow extension](https://github.com/github/spec-kit/blob/main/extensions/git/README.md)
  README oficial da extensao bundled e opt-in para branches, validacao, remotes e commits automatizados.
- [Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl (Birgitta Bockeler, martinfowler.com)](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)
  Analise independente que define os tres niveis de SDD (spec-first, spec-anchored, spec-as-source) e traz uma visao critica sobre limitacoes praticas do Spec Kit.

## Wisdom

- [GitHub Discussions for Spec Kit](https://github.com/github/spec-kit/discussions)
  Comunidade oficial para duvidas praticas e relatos de uso; consultar quando a documentacao nao cobrir um caso.
