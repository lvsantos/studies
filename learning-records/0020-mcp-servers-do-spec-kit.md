# MCP servers do Spec Kit

## Insight

O `specify mcp` experimental conecta um host MCP ao Specify CLI via subprocesso local e `stdio`; não é um serviço HTTP nem uma integração automática do agente. A interface atual permite consultar apenas `version`.

## Evidência prática

- Expõe `specify_list_commands`, `specify_describe_command` e `specify_run_command`, mas só o comando pontuado `version` está disponível.
- A execução consulta `specify version --json` em processo filho isolado, usando o mesmo ambiente Python do CLI.
- Sucesso retorna JSON direto com `cli_version`, `runtime`, `system` e `features`; erros do CLI preservam `code`, `message` e `details`.
- O stdout é reservado para o protocolo. A interface não expõe projetos, artefatos, mutações, instalação/atualização ou workflows.
- A configuração do subprocesso depende do host MCP; a referência não define um formato universal de cliente.

## Aplicação

Use MCP quando o host precisar descobrir a versão e capacidades reportadas pelo Specify CLI. Antes de projetar automações do Spec Kit pelo agente, confira quais comandos o inventário MCP realmente permite; não presuma que os comandos centrais estejam expostos.

## Fontes

- [Referência oficial de MCP](https://github.github.io/spec-kit/reference/mcp.html)
- [Lição 0046: MCP servers do Spec Kit](../lessons/0046-mcp-servers-do-spec-kit.html)
- [Referência rápida local](../reference/spec-kit-mcp.html)
