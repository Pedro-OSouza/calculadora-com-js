# 📟 Calculadora Modular em JavaScript

Uma calculadora feita com HTML, CSS e JavaScript modularizado, com foco em separação de responsabilidades e código limpo. Esta é a versão `origin`, servindo como base sólida para futuras melhorias, refatorações e funcionalidades extras.

---

## 🧠 Sobre o Projeto

Esta calculadora:

- Utiliza **JavaScript ES Modules** (`import/export`) para manter o código organizado.
- Tem foco em **validação e controle de entrada**, evitando bugs comuns como operadores duplicados ou cálculos quebrados.
- Utiliza uma **arquitetura em camadas**:
  - `View`: Responsável pela interface e interação do usuário.
  - `Calculator`: Responsável pelos cálculos e lógica pura.

---

## 🎯 Funcionalidades

- Operações básicas: soma, subtração, multiplicação e divisão.
- Botão de **limpar** (`C`) e **apagar último caractere** (`←`).
- Validações internas para impedir erros de uso comum.
- Interface simples, pronta para estilização adicional.

---

## 📁 Estrutura do Projeto

📦calculadora/
┣ 📂scripts/
┃ ┣ 📜app.js
┃ ┗ 📂modules/
┃ ┣ 📜view.js
┃ ┗ 📜calculadora.js
┣ 📂style/
┃ ┗ 📜style.css
┣ 📜index.html
┗ 📜README.md

## 🚀 Como Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora.git

2. Navegue até a pasta::
  cd calculadora

3. Abra o index.html no navegador.
  Nenhuma dependência externa é necessária. Só abrir e usar.

## 🛠️ Próximos Passos (Branchs Futuras)
 
 - Suporte a ponto flutuante (números decimais)
 - Suporte a teclado físico
 - Adição de histórico de cálculos
 - Modo dark/light
 - Interface mobile aprimorada
   
