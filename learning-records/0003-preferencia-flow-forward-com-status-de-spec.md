# Preferência por flow-forward com controle de status de spec

O usuário comparou espontaneamente spec-first (descartar a pasta da feature após o merge para master) com flow-forward (nunca alterar uma pasta concluída; criar uma nova para qualquer mudança) e concluiu, sem que isso estivesse explícito na lição, que o flow-forward só é sustentável se houver um **controle de status da spec** (por exemplo, ativa/substituída) documentado na constitution do projeto. Isso mostra entendimento correto de que a fraqueza real do flow-forward não é só a duplicação de conteúdo entre pastas, mas a **rastreabilidade da linhagem**: sem status explícito, ninguém sabe qual pasta é a atual.

## Implicações

- Próximas lições sobre este tema podem pular a explicação básica dos três modelos e ir direto para **como implementar** o rastreamento de status no flow-forward (ex.: campo `status` no front-matter de `spec.md`, um índice em `specs/README.md`, ou convenção de nomes com `superseded-by`).
- O usuário está inclinado a rejeitar `living spec` e `flow-back` como padrão de time, preferindo imutabilidade (`flow-forward`) ou descarte total (`spec-first`) a artefatos que mudam de fonte de verdade.
