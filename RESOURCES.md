# GitHub Spec Kit Resources

## Knowledge

- [Spec Kit: installation guide](https://github.github.io/spec-kit/installation.html)
  Fonte primaria para pre-requisitos, instalacao do `specify-cli` e canais oficiais de distribuicao; confirma que Git e opcional no Spec Kit basico e necessario quando a extensao de Git esta habilitada.
- [Spec Kit: upgrade guide](https://github.github.io/spec-kit/upgrade.html)
  Fonte primaria para atualizar separadamente CLI, arquivos de integracao e extensoes, entender protecoes por manifesto, customizacoes preservadas e riscos do caminho de recuperacao `init --force`.
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
- [Spec Kit customization guide: bundles](https://github.github.io/spec-kit/guides/customization.html#bundles-role-based-setups)
  Secao primaria para entender bundles como setups versionados por papel/equipe e decidir quando provisionar um conjunto completo em vez de instalar um componente isolado.
- [Spec Kit bundles reference](https://github.github.io/spec-kit/reference/bundles.html)
  Referencia primaria para manifestos, busca, inspecao, instalacao, atualizacao, remocao, catalogos, limites offline e publicacao de bundles.
- [Spec Kit Community Bundles](https://github.github.io/spec-kit/community/bundles.html)
  Fonte primaria para descobrir bundles comunitarios, entender o que a revisao do catalogo cobre e verificar a resolucao dos componentes e os requisitos de submissao. A presenca no catalogo nao representa auditoria nem endosso.
- [Spec Kit community bundle catalog](https://github.com/github/spec-kit/blob/main/bundles/catalog.community.json)
  Catalogo atual de descoberta; em 2026-10-03 lista `agentstandards`, `sicario-spec` e `specassay`, com metadados de papel, versao e contagem de componentes.
- [Spec Kit Bundle Submission issue template](https://github.com/github/spec-kit/issues/new?template=bundle_submission.yml)
  Formulario oficial para submeter ou atualizar bundles comunitarios; requer release versionada, artifact gerado por `specify bundle build`, README, evidencia de instalacao limpa e URLs de catalogos externos quando necessarias.
- [Spec Kit contribution guide: community catalog submissions](https://github.com/github/spec-kit/blob/main/CONTRIBUTING.md)
  Define que entradas e atualizacoes de catalogos comunitarios de bundles comecam por issue, nao por PR manual; a triagem aciona validacao automatizada e gera a mudanca de catalogo.
- [Spec Kit first-party bundle catalog](https://github.com/github/spec-kit/blob/main/bundles/catalog.json)
  Catalogo de bundles curados e mantidos pelo projeto, atualmente `bugfix` e `assess`; diferente do catalogo comunitario e sem rota de auto-submissao.
- [Spec Kit workflows reference](https://github.github.io/spec-kit/reference/workflows.html)
  Referencia primaria para definicoes YAML, entradas, tipos de passos, execucao, status, retomada, overlays e limites de seguranca dos workflows.
- [Spec Kit first-party workflow catalog](https://github.com/github/spec-kit/blob/main/workflows/catalog.json)
  Lista workflows bundled e mantidos no repositorio oficial; compare a sequencia e os requisitos com alternativas da comunidade.
- [Spec Kit community workflow catalog](https://github.com/github/spec-kit/blob/main/workflows/catalog.community.json)
  Lista workflows comunitarios para descoberta. A presenca no catalogo nao substitui a leitura da definicao versionada nem uma revisao independente.
- [Spec Kit first-party workflow step catalog](https://github.com/github/spec-kit/blob/main/workflows/step-catalog.json)
  Catalogo oficial separado para tipos de steps reutilizaveis; a consulta de 2026-09-26 mostra a lista vazia.
- [Spec Kit first-party bundle catalog](https://github.com/github/spec-kit/blob/main/bundles/catalog.json)
  Fonte para confirmar os bundles first-party atualmente publicados e seus metadados verificados; use para distinguir IDs instaláveis por catálogo de manifests demonstrativos.
- [Spec Kit assess bundle](https://github.com/github/spec-kit/tree/main/bundles/assess)
  Manifest e README oficiais do bundle de Idea Assessment; detalham a composição extension `assess` + workflow `assess`, versões e handoff manual para `specify`.
- [Spec Kit bugfix bundle](https://github.com/github/spec-kit/tree/main/bundles/bugfix)
  Manifest e README oficiais do bundle de correção; detalham a composição extension `bug` + workflow `bugfix`, gate humano, comandos e remoção.
- [Spec Kit example bundles](https://github.com/github/spec-kit/tree/main/examples/bundles)
  Quatro manifests de papel (business analyst, developer, product manager e security researcher) para estudar composição; são exemplos no repositório, não entradas do catálogo first-party. Verifique se os componentes declarados existem em catálogos ativos.
- [Spec Kit community workflow step catalog](https://github.com/github/spec-kit/blob/main/workflows/step-catalog.community.json)
  Catalogo comunitario separado de steps; a consulta de 2026-09-26 mostra a lista vazia. Ao avaliar uma entrada futura, revise o Python que o CLI importa.
- [Spec Kit workflow step design](https://github.com/github/spec-kit/blob/main/design/workflow-step.md)
  Fonte primaria para o contrato dos step types e para entender que um pacote instalado importa e executa codigo Python no processo do CLI.
- [Spec Kit workflows README](https://github.com/github/spec-kit/blob/main/workflows/README.md)
  Guia oficial sobre execucao, catalogos, instalação, estado e retomada; esclarece que o catalogo comunitario e mantido por autores independentes e nao e auditado ou endossado.
- [Spec Kit workflows directory](https://github.com/github/spec-kit/tree/main/workflows)
  Definicoes oficiais dos workflows `speckit`, `bugfix` e `assess`, alem dos catalogos e guias de arquitetura/publicacao; use para conferir como as sequencias reais encadeiam comandos e gates.
- [Spec Kit bundled workflow: speckit](https://github.com/github/spec-kit/blob/main/workflows/speckit/workflow.yml)
  YAML first-party do ciclo SDD completo: entradas `spec`/`integration`, comandos core e gates de revisão antes de plan e tasks.
- [Spec Kit bundled workflow: bugfix](https://github.com/github/spec-kit/blob/main/workflows/bugfix/workflow.yml)
  YAML first-party de triagem e correção de bug; conferir junto da extensão `bug`, pois seus comandos exigem essa extensão.
- [Spec Kit bundled workflow: assess](https://github.com/github/spec-kit/blob/main/workflows/assess/workflow.yml)
  YAML first-party para avaliar ideias antes do SDD; inclui gate final e handoff deliberadamente manual para `specify`.
- [Spec Kit Bug Fixing Quickstart](https://github.github.io/spec-kit/guides/bugfix.html)
  Guia oficial com pré-requisitos, exemplo por slug e distinção entre assess, fix e test, incluindo resultados verified/partial/failed.
- [Spec Kit Agentic Bug Fix reference](https://github.github.io/spec-kit/reference/agentic-bugfix.html)
  Contrato oficial dos comandos de bug fix, arquivos de saída e limites de escrita no código-fonte.
- [Spec Kit Idea Assessment Quickstart](https://github.github.io/spec-kit/guides/assessment.html)
  Exemplo oficial de intake a decide, critérios dos vereditos e resolução de dúvidas por edição/refinamento dos artefatos.
- [Spec Kit Agentic Idea Assessment reference](https://github.github.io/spec-kit/reference/agentic-assessment.html)
  Contrato oficial dos comandos, pré-requisitos entre estágios, artefatos, evidências e handoff opcional para SDD.
- [Spec Kit workflow execution and resume reference](https://github.github.io/spec-kit/reference/workflows.html)
  Fonte primária para inputs, gates, estados persistidos, `workflow status` e `workflow resume`.
- [Spec Kit workflow system architecture](https://github.com/github/spec-kit/blob/main/workflows/ARCHITECTURE.md)
  Fonte primária para o modelo de execução, steps built-in, expressões, resolução de inputs e persistência; consulte ao desenhar um workflow próprio.
- [Spec Kit workflow publishing guide](https://github.com/github/spec-kit/blob/main/workflows/PUBLISHING.md)
  Fonte primária para estruturar e testar um pacote de workflow, publicar release versionada no repositório do autor e submeter metadados ao catálogo comunitário por PR. A revisão comunitária verifica formato/completude, não audita sistematicamente a segurança.
- [Project-local overrides and resolution](https://github.github.io/spec-kit/guides/customization.html#project-local-overrides-and-resolution)
  Secao primaria sobre o caminho `.specify/templates/overrides/`, precedencia dos overrides locais e a diferenca entre resolver templates/scripts e materializar comandos na integracao ativa.
- [Spec Kit presets reference](https://github.github.io/spec-kit/reference/presets.html)
  Referencia primaria para instalar e administrar presets, inspecionar arquivos resolvidos, entender precedencia e aplicar estrategias de composicao.
- [Spec Kit Community Presets](https://github.github.io/spec-kit/community/presets.html)
  Fonte primaria para descobrir presets comunitarios e entender o limite da verificacao do catalogo: metadados completos e bem formatados nao significam auditoria ou endosso do codigo.
- [Spec Kit community preset catalog](https://github.com/github/spec-kit/blob/main/presets/catalog.community.json)
  Catalogo de descoberta com IDs, autores, versoes, requisitos, arquivos fornecidos e links para os pacotes comunitarios; consultar antes de avaliar um item.
- [Spec Kit first-party preset catalog](https://github.com/github/spec-kit/blob/main/presets/catalog.json)
  Catalogo bundled mantido no repositorio oficial; distingue presets first-party como `lean` e `constitution-sync` dos itens comunitarios.
- [Spec Kit presets README](https://github.com/github/spec-kit/blob/main/presets/README.md)
  Guia de funcionamento, instalacao e resolucao dos presets; inclui exemplos e ressalvas para `constitution-sync`.
- [Preset constitution-sync](https://github.com/github/spec-kit/tree/main/presets/constitution-sync)
  README, manifest e comando oficial do preset; descreve materializacao protegida da constituicao, propagacao em `/constitution`, compatibilidade minima e riscos de drift/reconciliacao.
- [Preset lean](https://github.com/github/spec-kit/tree/main/presets/lean)
  README, manifest e comandos oficiais; substitui cinco comandos do fluxo por prompts diretos que geram artefatos sem templates separados.
- [Preset scaffold](https://github.com/github/spec-kit/tree/main/presets/scaffold)
  Molde oficial para desenvolver presets; deve ser copiado e personalizado (o ID inicial e `my-preset`), nao tratado como pacote pronto chamado `scaffold`.
- [Preset publishing guide](https://github.com/github/spec-kit/blob/main/presets/PUBLISHING.md)
  Guia oficial para validar a estrutura do preset, testá-lo localmente com `--dev`, preparar README/licença/release e submetê-lo ao catálogo da comunidade. A edição consultada em 2026-09-26 exige README específico acessível com um comando `specify preset add ...`; a submissão comunitária atualiza `presets/catalog.community.json` (ordem por ID) e `docs/community/presets.md` (ordem por nome), via PR. O preset permanece hospedado no repositório do autor.
- [Preset self-test](https://github.com/github/spec-kit/tree/main/presets/self-test)
  Manifest, templates e comandos marcados usados como fixture para verificar substituicao e composicao; nao e um workflow recomendado para produto.
- [Spec Kit Pirate Speak preset demo](https://github.com/mnriem/spec-kit-pirate-speak-preset-demo)
  Exemplo comunitario que demonstra como templates e comandos de um preset podem alterar a estrutura dos artefatos e as instrucoes do agente sem modificar o Spec Kit.
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
- [Spec Kit authentication reference](https://github.github.io/spec-kit/reference/authentication.html)
  Referencia primaria da autenticacao HTTP opt-in do Specify CLI para catalogos, downloads de extensoes e verificacoes de releases; documenta hosts, provedores, esquemas e protecao de credenciais.
  Referencia primaria do servidor MCP experimental do Specify CLI; documenta o transporte stdio, as tres ferramentas genericas, o suporte atual apenas a `version` e os formatos de resultado e erro.
 [Handling Complex Features](https://github.github.io/spec-kit/concepts/complex-features.html)
- [Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl (Birgitta Bockeler, martinfowler.com)](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html)
 [Spec of Specs](https://github.github.io/spec-kit/concepts/spec-of-specs.html)
  Analise independente que define os tres niveis de SDD (spec-first, spec-anchored, spec-as-source) e traz uma visao critica sobre limitacoes praticas do Spec Kit.

- [Spec Kit: Contract-Driven Development](https://github.github.io/spec-kit/guides/contract-driven-development.html)
  Fonte primaria para identificar interfaces entre componentes, definir comportamento observavel e propriedade do contrato, integrar contratos ao fluxo `specify → plan → tasks → implement`, verificar provider e consumer e planejar releases compativeis. A documentacao esclarece que o Spec Kit nao sincroniza contratos nem orquestra releases automaticamente.
- [Using Spec Kit in a Monorepo](https://github.github.io/spec-kit/guides/monorepo.html)
  Guia primario para manter projetos Spec Kit independentes em subpastas, selecionar o alvo com `.specify/` ou `SPECIFY_INIT_DIR`, e entender que constitutions são locais sem herança embutida. Para uma feature única coordenada pelo pai, mantenha as constitutions dos submodules nos próprios repos e instrua o agente a lê-las.
- [Git Tools - Submodules (Pro Git, português brasileiro)](https://git-scm.com/book/pt-br/v2/Ferramentas-do-Git-Subm%C3%B3dulos)
  Referencia do Git para submodules: o repositório pai registra um commit fixo (gitlink), clonagem/atualização recursiva e coordenação de alterações entre repositórios independentes.
- [Contract-Driven Development: Monorepo and multi-repository examples](https://github.github.io/spec-kit/guides/contract-driven-development.html#one-authoritative-owner)
  Orientação primaria de ownership de contratos: referenciar o mesmo artefato no mesmo repositório; entre repositórios, publicar uma versão ou sincronizar cópias com origem e revisão fixadas.

## Wisdom

- [GitHub Discussions for Spec Kit](https://github.com/github/spec-kit/discussions)
  Comunidade oficial para duvidas praticas e relatos de uso; consultar quando a documentacao nao cobrir um caso.
