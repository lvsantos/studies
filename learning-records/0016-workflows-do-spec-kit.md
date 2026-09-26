# Workflows do Spec Kit

Um workflow transforma um processo repetível em uma sequência executável: entradas, comandos/prompt/shell, decisões humanas, ramificações e estado persistido. O benefício central é reduzir a carga de lembrar e coordenar etapas, preservando revisão humana e permitindo retomar uma execução pausada ou falha.

Distinção a reter: workflow organiza quando e em que ordem as etapas acontecem; extension fornece capacidades/comandos novos; preset muda instruções ou formato de capacidades existentes. Eles podem ser combinados: workflows `bugfix` e `assess` encadeiam comandos fornecidos por extensões.

Limite de segurança importante: uma etapa `shell` executa com os privilégios locais, sem sandbox, e expressões interpoladas em `run` não são escapadas automaticamente. Inspecionar a definição antes de executar é parte do uso responsável.
