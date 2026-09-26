# Exemplo da extensão agent-context com GitHub Copilot

O ponto que tornou a extensão `agent-context` concreta foi observar um projeto que usa apenas o GitHub Copilot. Ela pode atualizar `.github/copilot-instructions.md` sem substituir as regras escritas manualmente pela equipe.

O arquivo mantém uma seção entre `<!-- SPECKIT START -->` e `<!-- SPECKIT END -->`. Nessa seção, a extensão registra referências ao plano e aos demais artefatos da feature ativa. Quando o plano muda, somente esse bloco é atualizado; o conteúdo fora dele permanece intacto.

Assim, `agent-context` não é uma extensão obrigatória para quem usa Copilot. Ela vale a pena quando o plano muda com frequência, quando as instruções precisam permanecer consistentes entre sessões ou quando a equipe quer automatizar essa sincronização. Em um projeto pequeno e estável, manter o arquivo manualmente pode ser suficiente.