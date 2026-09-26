# Presets do Spec Kit

Um preset adapta a forma como o processo existente produz artefatos e orienta agentes; não é, por si só, uma capacidade nova. Templates controlam a estrutura dos arquivos produzidos, enquanto comandos orientam o agente que os preenche.

A resolução acontece arquivo por arquivo: override local, presets por prioridade, extensões e núcleo. Números menores têm precedência maior. Portanto, vários presets podem coexistir e arquivos diferentes podem vir de camadas diferentes; `specify preset resolve <nome>` revela a origem efetiva.

O modo padrão `replace` troca o arquivo inteiro. Presets também podem compor templates e comandos com `prepend`, `append` ou `wrap`; scripts só aceitam `replace` e `wrap`. O exemplo Pirate Speak evidencia a força dessa combinação: títulos e estrutura vêm dos templates, e as instruções mudam a voz do agente, sem alterar o motor do Spec Kit.

Para escolher: preset quando uma convenção reutilizável muda o processo existente; override quando a mudança é específica de um projeto; extensão quando há nova capacidade ou integração. Componentes de comunidade exigem inspeção da origem e do conteúdo antes da instalação.