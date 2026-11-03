---
title: "Language Model From Scratch"
author: "Kohei Seko"
description: "Modelo de Linguagem Causal baseado na arquitetura Transformer Decoder-only, desenvolvido e treinado do zero usando apenas dados em português"
image: "/images/projetos/kohei.png"
technologies:
  - Python
  - Jupyter Notebook
repository_url: "https://github.com/koheiseko/language-model-from-scratch"
demo_url: ""
featured: true
month_project: true
---

## Sobre o projeto

O repositório contêm uma implementação simples e organizada de um Modelo de Linguagem Causal baseado na arquitetura Transformer Decoder-only, desenvolvido e treinado do zero usando apenas dados em português.

O modelo de ~50m de parâmetros, foi desenvolvido usando Pytoch e treinado na etapa de pretraining com ~1B de tokens do dataset Corpus Carolina.

Os componentes principais foram escritos manualmente, sem recorrer a módulos prontos como `nn.Linear` ou `F.scaled_dot_product_attention`: camadas lineares e de embedding, RMSNorm, SwiGLU, RoPE, atenção multi-head causal, softmax, cross-entropy, AdamW, schedule de learning rate, gradient clipping e amostragem de tokens. A atenção é explícita (sem FlashAttention), o que favorece a clareza do código em troca de eficiência.
