# Extensão Coding Agent Context do Spec Kit

A extensão `agent-context` é oficial, bundled e opt-in. Ela resolve um problema de continuidade: manter uma seção gerenciada do arquivo de contexto do agente sincronizada com o plano ativo, sem sobrescrever as instruções que ficam fora dos marcadores.

O aprendizado central foi separar contexto de processo. Bug Fix produz diagnóstico, correção e verificação; Idea Assessment produz uma decisão sobre investimento; `agent-context` não decide nem implementa, apenas garante que o agente receba instruções e referências consistentes durante esses fluxos.

O comando `/speckit.agent-context.update`, ou sua forma com hífens, atualiza a seção gerenciada. A configuração em `.specify/extensions/agent-context/agent-context-config.yml` permite ajustar marcadores e múltiplos arquivos de contexto.