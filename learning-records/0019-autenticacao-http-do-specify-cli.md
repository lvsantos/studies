# Autenticação HTTP do Specify CLI

## Insight

A autenticação do Spec Kit é opt-in e pertence às requisições HTTP de saída do Specify CLI. Ela dá ao CLI acesso a fontes remotas protegidas; não autentica o agente, o Git ou os usuários da aplicação.

## Evidência prática

- O CLI lê `~/.specify/auth.json` para associar hosts a provedores e esquemas de autenticação.
- Os casos documentados incluem leitura de catálogos, downloads de extensões e verificações/downloads de releases.
- `token_env` permite manter o segredo fora do arquivo de configuração; a documentação recomenda restringir as permissões do arquivo.
- Em redirecionamentos para hosts não declarados, o cabeçalho de autorização é removido.
- Um wildcard como `*.example.com` cobre subdomínios, mas não o host base.

## Aplicação

Antes de alterar integração ou configuração do agente diante de um `401` ou `403`, identifique o host requisitado e confira a entrada correspondente, a variável de token e as permissões necessárias. Não configure credenciais para recursos públicos sem necessidade.

## Fontes

- [Referência oficial de autenticação](https://github.github.io/spec-kit/reference/authentication.html)
- [Lição 0045: Autenticação do Spec Kit](../lessons/0045-autenticacao-do-spec-kit.html)
- [Referência rápida local](../reference/spec-kit-authentication.html)