# Criar um preset próprio

Um preset começa por uma convenção recorrente, não pelo manifest. A escolha entre template, comando e extensão depende de onde a regra precisa atuar: formato do artefato, instruções do agente ou capacidade executável/integrada.

O scaffold oficial reduz o trabalho de estrutura e oferece exemplos de manifesto, caminhos e composição, mas não é instalável como produto pronto nem decide escopo, compatibilidade, testes ou publicação. É importante remover exemplos como `myext` que não se aplicam.

Para uma regra que adiciona uma seção a um template existente, `append` preserva o conteúdo inferior. O ciclo de evidência é instalar com `--dev` em projeto de laboratório, conferir `specify preset resolve`, gerar um artefato real, validar conteúdo novo e conteúdo preservado, então remover o preset. Só adicione override de comando se o resultado exigir instruções além da estrutura fornecida pelo template.