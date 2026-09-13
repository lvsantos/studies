# Resolução de conflito de PATH no upgrade do specify-cli via VS Code Snap

Quando o VS Code roda empacotado como Snap no Linux, o `uv` dentro do terminal integrado define como diretório de ferramentas o caminho de sandbox `~/snap/code/<build>/.local/bin`. Se o sistema já possuir um binário antigo em `~/.local/bin/specify` (que vem antes no `PATH`), o `specify self upgrade` reporta falha de verificação porque a invocação do shell continua chamando o binário antigo. A solução é forçar o destino com `UV_TOOL_BIN_DIR=$HOME/.local/bin uv tool install specify-cli --force`.
