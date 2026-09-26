# Extensão Git Branching Workflow do Spec Kit

A extensão `git` é oficial, bundled e opt-in. Ela organiza a camada de versionamento do workflow com inicialização, criação e validação de branches, detecção de remote e commits automáticos configuráveis.

O aprendizado mais importante foi não confundir branch Git com feature ativa do Spec Kit. Os comandos resolvem a feature pelo estado em `.specify/feature.json` ou por `SPECIFY_FEATURE_DIRECTORY`; trocar de branch não muda esse estado automaticamente.

A extensão complementa Bug Fix e Idea Assessment, mas não substitui seus objetivos. Ela isola e registra o trabalho de diagnóstico, decisão ou implementação em um fluxo Git previsível, com commits automáticos desativados por padrão e habilitados por etapa quando fizer sentido.