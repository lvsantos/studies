# Criar uma extensão própria do Spec Kit

A extensão é o mecanismo correto quando a automação precisa ser reutilizável, registrada para o agente e distribuída entre projetos. O núcleo do aprendizado aqui foi entender que uma extensão não é só um script: ela é um pacote com manifesto, comandos e configuração, e o contrato mínimo exige `extension.yml`, comandos em `commands/` e compatibilidade com as regras do Spec Kit.

O ponto mais útil foi compreender a diferença entre “script local” e “extensão”. O primeiro resolve um problema pontual. A segunda vira um bloco de funcionalidade do workflow, com instalação, registrabilidade e possibilidade de publicação.

A etapa de teste local com `specify extension add --dev /path/to/extension` foi a melhor forma de internalizar o ciclo real: escrever o manifesto, registrar comando, testar no agente e confirmar que o item apareceu no fluxo do projeto.
