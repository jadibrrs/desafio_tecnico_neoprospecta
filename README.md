# Desafio técnico Neoprospecta - Estagiário(a) de garantia de qualidade (QA) de software
## Bônus 1 - Teste automatizado de interface

Período: 23/04/2024 a 26/04/2024

### ℹ Sobre o projeto

👋 Olá! Este é a minha resolução da atividade bônus do desafio técnico relacionado ao cargo acima mencionado. 

Para elaborar essa automação, percebi que o software está aparentemente em uma fase posterior à SPEC Pública que nos foi enviada para criarmos os casos de teste. Portanto, alguns aspectos pequenos (como frases levemente diferentes entre a SPEC e a aplicação) eu considerei como corretos para melhor aproveitamento dos testes, mas mudanças muito bruscas eu considerei como erros (como mostrado no do teste CT008, do cenário 007).

Meu nível em Cypress ainda é básico, mas espero que gostem. 

### ℹ Pré-condições

É necessário ter Node.js and npm instalados para rodar este projeto.

> Eu usei as versões `v18.15.0` e `9.5.0` do Node.js e npm, respectivamente. Recomendo usar as mesmas versões ou posteriores a elas.

### ℹ Instalação

Execute `npm install` (ou `npm i`) para instalar as dev dependencies.

Execute `npx cypress run` (ou `npm t`) para rodar os testes em headless mode.

Ou, execute `npx cypress open` para abrir o Cypress em interactive mode.

### ℹ Linguagem de programação e ferramenta utilizadas

- JavaScript
- Cypress (versão 9.5.1)
